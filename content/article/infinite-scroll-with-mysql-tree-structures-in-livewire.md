---
published_at:
image: /images/infinite-scroll-with-mysql-tree-structures-in-livewire.png
title: Infinite Scroll with MySql Tree Structures in Livewire
---

## The Challenge

My team recently had the task of paginating a MySQL database table with
self-references, resulting in a tree structure. The requirements included
displaying trees in depth-first order, paginating results with infinite scroll
so visual representations of parent-child relationships aren't interrupted, and
allowing efficient node insertion at any level of the tree while rendering new
nodes instantly.

I've put together a simple example application to demonstrate the obsicles we
found along the way and how we solved them. To follow along, ensure that PHP
8.4, Composer, and Laravel Installer are installed. Then, run the following
commands to create a new Laravel project and initialize the necessary classes:

```bash
composer require -g livewire/installer
laravel new infinite-paginate-tree --livewire
cd infinite-paginate-tree
php artisan make:model Node -m
php artisan make:livewire Nodes
php artisan make:livewire NodesPage
php aritsan make:migration create_nodes_table
```

From there, I simplified the app layout to remove the need for user
authentication. And I modified the routes to provide a single route to the nodes
component.

```php [resources/views/components/layouts/app.blade.php]
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="dark">

<head>
    @include('partials.head')
</head>

<body class="min-h-screen bg-white antialiased dark:bg-linear-to-b dark:from-neutral-950 dark:to-neutral-900">
    {{ $slot }}
</body>

</html>
```

```php [routes/web.php]
<?php

use App\Livewire\Nodes;
use Illuminate\Support\Facades\Route;

Route::get('/', Nodes::class)->name('home');
```

