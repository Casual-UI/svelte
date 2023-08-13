---
title: Tooltip
componentName: CTooltip
---

## Basic usage

```svelte live
<p>Hover (default)</p>
<CTooltip content="Hi, there">
  <CButton slot="trigger" label="Hover Me" />
</CTooltip>
```

## Trigger 
```svelte live
<script lang="ts">
  let show = false
</script>

<p>Hover (default)</p>
<CTooltip content="Hi, there">
  <CButton slot="trigger" label="Hover Me" />
</CTooltip>

<p>Click</p>
<CTooltip content="Hi, there" trigger="click">
  <CButton label="Click Me" slot="trigger" />
</CTooltip>

<p>Manual</p>

<CButton label="Click Me" on:click={() => (show = !show)} />

<CTooltip bind:show content="Hi, there" trigger="manual">
  <p slot="trigger">Click the left button to toggle</p>
</CTooltip>
```

## Positions

```svelte live
<script lang="ts">
  let position = 'top'
  const positions: any = [
    'top-start',
    'top',
    'top-end',
    'left-start',
    'left',
    'left-end',
    'right-start',
    'right',
    'right-end',
    'bottom-start',
    'bottom',
    'bottom-end',
  ]
</script>

<div class="grid grid-cols-3 gap-4">
  <CRadioGroup bind:value={position} options="{positions.map(pos => ({ label: pos, value: pos }))}" />
  <CTooltip {position} content={`Hi, I'm some message from ${position}!`}>
    <CButton label="Hover me to see the effect" slot="trigger" />
  </CTooltip>
</div>
```