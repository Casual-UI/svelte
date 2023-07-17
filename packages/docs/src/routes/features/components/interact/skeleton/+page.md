---
title: Skeleton
componentName: skeleton/CSkeleton
---

## Basic usage

```svelte live
<script>
  import { CSkeleton } from '@casual-ui/svelte'
</script>

<div class="flex flex-col gap-4">
  <div class="flex items-center gap-4">
    <div class="flex-shrink-0">
      <CSkeleton />
    </div>
    <div class="flex flex-col gap-2 flex-grow">
      <CSkeleton height="12px" shape="square" />
      <CSkeleton height="12px" shape="square" />
    </div>
  </div>
  <CSkeleton shape="square" borderRadius="0" height="200px" />
  <div class="flex justify-end gap-4">
    <CSkeleton shape="square" width="100px" height="42px" />
    <CSkeleton shape="square" width="100px" height="42px" />
  </div>
</div>
```