You can also find the complete code for this example on
[GitHub](https://github.com/ben-everly/infinite-paginate-tree)

## Why MySQL Trees Are Tricky

Modeling a tree structure in a relational database is relatively simple. In this
example, nodes are stored as rows in a `nodes` table. The edges are represented
by a (not so) foreign key, `parent_id`, that references another row in the same
table. You could also represent edges using another table with columns for
`parent_node_id` and `child_node_id`, but for our purposes, the former solution
was less complex and more efficient.

A significant obstacle, however, lies in ordering the nodes correctly to enable
seamless pagination. Some databases have support for this process, like
Postgres, which offers the `ltree` type, or MongoDB, which natively supports
trees. If you were starting with a clean slate, you might want to start there.
Unfortunately, the data in my case was already in MySQL, which as of version 8
does not have support for trees. But instead of migrating to a new database, we
decided to work around the limitations.

Your first instinct, as mine was, might be to sort the nodes in application code
and manually set an index in the database. However, since we allow nodes to be
inserted at any point in the tree, this would require us to re-index after every
insert. This will become a major bottleneck, causing slow writes and potentially
locking issues. A better approach is to index with a string containing a "path"
to the node. Each node is indexed relative to its siblings, and then the index
is prefixed with the indexes of each of its parents to create the path. Since we
aren't reordering, that means a path can be set when a node is created and
doesn't need to be updated again.

However, there is still a problem: string-based paths fail to sort integers with
varying lengths correctly. For example, `/1/2/` sorts before `/1/10/`. To
address this, we can pad each part of the path with zeros to ensure equal
lengths, enabling string comparisons to correctly mimic integer sorting.
However, if the number of nodes in a group exceeds the padding limit, sorting
breaks down. For this example we'll just assume each group contains fewer than
100,000 nodes and pad each part to 5 digits.

## Handling Inserts and Infinite Pagination in Livewire

Managing and displaying node inserts while preserving infinite scroll
functionality presents another hurdle. The goal is to display new nodes in the
correct order as the user creates them, without needing a full page refresh.
Using a limit an offset is problematic because inserting a new node in the
middle of the tree would shift everything after it, meaning we would have to
update every page we've displayed after the insert.

To solve this, we can instead use cursor pagination with start and end cursors
for each page, and let the pages size vary. When a new node is created determine
if it fits in the existing pages. If it is within the range of a displayed page,
simply refresh that page. If it is between two displayed pages then update a
cursor so that the new node is included in one of the existing pages.

## Implementing the Solution

The first step is to create the database table. With the previous explanation,
implementing the migration should be straightforward for those familiar with
Laravel. We create a `nodes` table with the `parent_id` foreign key and an
indexed `path` column.

```php [database/migrations/xxxx_xx_xx_xxxxxx_create_nodes_table.php]
<?php

use App\Models\Node;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('nodes', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Node::class, 'parent_id')->nullable()->constrained();
            $table->string('path')->index();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('nodes');
    }
};
```

To initialize `path`, we'll use the Eloquent `creating` event by finding the
last node in the same group and increment the last part of the path. Other than
that, the model will make `parent_id` fillable and implement Eloquent
relationships.

```php [app/Models/Node.php]
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Node extends Model
{
    protected $fillable = ['parent_id'];

    public static function boot()
    {
        parent::boot();

        static::creating(function (self $node) {
            $pathIndex = $node->parent
                ? $node->parent->children()->max('path')
                : Node::whereNull('parent_id')->max('path');
            $pathIndex = collect(explode('/', $pathIndex))
                ->filter()
                ->last() + 1;
            $node->path = ($node->parent?->path ?? '/')
                .str_pad($pathIndex, 5, '0', STR_PAD_LEFT).'/';
        });
    }

    public function parent()
    {
        return $this->belongsTo(Node::class, 'parent_id');
    }

    public function children()
    {
        return $this->hasMany(Node::class, 'parent_id');
    }
}
```

For the UI, we need one component to display a page of nodes, and a second
component to manage infinite pagination and mount all the page components. We
will also use a wireable data class to help the two components communicate.

The primary responsibility of the `NodesPageData` class is to persist the
cursors across requests. It will also store a collection of nodes which do not
get persisted across requests. Instead, the collection is only used when
initially mounting a page. It allows us to pass the nodes between components to
avoid querying the database twice. Finally, a `key` property based on the
cursors will help uniquely identify each page for dispatching events.

```php [app/Livewire/NodesPageData.php]
<?php

namespace App\Livewire;

use Illuminate\Support\Collection;
use Livewire\Wireable;

class NodesPageData implements Wireable
{
    public string $key;

    public function __construct(
        public string $start_cursor,
        public string $end_cursor,
        public ?Collection $nodes = null
    ) {
        $this->key = $this->start_cursor.'-'.$this->end_cursor;
    }

    public function toLivewire(): array
    {
        return [
            'start_cursor' => $this->start_cursor,
            'end_cursor' => $this->end_cursor,
        ];
    }

    public static function fromLivewire($value): static
    {
        return new self($value['start_cursor'], $value['end_cursor']);
    }

    public static function fromNodes(Collection $nodes): static
    {
        if ($nodes->isEmpty()) {
            throw new \InvalidArgumentException(
                'Cannot create from an empty collection of nodes.'
            );
        }

        $startCursor = $nodes->first()->path;
        $endCursor = $nodes->last()->path;

        return new self($startCursor, $endCursor, $nodes);
    }
}
```

The `NodesPage` component renders a single page of nodes and handles child
creation. It accesses `NodesPageData` to check if nodes have been passed, and if
not it uses the cursors to query the database. It renders the nodes with a left
margin determined by the nodes 'depth', which is computed by counting the
delimiters in its `path`. Lastly, a button allows child node creation, which is
delegated to the parent component by dispatching an event.

```php [app/Livewire/NodesPage.php]
<?php

namespace App\Livewire;

use App\Models\Node;
use Illuminate\Support\Collection;
use Livewire\Attributes\Computed;
use Livewire\Attributes\On;
use Livewire\Component;

#[On(NodesPage::REFRESH_EVENT.'{pageData.key}')]
class NodesPage extends Component
{
    public const REFRESH_EVENT = 'nodes_page.refresh.';

    public NodesPageData $pageData;

    #[Computed]
    public function nodes(): Collection
    {
        if ($this->pageData->nodes !== null) {
            return $this->pageData->nodes;
        }

        return Node::query()
            ->orderBy('path')
            ->where('path', '>=', $this->pageData->start_cursor)
            ->where('path', '<=', $this->pageData->end_cursor)
            ->get();
    }

    public function createChild(int $parentId)
    {
        $this->dispatch(Nodes::CREATE_NODE_EVENT, $parentId);
    }
}
```

```php [resources/views/livewire/nodes-page.blade.php]
@php
    use App\Livewire\Nodes;
@endphp
<div>
    @foreach ($this->nodes as $node)
        @php
            $depth = substr_count($node->path, '/') - 2;
        @endphp
        <div class="p-2 my-2 flex gap-2" style="margin-left: {{ $depth * 20 }}px;">
            <h3>Node {{ $node->id }}</h3>
            <button class="border" wire:click="createChild({{ $node->id }})">
                Create Child
            </button>
        </div>
    @endforeach
</div>
```

The final piece is the `Nodes` component, which tracks the pages using an array
of `NodesPageData`. When a page is added, it keeps the next cursor as well as a
flag to indicate if there are more pages to reduce database calls.

The create node method creates nodes, obviously, and then determines how it fits
into the existing pages, updating cursors if needed. It also displays the first
page when the first node is created.

```php [app/Livewire/Nodes.php]
<?php

namespace App\Livewire;

use App\Models\Node;
use Illuminate\Pagination\Cursor;
use Illuminate\Support\Collection;
use Livewire\Attributes\On;
use Livewire\Component;

class Nodes extends Component
{
    public const CREATE_NODE_EVENT = 'node.create';

    /** @var array<int, NodesPageData> */
    public array $pages = [];

    public string $nextCursor = '';

    public bool $morePages = true;

    public function mount()
    {
        $this->addPage();
    }

    public function addPage()
    {
        if (! $this->morePages) {
            return;
        }
        $nodes = Node::orderBy('path')->cursorPaginate(
            20, ['*'], 'path',
            Cursor::fromEncoded($this->nextCursor)
        );
        if ($this->morePages = $nodes->hasMorePages()) {
            $this->nextCursor = $nodes->nextCursor()->encode();
        }

        collect($nodes->items())
            ->whenNotEmpty(fn (Collection $items) => (
                $this->pages[] = NodesPageData::fromNodes($items)
            ));
    }

    #[On(self::CREATE_NODE_EVENT)]
    public function createNode(?int $parentId = null)
    {
        $node = Node::create(['parent_id' => $parentId]);

        foreach ($this->pages as $index => $page) {
            $nextPage = $this->pages[$index + 1] ?? null;
            if (
                $node->path >= $page->start_cursor
                    && $node->path <= $page->end_cursor
            ) {
                $this->dispatch(NodesPage::REFRESH_EVENT.$page->key);

                return;
            } elseif (
                $node->path < $nextPage?->start_cursor
                    || (! $nextPage && ! $this->morePages)
            ) {
                $this->pages[$index] = new NodesPageData(
                    $this->pages[$index]->start_cursor,
                    $node->path
                );

                return;
            }
        }
        if (! $this->pages) {
            $this->pages[] = NodesPageData::fromNodes(collect([$node]));
        }
    }
}
```

```php [resources/views/livewire/nodes.blade.php]
<div>
    <button class="border" wire:click="createNode">Add Node</button>
    @foreach ($this->pages as $index => $page)
        <livewire:nodes-page :wire:key="$page->key" :pageIndex="$index" :pageData="$page" />
    @endforeach
    @if ($this->morePages)
        <button class="border" wire:click="addPage">Load More</button>
    @endif
</div>
```

## That's It

While this implementation serves as a starting point, there are opportunities
for further refinement. For instance, we could implement safeguards to prevent
`path` parts from exceeding the padding limit, ensuring accurate sorting. We
could also split pages into two if too many nodes are added without a page
refresh. This is intended as a demonstration, and therefore we will leave it at
that.

I hope this guide has provided you with a clear and practical approach to
implementing MySQL tree structures with infinite scrolling in Livewire. I
learned quite a lot working on this project, and I hope you did too!
