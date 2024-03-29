---
title: Expansion
componentName: CExpansion
---

## Basic usage

```svelte live
<CExpansion title="Expansion title">
  <h3>Some body content</h3>
</CExpansion>
```

## Custom arrow

```svelte live
<CExpansion title="Expansion title">
  <p>Look at the arrow, is a smile!</p>
  <div slot="arrow" class="i-ant-design-smile-outlined text-6" />
</CExpansion>
```

## Manual control

```svelte live
<script lang="ts">
  let expanded = false
</script>

<CButton
  rounded
  mb-4
  label="Click Me"
  on:click={() => (expanded = !expanded)}
/>
<CExpansion title="Click button above toggle expand status" bind:expanded>
  <p>Some content</p>
</CExpansion>
```

## Reverse direction

```svelte live
<CExpansion reverse title="Expansion title">
  <p>Hello, I'm expanded from top!</p>
</CExpansion>
```