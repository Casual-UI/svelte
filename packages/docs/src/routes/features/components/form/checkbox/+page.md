---
title: Checkbox
componentName: form/CCheckbox
---

## Basic usage

```svelte live
<script lang="ts">
  import { CCheckbox } from '@casual-ui/svelte'

  let checked = false
</script>

<div class="c-flex c-gutter-x-md c-wrap">
  <div>
    <CCheckbox bind:value={checked} label="Agree to our agreement" />
  </div>
  <div>
    <CCheckbox bind:value={checked}>
      <p slot="label">
        Click to our <a
          href="https://github.com/Casual-UI/svelte"
          rel="noreferrer"
          target="_blank">github repository</a
        >
      </p>
    </CCheckbox>
  </div>
</div>
```

## Disabled

```svelte live
<script lang="ts">
  import { CCheckbox } from '@casual-ui/svelte'

  let checked = false

  let checked2 = true
</script>

<CCheckbox disabled bind:value={checked} label="Disabled (not check)" />
<CCheckbox disabled bind:value={checked2} label="Disabled (checked)" />
```

## Sizes

```svelte live
<script lang="ts">
  import { CCheckbox } from '@casual-ui/svelte'

  let checked = 'md'
</script>

<div class="c-flex c-gutter-x-md c-wrap c-items-center">
  <div>
    <CCheckbox bind:value={checked} label="xs" size="xs" checkedValue="xs" />
  </div>
  <div>
    <CCheckbox bind:value={checked} label="sm" size="sm" checkedValue="sm" />
  </div>
  <div>
    <CCheckbox
      bind:value={checked}
      label="md (default)"
      size="md"
      checkedValue="md"
    />
  </div>
  <div>
    <CCheckbox bind:value={checked} label="lg" size="lg" checkedValue="lg" />
  </div>
  <div>
    <CCheckbox bind:value={checked} label="xl" size="xl" checkedValue="xl" />
  </div>
</div>
```