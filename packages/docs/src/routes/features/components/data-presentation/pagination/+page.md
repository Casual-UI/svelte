---
title: Pagination
componentName: CPagination
---

## Basic usage

```svelte live
<script>
  let current
</script>

<CPagination pages={6} bind:current />
```

## Shapes

```svelte live
<script>
  let current
</script>
<div class="c-column c-gutter-md">
  <CPagination pages={6} bind:current shape="square" />
  <CPagination pages={6} bind:current shape="rounded" />
  <CPagination pages={6} bind:current shape="circle" />
</div>
```

## Sizes

```svelte live
<script>
  let current
</script>
<div class="c-column c-gutter-md">
  <CPagination pages={6} bind:current size="xs" />
  <CPagination pages={6} bind:current size="sm" shape="rounded" />
  <CPagination pages={6} bind:current shape="circle" />
  <CPagination pages={6} bind:current size="lg" shape="rounded" />
  <CPagination pages={6} bind:current size="xl" />
</div>
```

## Gutter sizes

```svelte live
<script>
  let current
</script>
<div class="c-column c-gutter-md">
  <CPagination pages={6} bind:current gutterSize="xs" />
  <CPagination pages={6} bind:current gutterSize="sm" />
  <CPagination pages={6} bind:current />
  <CPagination pages={6} bind:current gutterSize="lg" />
  <CPagination pages={6} bind:current gutterSize="xl" />
</div>
```

## Themes

```svelte live
<script>
  let current
</script>
<div class="c-column c-gutter-md">
  <CPagination pages={6} bind:current theme="primary" shape="circle" />
  <CPagination pages={6} bind:current theme="secondary" shape="circle" />
  <CPagination pages={6} bind:current theme="warning" shape="circle" />
  <CPagination pages={6} bind:current theme="negative" shape="circle" />
</div>
```

## No to first/last button

```svelte live
<script>
  let current
</script>

<CPagination pages={6} bind:current showBoundaryButton={false} />
```

## No prev/next button

```svelte live
<script>
  let current
</script>

<CPagination pages={6} bind:current showPrevNextButton={false} />
```

## Max display pages

```svelte live
<script>
  let current = 4
</script>

<CPagination pages={10} maxDisplayPages={3} bind:current />
```

## Customize buttons with slots

```svelte live
<script>
  let current = 4
</script>

<CPagination pages={10} maxDisplayPages={3} bind:current>
  <button slot="to-first" let:set let:disabled on:click={set} {disabled}>
    To first
  </button>
  <CButton
    slot="to-prev"
    let:set
    let:disabled
    on:click={set}
    {disabled}
    flat
    theme="negative"
    >
    <div class="i-ph-arrow-arc-left-fill"></div>
  </CButton>

  <CButton slot="left-ellipsis" let:set flat theme="warning" on:click={set}>
    <div class="i-ion-ellipsis-horizontal-circle"></div>
  </CButton>

  <button slot="page-button" let:p let:active on:click={() => (current = p)}>
    <span class:c-text-primary={active} class:c-font-xl={active}>
      {p}
    </span>
  </button>

  <CButton slot="right-ellipsis" let:set flat theme="warning" on:click={set}>
    <div class="i-octicon-ellipsis-16"></div>
  </CButton>

  <CButton
    slot="to-next"
    let:set
    let:disabled
    on:click={set}
    {disabled}
    flat
    theme="secondary"
    >
    <div class="i-ph-arrow-arc-right-fill"></div>
  </CButton>

   <button slot="to-last" let:set let:disabled on:click={set} {disabled}>
    To last
  </button>
</CPagination>
```