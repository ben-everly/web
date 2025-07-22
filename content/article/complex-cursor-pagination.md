---
published_at:
image: /images/complex-cursor-pagination.png
title: Complex Cursor Pagination
---

## Introduce the problem

### Why cursor pagination?

Cursor pagination is a method of paginating through a dataset by using a unique identifier (cursor) to mark the position
in the dataset. It is particularly useful for large datasets where traditional offset-based pagination can lead to
performance issues and inconsistencies when data changes between requests. In my case, it is also useful to keep the
context for data points since they will be nested in a tree structure.

### Introduce other features that make it complex (user defined ordering, self referencing models)

The tree structure, when paired with user-defined ordering, adds complexity to the cursor pagination implementation. In
this exploration, I want to show how I solved this problem in a Livewire application, using variable-length pages.
Along the way, I will also show a simple cursor pagination implementation that works better than examples I found on
the internet.

## Setup test project

### Blank livewire project

```bash
composer create-project livewire/livewire complex-cursor-pagination
cd complex-cursor-pagination
composer require livewire/livewire
```

### 'node' model

```bash
php artisan make:model Node -mf
php artisan migrate

php artisan make:livewire Nodes
php artisan livewire:layout
```

```php [routes/web.php]
<?php

use App\Livewire\Nodes;
use Illuminate\Support\Facades\Route;

Route::get('/', Nodes::class);
```

### implement display page

```php [app/Livewire/Nodes.php]
<?php

namespace App\Livewire;

use App\Models\Node;
use Illuminate\Database\Eloquent\Collection;
use Livewire\Attributes\Computed;
use Livewire\Component;

final class Nodes extends Component
{
    public function addNode(): void
    {
        Node::create();
    }

    #[Computed]
    public function nodes(): Collection
    {
        return Node::all();
    }
}
```

```php [resources/views/livewire/nodes.blade.php]
<div>
    <button wire:click="addNode">Add Node</button>
    <ol>
        @foreach ($this->nodes as $node)
            <li>Node {{ $node->id }}</li>
        @endforeach
    </ol>
</div>
```

```bash
php artisan serve
```

### factory some data

```bash
php artisan tinker
> App\Models\Node::factory()->count(5000)->create();
```

```php [app/Livewire/Nodes.php]
#[Computed]
public function nodes(): Collection
{
    return Node::all()->each(function (Node $node) {
        // sleep for 1 milliseconds to simulate processing delay
        usleep(1000);
    });
}
```

## Cursor pagination - internet implementation

### "cursor pagination" options from internet

### why its not the best solution

## Offset pagination - simple implementation

### componentize pages with id cursor

```bash
php artisan make:livewire NodesPage
```

```php [app/Livewire/NodesPage.php]
<?php

namespace App\Livewire;

use App\Models\Node;
use Illuminate\Database\Eloquent\Collection;
use Livewire\Attributes\Computed;
use Livewire\Attributes\On;
use Livewire\Component;

#[On('refresh-nodes-page-{offset}')]
final class NodesPage extends Component
{
    public int $perPage;

    public int $offset;

    public function mount(int $offset): void
    {
        $this->offset = $offset;
    }

    #[Computed]
    public function nodes(): Collection
    {
        return Node::query()
            ->offset($this->offset)
            ->limit($this->perPage)
            ->get();
    }
}
```

```php [resources/views/livewire/nodes-page.blade.php]
<div>
    @foreach ($this->nodes as $node)
        <li>
            Node {{ $node->id }}
        </li>
    @endforeach
</div>
```

### update display page

```php [app/Livewire/Nodes.php]
<?php

namespace App\Livewire;

use App\Models\Node;
use Livewire\Attributes\Computed;
use Livewire\Component;

final class Nodes extends Component
{
    public const PER_PAGE = 10;

    public int $offset = 0;

    public function addNode(): void
    {
        Node::create();
        if (! $this->hasMorePages()) {
            $this->dispatch('refresh-nodes-page-'.$this->offset);
        }
    }

    public function addPage(): void
    {
        $this->offset += self::PER_PAGE;
    }

    #[Computed]
    public function hasMorePages(): bool
    {
        return Node::count() > $this->offset + self::PER_PAGE;
    }
}
```

```php [resources/views/livewire/nodes.blade.php]
<div>
    <button wire:click="addNode">Add Node</button>
    <ol>
        @for ($i = 0; $i <= $this->offset; $i += self::PER_PAGE)
            <livewire:nodes-page wire:key="nodes-page-{{ $i }}" :offset="$i" :perPage="self::PER_PAGE" />
        @endfor
    </ol>
    @if ($this->hasMorePages())
        <button wire:click="addPage">Load More</button>
    @endif
</div>
```

## implement user defined ordering

### add user order column to model

```bash
php artisan make:migration add_sort_index_to_nodes_table --table=nodes
```

