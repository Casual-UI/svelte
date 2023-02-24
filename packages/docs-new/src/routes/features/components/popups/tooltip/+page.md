---
title: Tooltip
componentName: CTooltip
---

## Basic usage

```svelte live
<script lang="ts">
  import { CButton, CTooltip } from '@casual-ui/svelte'
</script>

<p>Hover (default)</p>
<CTooltip content="Hi, there">
  <CButton slot="trigger" label="Hover Me" />
</CTooltip>
```

## Trigger 
```svelte live
<script lang="ts">
  import { CButton, CTooltip } from '@casual-ui/svelte'

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
  import { CButton, CTooltip } from '@casual-ui/svelte'

  const positions: any = [
    'top-left',
    'top',
    'top-right',
    'left-top',
    'left',
    'left-bottom',
    'right-top',
    'right',
    'right-bottom',
    'bottom-left',
    'bottom',
    'bottom-right',
  ]
</script>

<div class="grid grid-cols-3 gap-4">
  {#each positions as pos}
    <div>
      <CTooltip position={pos} content={`Hi, I'm some message from ${pos}!`}>
        <CButton label={pos} slot="trigger" />
      </CTooltip>
    </div>
  {/each}
</div>
```