---
title: Drawer
componentName: CDrawer
---

## Basic usage

```svelte live
<script lang="ts">
  let show = false
</script>

<CButton label="Click to show drawer" on:click={() => (show = true)} />

<CDrawer bind:show title="Hi, there!">Some drawer content</CDrawer>
```

## Positions

```svelte live
<script lang="ts">
  let show = false
  let position = 'left'

  function openWithPosition(pos) {
    position = pos
    show = true
  }
</script>

<CDrawer bind:show {position} title="Hi, there!">Some drawer content</CDrawer>

<div class="grid grid-cols-4 gap-4">
  <CButton
    icon
    style="font-size: 28px;"
    on:click={() => openWithPosition('top')}
  >
    <div class="i-ph-arrow-circle-up" />
  </CButton>
  <CButton
    icon
    style="font-size: 28px;"
    on:click={() => openWithPosition('left')}
  >
    <div class="i-ph-arrow-circle-left" />
  </CButton>
  <CButton
    icon
    style="font-size: 28px;"
    on:click={() => openWithPosition('right')}
  >
    <div class="i-ph-arrow-circle-right" />
  </CButton>
  <CButton
    icon
    style="font-size: 28px;"
    on:click={() => openWithPosition('bottom')}
  >
    <div class="i-ph-arrow-circle-down" />
  </CButton>
</div>
```