```php
<?php

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
        Schema::table('nodes', function (Blueprint $table) {
            $table->integer('sort_index')->default(0)->after('id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('nodes', function (Blueprint $table) {
            $table->dropColumn('sort_index');
        });
    }
};
```

```php [app/Models/Node.php]
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Node extends Model
{
    /** @use HasFactory<\Database\Factories\NodeFactory> */
    use HasFactory;

    private static int $maxNodeSortIndex;

    protected static function booted(): void
    {
        static::creating(function (self $node) {
            self::$maxNodeSortIndex = self::getMaxSortIndex() + 1;
            $node->sort_index = self::$maxNodeSortIndex;
        });
    }

    public static function getMaxSortIndex(): int
    {
        if (! isset(self::$maxNodeSortIndex)) {
            self::$maxNodeSortIndex = self::max('sort_index') ?? 0;
        }

        return self::$maxNodeSortIndex;
    }
}
```

### add move up/down actions

```php [app/Livewire/NodesPage.php]
public function swapOrder($sortIndex1, $sortIndex2): void
{
    [$node1, $node2] = Node::whereIn('sort_index', [$sortIndex1, $sortIndex2])->get();

    $temp = $node1->sort_index;
    $node1->sort_index = $node2->sort_index;
    $node1->save();
    $node2->sort_index = $temp;
    $node2->save();
}
```

```php
->orderBy('sort_index')
```

```php [resources/views/livewire/nodes-page.blade.php]
@php use App\Models\Node; @endphp
<div>
    @foreach ($this->nodes as $index => $node)
        <li>
            Node {{ $node->id }}
            @if ($node->sort_index > 1)
                <button wire:click="swapOrder({{ $node->sort_index }}, {{ $node->sort_index - 1 }})">Move Up</button>
            @endif
            @if ($node->sort_index < Node::getMaxSortIndex())
                <button wire:click="swapOrder({{ $node->sort_index }}, {{ $node->sort_index + 1 }})">Move Down</button>
            @endif
        </li>
    @endforeach
</div>
```

### extra refreshing logic for creating nodes

```php [app/Livewire/Nodes.php]
<?php

namespace App\Livewire;

use App\Models\Node;
use Livewire\Component;

final class Nodes extends Component
{
    public const PER_PAGE = 10;

    public int $offset = 0;

    public function addNode(): void
    {
        Node::create();
        if (Node::getMaxSortIndex() <= $this->nextOffset() + 1) {
            $this->dispatch('refresh-nodes-page-'.$this->offset);
        }
    }

    public function addPage(): void
    {
        $this->offset += self::PER_PAGE;
    }

    public function hasMorePages(): bool
    {
        return Node::getMaxSortIndex() > $this->nextOffset();
    }

    private function nextOffset(): int
    {
        return $this->offset + self::PER_PAGE;
    }
}
```

### extra refreshing logic for moving nodes between pages

```php [app/Livewire/NodesPage.php]
<?php

namespace App\Livewire;

use App\Models\Node;
use Illuminate\Database\Eloquent\Collection;
use Livewire\Attributes\Computed;
use Livewire\Attributes\On;
use Livewire\Component;

#[On('refresh-nodes-page-{offset}')]
final class NodesPage extends Component
{
    public int $perPage;

    public int $offset;

    public function mount(int $offset): void
    {
        $this->offset = $offset;
    }

    public function swapOrder($sortIndex1, $sortIndex2): void
    {
        [$node1, $node2] = Node::whereIn('sort_index', [$sortIndex1, $sortIndex2])->get();

        $temp = $node1->sort_index;
        $node1->sort_index = $node2->sort_index;
        $node1->save();
        $node2->sort_index = $temp;
        $node2->save();

        collect([$node1, $node2])
            ->map(fn ($node) => intdiv($node->sort_index - 1, $this->perPage) * $this->perPage)
            ->unique()
            ->filter(fn ($pageOffset) => $pageOffset !== $this->offset)
            ->each(fn ($pageOffset) => $this->dispatch('refresh-nodes-page-'.$pageOffset));
    }

    #[Computed]
    public function nodes(): Collection
    {
        return Node::query()
            ->offset($this->offset)
            ->limit($this->perPage)
            ->orderBy('sort_index')
            ->get();
    }
}
```

## implement self referencing models

### add parent_node_id and relationship to node model

```php
<?php

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
        Schema::table('nodes', function (Blueprint $table) {
            $table->integer('depth')->default(0);
            $table->foreignIdFor(App\Models\Node::class, 'parent_node_id')
                ->nullable()
                ->constrained();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('nodes', function (Blueprint $table) {
            $table->dropColumn('depth');
            $table->dropForeign(['parent_node_id']);
            $table->dropColumn('parent_node_id');
        });
    }
};

```

```php [app/Models/Node.php]
public $fillable = [
    'parent_node_id',
];
```

```php [app/Livewire/NodesPage.php]
public function addChildNode(int $parentNodeId): void
{
    Node::create([
        'parent_node_id' => $parentNodeId,
    ]);
}
```

