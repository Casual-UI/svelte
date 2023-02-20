---
title: Button
---

## Basic Usage

```svelte live
<script>
  import { CButton } from '@casual-ui/svelte'
</script>

<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  <div>
    <CButton label="A Basic Button" />
  </div>
  <div>
    <CButton label="A Outlined Button" outlined />
  </div>
  <div>
    <CButton label="A Rounded Button" rounded />
  </div>
  <div>
    <CButton label="A Round Button" round />
  </div>
  <div>
    <CButton label="A Flat Button" round flat />
  </div>
</div>
```

## Themes

```svelte live
<script lang="ts">
  import { CButton } from '@casual-ui/svelte'
</script>

<div class="grid grid-cols-3 md:grid-cols-2 gap-4">
  <div>
    <CButton label="A Primary (default) Button" />
  </div>
  <div>
    <CButton label="A Secondary Button" theme="secondary" />
  </div>
  <div>
    <CButton label="A Warning Button" theme="warning" />
  </div>
  <div>
    <CButton label="A Negative Button" theme="negative" />
  </div>
  <div>
    <CButton label="A Primary (default) Button" outlined />
  </div>
  <div>
    <CButton label="A Secondary Button" theme="secondary" outlined />
  </div>
  <div>
    <CButton label="A Warning Button" theme="warning" outlined />
  </div>
  <div>
    <CButton label="A Negative Button" theme="negative" outlined />
  </div>
  <div>
    <CButton label="A Primary (default) Button" flat />
  </div>
  <div>
    <CButton label="A Secondary Button" theme="secondary" flat />
  </div>
  <div>
    <CButton label="A Warning Button" theme="warning" flat />
  </div>
  <div>
    <CButton label="A Negative Button" theme="negative" flat />
  </div>
</div>
```

## Sizes

```svelte live
<script lang="ts">
  import { CButton } from '@casual-ui/svelte'
</script>

<CButton size="xs" label="XS Button" rounded />
<CButton size="sm" label="SM Button" rounded />
<CButton label="Normal Button (default)" rounded />
<CButton label="LG Button" size="lg" rounded />
<CButton label="XL Button" size="xl" rounded />
```

## Block button

```svelte live
<script lang="ts">
  import { CButton } from '@casual-ui/svelte'
</script>

<CButton block label="Block Button" />
<div class="c-mt-md">
  <CButton block label="Block Button" theme="warning" round />
</div>
<div class="c-mt-md">
  <CButton block label="Block Button" theme="negative" rounded />
</div>
```

## Status

```svelte live
<script>
  import { CButton } from '@casual-ui/svelte'
</script>

<CButton label="A Disabled Button" disabled />
<CButton label="A Loading Button" loading />
```

## Custom loading instance

```svelte live
<script lang="ts">
  import { CButton, CLoadingBar, CLoadingHourglass } from '@casual-ui/svelte'
</script>

<CButton loading label="Loading...">
  <CLoadingHourglass slot="loading" />
</CButton>
<CButton loading label="Loading..." theme="secondary">
  <CLoadingBar slot="loading" />
</CButton>
```

## Icon button

```svelte live
<script lang="ts">
  import { CButton } from '@casual-ui/svelte'
</script>

<div>
  <CButton icon style="font-size: 2rem;">
    <div class="i-openmoji-apple" />
  </CButton>
  <CButton icon style="font-size: 4rem;" outlined theme="warning">
    <div class="i-openmoji-banana" />
  </CButton>
  <CButton icon style="font-size: 6rem;" theme="negative">
    <div class="i-openmoji-peach" />
  </CButton>
</div>
```
