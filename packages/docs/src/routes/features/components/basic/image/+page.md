---
title: Image
componentName: CImage
---

## Basic

```svelte live
<script>
  let src = 'https://picsum.photos/500/300'

  const toggle = () => {
    src = `https://picsum.photos/500/300?t=${Math.random()}`
  }
</script>
<CButton label="Toggle image" on:click={toggle} />
<CImage width="500px" height="300px" {src} />
```

## Custom placeholder

```svelte live
<script>
  let show = true
</script>
<CButton label="Toggle image" on:click={() => show = !show} />
{#if show}
  <CImage width="500px" height="300px" src="https://picsum.photos/500/300" placeholderSrc="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMzIgMzIiPjxwYXRoIGZpbGw9IiMyZGNjOWYiIGQ9Ik0zMCA1Ljg1MXYyMC4yOThIMlY1Ljg1MWgyOCIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yNC4yMzIgOC41NDFhMi4yIDIuMiAwIDEgMCAxLjEyNy42MjNhMi4yMTIgMi4yMTIgMCAwIDAtMS4xMjctLjYyM00xOC4xMTEgMjAuMXEtMi43MjQtMy43ODgtNS40NS03LjU3NUw0LjU3OSAyMy43NjZoMTAuOXExLjMxNi0xLjgzMiAyLjYzNC0zLjY2M00yMi4wNTcgMTZxLTIuNzkzIDMuODgyLTUuNTg0IDcuNzY1aDExLjE2OVEyNC44NTEgMTkuODgyIDIyLjA1NyAxNloiLz48L3N2Zz4=" />
{/if}
```

## Custom loading

```svelte live
<script>
  let src = 'https://picsum.photos/500/300'

  const toggle = () => {
    src = `https://picsum.photos/500/300?t=${Math.random()}`
  }
</script>
<CButton label="Toggle image" on:click={toggle} />
<div class="flex gap-4 mt-4">
  <CImage width="100px" height="100px" {src}>
    <div class="text-white">
      <CLoadingLattice slot="loading" />
    </div>
  </CImage>
  <CImage width="100px" height="100px" {src}>
    <CLoadingPuff slot="loading" />
  </CImage>
  <CImage width="100px" height="100px" {src}>
    <CLoadingPie slot="loading" />
  </CImage>
</div>
```

:::important[Img native attrs]
All the props pass to `CImage` that not in prop list would directly add to `<img />` tag. You can add `decoding`, `draggable`, etc..
:::