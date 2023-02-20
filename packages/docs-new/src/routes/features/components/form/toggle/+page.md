---
title: Toggle
---

## Disabled

```svelte live
<script lang="ts">
  import { CToggle } from '@casual-ui/svelte'

  let on = false
  let on2 = true
</script>

<CToggle bind:value={on} label="Disabled uncheck" disabled />
<CToggle bind:value={on2} label="Disabled checked" disabled />
```

## Sizes

```svelte live
<script lang="ts">
  import { CToggle } from '@casual-ui/svelte'

  let on = 'md'
</script>

<div class="c-flex c-items-center c-gutter-md c-wrap">
  <div>
    <CToggle bind:value={on} label="xs" checkedValue="xs" />
  </div>
  <div>
    <CToggle bind:value={on} label="sm" checkedValue="sm" />
  </div>
  <div>
    <CToggle bind:value={on} label="md (default)" checkedValue="md" />
  </div>
  <div>
    <CToggle bind:value={on} label="lg" checkedValue="lg" />
  </div>
  <div>
    <CToggle bind:value={on} label="xl" checkedValue="xl" />
  </div>
</div>
```