---
title: Input
componentName: form/CInput
---

## Basic usage

```svelte live
<script>
  let value = ''
</script>

<CInput bind:value placeholder="Input something" />
<h3>
  Value is: {value}
</h3>
```

## Shapes

```svelte live
<script>
  let value = ''
</script>

<CInput bind:value placeholder="Normal input" />
<CInput bind:value rounded placeholder="Rounded input" />
```

## Sizes

```svelte live
<script lang="ts">
  let value = ''
</script>

<div class="c-flex c-gutter-md c-wrap c-items-center">
  <div>
    <CInput bind:value placeholder="xs" size="xs" />
  </div>
  <div>
    <CInput bind:value placeholder="sm" size="sm" />
  </div>
  <div>
    <CInput bind:value placeholder="md (default)" />
  </div>
  <div>
    <CInput bind:value placeholder="lg" size="lg" />
  </div>
  <div>
    <CInput bind:value placeholder="xl" size="xl" />
  </div>
  <div>
    <CInput bind:value placeholder="xs" rounded size="xs" />
  </div>
  <div>
    <CInput bind:value placeholder="sm" size="sm" rounded />
  </div>
  <div>
    <CInput bind:value placeholder="md (default)" rounded />
  </div>
  <div>
    <CInput bind:value placeholder="lg" size="lg" rounded />
  </div>
  <div>
    <CInput bind:value placeholder="xl" size="xl" rounded />
  </div>
</div>
```

## Clearable

```svelte live
<script lang="ts">
  let value = ''
</script>

<CInput
  bind:value
  placeholder="Enter something and see the clear icon"
  clearable
/>
```

## Status

```svelte live
<script lang="ts">
  let value = ''
</script>

<CInput bind:value disabled placeholder="Disabled" />

<CInput rounded bind:value loading placeholder="Loading..." />

<CInput rounded bind:value placeholder="Readonly" readonly />
```

## Custom loading instance
```svelte live
<script lang="ts">
  let value = ''
</script>

<CInput bind:value placeholder="Custom loading" loading>
  <div slot="loading" class="c-text-primary">
    <CLoadingWifi />
  </div>
</CInput>

<CInput bind:value placeholder="Custom loading" loading>
  <div slot="loading" class="c-text-warning">
    <CLoadingCircleBars slot="loading" />
  </div>
</CInput>
```

## Prefix & Suffix

```svelte live
<script lang="ts">
  let value = ''
</script>

<div class="c-wrap c-flex c-gutter-md c-items-center">
  <div>
    <CInput rounded bind:value placeholder="With prefix">
      <svelte:fragment slot="prefix">+234</svelte:fragment>
    </CInput>
  </div>

  <div>
    <CInput rounded bind:value placeholder="With suffix">
      <svelte:fragment slot="suffix">@gmail.com</svelte:fragment>
    </CInput>
  </div>

  <div>
    <CInput rounded bind:value placeholder="With prefix and suffix">
      <svelte:fragment slot="prefix">to:</svelte:fragment>
      <svelte:fragment slot="suffix">@gmail.com</svelte:fragment>
    </CInput>
  </div>

  <div>
    <CInput
      rounded
      bind:value
      placeholder="No divider"
      prefixDivider={false}
      suffixDivider={false}
    >
      <svelte:fragment slot="prefix">to:</svelte:fragment>
      <svelte:fragment slot="suffix">@gmail.com</svelte:fragment>
    </CInput>
  </div>
  <div>
    <CInput bind:value placeholder="Use icons">
      <div slot="prefix" class="text-6 i-ph-address-book-thin" />
      <div slot="suffix" class="text-6 i-material-symbols-face-retouching-natural" />
    </CInput>
  </div>
</div>
```