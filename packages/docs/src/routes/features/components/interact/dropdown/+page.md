---
title: Dropdown
componentName: CDropdown
---

## Basic usage

```svelte live
<CDropdown>
  <CButton label="Here's some trigger content" />
  <div slot="drop-content" class="p-4">Here's some drop content</div>
</CDropdown>
```

## Content width

```svelte live
<CDropdown widthWithinParent={false}>
  <CButton label="Here's some trigger content" />
  <div slot="drop-content" class="custom-width p-4">
    Here's some custom width drop content
  </div>
</CDropdown>

<style>
  .custom-width {
    width: 320px;
  }
</style>
```

## Manual control

```svelte live
<script lang="ts">
  let show = false
</script>

<CButton label="Click to show dropdown" on:click={() => (show = !show)} />

<CDropdown manual bind:show>
  <div>Click the left button to show dropdown</div>
  <div slot="drop-content" class="p-4">Here's some drop content</div>
</CDropdown>
```