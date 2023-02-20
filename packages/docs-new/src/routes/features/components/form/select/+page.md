---
title: Select
---

## Basic usage

```svelte live
<script>
  import { CSelect } from '@casual-ui/svelte'

  let selectedValue = ''

  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Banana', value: 'Banana' },
    { label: 'Orange', value: 'Orange' },
    { label: 'Peach', value: 'Peach' },
  ]
</script>

<CSelect bind:value={selectedValue} {options} placeholder="Normal select" />
<CSelect bind:value={selectedValue} {options} disabled placeholder="Disabled select" />
```

## Clearable

```svelte live
<script lang="ts">
  import { CSelect } from '@casual-ui/svelte'

  let selectedValue = ''

  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Banana', value: 'Banana' },
    { label: 'Orange', value: 'Orange' },
    { label: 'Peach', value: 'Peach' },
  ]
</script>

<p>
  <b> Selected value: </b>
  {selectedValue}
</p>

<CSelect
  clearable
  placeholder="Clearable"
  bind:value={selectedValue}
  {options}
/>
```

## Shape
```svelte live
<script lang="ts">
  import { CSelect } from '@casual-ui/svelte'

  let selectedValue = ''

  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Banana', value: 'Banana' },
    { label: 'Orange', value: 'Orange' },
    { label: 'Peach', value: 'Peach' },
  ]
</script>

<CSelect bind:value={selectedValue} {options} placeholder="Normal select" />
<CSelect bind:value={selectedValue} {options} placeholder="Rounded select" rounded />
```

## Sizes

```svelte live
<script lang="ts">
  import { CSelect } from '@casual-ui/svelte'

  let selectedValue = ''

  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Banana', value: 'Banana' },
    { label: 'Orange', value: 'Orange' },
    { label: 'Peach', value: 'Peach' },
  ]
</script>

<p>
  <b> Selected value: </b>
  {selectedValue}
</p>
<div class="c-flex c-gutter-md c-wrap c-items-center">
  <div>
    <CSelect bind:value={selectedValue} {options} placeholder="xs" size="xs" />
  </div>
  <div>
    <CSelect bind:value={selectedValue} {options} placeholder="sm" size="sm" />
  </div>
  <div>
    <CSelect bind:value={selectedValue} {options} placeholder="md (default)" />
  </div>
  <div>
    <CSelect bind:value={selectedValue} {options} placeholder="lg" size="lg" />
  </div>
  <div>
    <CSelect bind:value={selectedValue} {options} placeholder="xl" size="xl" />
  </div>
</div>
```

## Multiple

```svelte live
<script lang="ts">
  import { CSelect } from '@casual-ui/svelte'

  let selectedValue: any[] = []

  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Banana', value: 'Banana' },
    { label: 'Orange', value: 'Orange' },
    { label: 'Peach', value: 'Peach' },
  ]
</script>

<p>
  <b> Selected values: </b>
  {selectedValue}
</p>

<CSelect
  multiple
  placeholder="Select something"
  bind:value={selectedValue}
  {options}
/>
```
