---
published_at:
image: /images/infinite-scroll-with-tree-structures-in-livewire.png
title: Infinite Scroll with Tree Structures in Livewire
---

## The Challenge

Recently at work, a feature was requested that involved paginating a mysql
database table that had a self reference, creating a tree structure. The
requirements were to show trees in depth first order, paginate the results with
an infinite scroll so the parent child relationships could easily be displayed
and visualized across pages, and allow inserts at any level of the tree,
rendering the new nodes efficiently.

If you'd like to follow along or implement this for yourself, here was the quick
setup I used. I'm using php 8.4, composer and laravel installer.

```bash
composer require -g livewire/installer
laravel new infinite-paginate-tree --livewire
cd infinite-paginate-tree
php artisan make:model Node -m
php artisan make:livewire Nodes
php artisan make:livewire NodesPage
```

I modified the app layout to be something simple, that doesn't require a logged
in user. And I modified the routes to provide a single route to the nodes
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
[Github](https://github.com/ben-everly/infinite-paginate-tree)

## Why MySQL Trees Are Tricky

Representing a tree in a relational database is easy enough. In our example, the
nodes are represented by rows in a `nodes` table. The edges are represented by a
(not so) foreign key, `parent_id`, that references another row in the same
table. You could also represent edges using another table with columns for
`parent_node_id` and `child_node_id`, but for our purposes, the former solution
is less complex and more efficient.

A bigger challenge is ordering the nodes correctly so we can paginate the
results. Some databases have support for this process, like Postgres, which
offers the `ltree` type, or MongoDb, which natively supports trees. If you are
starting from scratch, you might want to start there. Unfortunately, in my case,
the data already existed in MySQL, which as of version 8 does not have support
for trees. But instead of migrating to a new database, we decided to work around
the limitations.

Perhaps your first thought, as was mine, might be to sort the nodes, and set an
integer column to index the data. However, since we allow nodes to be inserted
at any point in the tree, we would have to re-index after every insert. This
will become a major bottleneck, causing slow writes and potentially locking
issues. A better approach is to index with a string, which will contain a "path"
to the node, So each node will be indexed realative to its siblings, and then we
will prefix the path with the indexes of each of its parents. Since we aren't
reordering, that means a nodes path can be set when it is created and will not
need to be updated again.

But there is still an issue. Since the path is a string, integers of different
lengths will not sort correctly. For example, `/1/2/` will sort before `/1/10/`,
even though it should. To work around this, we can pad each part of the path
with zeros so they are the same length, then a string comparison will yield the
same result as an integer comparison. Of course, if you have enough nodes in a
group to overflow the padding, sorting would break down. For this example, I
will assume that the number of nodes in a group will be less than 100,000, and
pad so each part so it is 5 digits.

## Handling Inserts and Ininite Pagination in Livewire

Another challenge is handling inserts in the tree structure while maintaining
the infinite scroll pagination. We want to show new nodes, in the correct order
as the user creates them, without having to refresh the entire page. To solve
this problem, we will ditch fixed size pages. Specifically, we used cursor
pagination with start and end cursors for each page.

When a new node is created, we need to determine where it fits in the existing
pages. If it is within the range of a page, simply refresh that page. If it is
between pages, then we can update a cursor so that the new node is included in
one of the existing pages.

## Implementing the Solution

The first step is to create the database table. Given the previous explanation,
this should be straightforward if you are familiar with laravel. We create a
`nodes` table with the `parent_id` foreign key and an indexed `path` column.

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

To initially set the `path` we will use the eloquent `creating` event. For that
we will find the last node in the same group and increment the last part of the
path. Other than that, the model will also make `parent_id` fillable and
implement eloquent relationships.

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

The `NodesPageData` classes primary responsiblity is to persist the cursors
through requests. It will also allow us to pass a collection of nodes when
initially mounting the component so we don't have to query the databaswe twice
when initially mounting the component so we don't have to query the databaswe
twice. On subsequent requests, page components will query all the nodes between
its cursors in case nodes are added into the middle of a page. And finally, a
`key` property based on the cursors will help uniquely identify each page.

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

The `NodesPage` component will be responsible for displaying the nodes in a
single page. It will access `NodesPageData` to check if nodes have been passed,
and if not it will use the cursors to query the database. The left margin of
each node will be determined based on the 'depth' of the node in the tree, which
is computed by counting the delimiters in the path. Lastly, it will display a
button to create a child node, which when clicked, will be delegate creation to
the parent component by dispatching an event.

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

The final piece is the `Nodes` component, which will track the pages using an
array of `NodesPageData`. When a page is added, it will keep the next cursor as
well as a flag to indicate if there are more pages to reduce database calls.

The create node method will create nodes, obviously, and then determine how it
fits into the existing pages, updating cursors if needed. It will also handle
displaying the first page.

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

Of course there are improvements that could be made. For example, we could make
sure the padding on `path` couldn't get exceeded so that sorting doesn't break
down. We could also create split pages into two if too many nodes are added
without a page refresh. Of course this is just a demonstration, so we'll leave
it there.

Hopefully you found this helpful. I certainly learned a lot about tree
structures in relational databases and handling inserts in paginated data in
livewire.