```php [resources/views/livewire/nodes-page.blade.php]
<button wire:click="addChildNode({{ $node->id }})">Add Child</button>
```

ok, we can create child nodes now, but we have some problems:

- we want the child nodes to be sorted under their parent nodes, and we want them to be indented.
- we want to disable the move up/down buttons for the first and last nodes in their parent.
- we need to update logic for refreshing pages when nodes are created or moved.

- when we create a node, we need to figure out what page its on and refresh that page. but then that pushes everything down, so we have to refresh everything below it.
- when we move nodes, their children move with it, so we have to figure out how to refresh the pages correctly.

```php [app/Jobs/SortNodes.php]
<?php

namespace App\Jobs;

use App\Models\Node;
use Illuminate\Foundation\Bus\Dispatchable;

class SortNodes
{
    use Dispatchable;

    public function handle(): void
    {
        $nodes = Node::query()->orderBy('sort_index')->get();

        $stack = $nodes->where('parent_node_id', null);

        $sortIndex = 1;
        while ($stack->isNotEmpty()) {
            $node = $stack->shift();
            $node->sort_index = $sortIndex++;
            $node->save();

            $children = $nodes->where('parent_node_id', $node->id)
                ->map(fn ($child) => $child->setAttribute('depth', $node->depth + 1));
            $stack->unshift(...$children);
        }
    }
}
```

```php [app/Models/Node.php]
protected static function booted(): void
{
    static::creating(function (self $node) {
        self::$maxNodeSortIndex = self::getMaxSortIndex() + 1;
        $node->sort_index = self::$maxNodeSortIndex;
    });

    static::created(fn () => SortNodes::dispatch());
}
```

```php [resources/views/livewire/nodes-page.blade.php]
<li style="margin-left: {{ $node->depth * 20 }}px;">
```

### move restrictions

```php [app/Livewire/NodesPage.php]
<?php

namespace App\Livewire;

use App\Jobs\SortNodes;
use App\Models\Node;
use Illuminate\Database\Eloquent\Collection;
use Livewire\Attributes\Computed;
use Livewire\Attributes\On;
use Livewire\Component;

#[On('refresh-nodes-page-{offset}')]
final class NodesPage extends Component
{
    public int $perPage;

    public int $offset;

    public function mount(int $offset): void
    {
        $this->offset = $offset;
    }

    public function move(int $sortIndex, string $direction): void
    {
        $node1 = Node::where('sort_index', $sortIndex)->firstOrFail();
        $node2 = Node::where(
            'sort_index',
            $direction === 'up' ? '<' : '>',
            $sortIndex
        )
            ->where('parent_node_id', $node1->parent_node_id)
            ->orderBy('sort_index', $direction === 'up' ? 'desc' : 'asc')
            ->first();

        $temp = $node1->sort_index;
        $node1->sort_index = $node2->sort_index;
        $node1->save();
        $node2->sort_index = $temp;
        $node2->save();

        SortNodes::dispatch();

        collect([$node1, $node2])
            ->map(fn ($node) => intdiv($node->sort_index - 1, $this->perPage) * $this->perPage)
            ->unique()
            ->filter(fn ($pageOffset) => $pageOffset !== $this->offset)
            ->each(fn ($pageOffset) => $this->dispatch('refresh-nodes-page-'.$pageOffset));
    }

    #[Computed]
    public function nodes(): Collection
    {
        return Node::query()
            ->offset($this->offset)
            ->limit($this->perPage)
            ->orderBy('sort_index')
            ->get();
    }

    #[Computed]
    public function moveRestrictedNodes(): Collection
    {
        return Node::query()
            ->selectRaw('MIN(sort_index) as min_sort_index, MAX(sort_index) as max_sort_index')
            ->groupBy('parent_node_id')
            ->get();
    }

    public function addChildNode(int $parentNodeId): void
    {
        Node::create([
            'parent_node_id' => $parentNodeId,
        ]);
    }
}
```

```php [resources/views/livewire/nodes-page.blade.php]
@php
    use App\Models\Node;
    $cantMoveUp = $this->moveRestrictedNodes->pluck('min_sort_index');
    $cantMoveDown = $this->moveRestrictedNodes->pluck('max_sort_index');
@endphp
<div>
    @foreach ($this->nodes as $index => $node)
        <li style="margin-left: {{ $node->depth * 20 }}px;">
            Node {{ $node->id }}
            @if ($cantMoveUp->doesntContain($node->sort_index))
                <button wire:click="move({{ $node->sort_index }}, 'up')">Move Up</button>
            @endif
            @if ($cantMoveDown->doesntContain($node->sort_index))
                <button wire:click="move({{ $node->sort_index }}, 'down')">Move Down</button>
            @endif
            <button wire:click="addChildNode({{ $node->id }})">Add Child</button>
        </li>
    @endforeach
</div>
```

### implement variable length pages

## Conclusion
