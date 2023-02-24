---
title: Input
componentName: form/CInput
---

## Basic usage

```svelte live
<script lang="ts">
  import { CInput } from '@casual-ui/svelte'

  const value = ''
</script>

<CInput {value} placeholder="Input something" />
```

## Shapes

```svelte live
<script lang="ts">
  import { CInput } from '@casual-ui/svelte'

  const value = ''
</script>

<CInput {value} placeholder="Normal input" />
<CInput {value} rounded placeholder="Rounded input" />
```

## Sizes

```svelte live
<script lang="ts">
  import { CInput } from '@casual-ui/svelte'

  const value = ''
</script>

<div class="c-flex c-gutter-md c-wrap c-items-center">
  <div>
    <CInput {value} placeholder="xs" size="xs" />
  </div>
  <div>
    <CInput {value} placeholder="sm" size="sm" />
  </div>
  <div>
    <CInput {value} placeholder="md (default)" />
  </div>
  <div>
    <CInput {value} placeholder="lg" size="lg" />
  </div>
  <div>
    <CInput {value} placeholder="xl" size="xl" />
  </div>
  <div>
    <CInput {value} placeholder="xs" rounded size="xs" />
  </div>
  <div>
    <CInput {value} placeholder="sm" size="sm" rounded />
  </div>
  <div>
    <CInput {value} placeholder="md (default)" rounded />
  </div>
  <div>
    <CInput {value} placeholder="lg" size="lg" rounded />
  </div>
  <div>
    <CInput {value} placeholder="xl" size="xl" rounded />
  </div>
</div>
```

## Clearable

```svelte live
<script lang="ts">
  import { CInput } from '@casual-ui/svelte'

  const value = ''
</script>

<CInput
  {value}
  placeholder="Enter something and see the clear icon"
  clearable
/>
```

## Status

```svelte live
<script lang="ts">
  import { CInput } from '@casual-ui/svelte'

  const value = ''
</script>

<CInput {value} disabled placeholder="Disabled" />

<CInput rounded {value} loading placeholder="Loading..." />

<CInput rounded {value} placeholder="Readonly" readonly />
```

## Custom loading instance
```svelte live
<script lang="ts">
  import { CInput, CLoadingCircleBars, CLoadingWifi } from '@casual-ui/svelte'

  const value = ''
</script>

<CInput {value} placeholder="Custom loading" loading>
  <div slot="loading" class="c-text-primary">
    <CLoadingWifi />
  </div>
</CInput>

<CInput {value} placeholder="Custom loading" loading>
  <div slot="loading" class="c-text-warning">
    <CLoadingCircleBars slot="loading" />
  </div>
</CInput>
```

## Prefix & Suffix

```svelte live

<script lang="ts">
  import { CInput } from '@casual-ui/svelte'

  const value = ''
</script>

<div class="c-wrap c-flex c-gutter-md c-items-center">
  <div>
    <CInput rounded {value} placeholder="With prefix">
      <svelte:fragment slot="prefix">+234</svelte:fragment>
    </CInput>
  </div>

  <div>
    <CInput rounded {value} placeholder="With suffix">
      <svelte:fragment slot="suffix">@gmail.com</svelte:fragment>
    </CInput>
  </div>

  <div>
    <CInput rounded {value} placeholder="With prefix and suffix">
      <svelte:fragment slot="prefix">to:</svelte:fragment>
      <svelte:fragment slot="suffix">@gmail.com</svelte:fragment>
    </CInput>
  </div>

  <div>
    <CInput
      rounded
      {value}
      placeholder="No divider"
      prefixDivider={false}
      suffixDivider={false}
    >
      <svelte:fragment slot="prefix">to:</svelte:fragment>
      <svelte:fragment slot="suffix">@gmail.com</svelte:fragment>
    </CInput>
  </div>
  <div>
    <CInput {value} placeholder="Use icons">
      <div slot="prefix" class="text-6 i-ph-address-book-thin" />
      <div slot="suffix" class="text-6 i-material-symbols-face-retouching-natural" />
    </CInput>
  </div>
</div>
```