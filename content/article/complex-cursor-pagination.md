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

```php[routes/web.php]
<?php

use App\Livewire\Nodes;
use Illuminate\Support\Facades\Route;

Route::get('/', Nodes::class);
```

### implement display page

```php[app/Livewire/Nodes.php]
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

```php[resources/views/livewire/nodes.blade.php]
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

```php[app/Livewire/Nodes.php]
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

```php[app/Livewire/NodesPage.php]
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

```php[resources/views/livewire/nodes-page.blade.php]
<div>
    @foreach ($this->nodes as $node)
        <li>
            Node {{ $node->id }}
        </li>
    @endforeach
</div>
```

### update display page

```php[app/Livewire/Nodes.php]
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

    #[Computed()]
    public function hasMorePages(): bool
    {
        return Node::count() > $this->offset + self::PER_PAGE;
    }
}
```

```php[resources/views/livewire/nodes.blade.php]
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

### add move up/down actions

### show error with using id for cursor

### use user order column for cursor

## implement self referencing models

### add parent_id and relationship to node model

### add sorting so models appear under their parents

### update move up/down buttons to check if they are first/last in their parent

### show the problem when moving a node between pages

### implement variable length pages

## Conclusion
