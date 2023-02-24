---
title: Radio Group
componentName: form/CRadioGroup
---

## Usage

```svelte live
<script lang="ts">
  import { CRadioGroup } from '@casual-ui/svelte'

  let fruit = 1

  const options = [
    { label: 'Apple', value: 1 },
    { label: 'Banana', value: 2 },
    { label: 'Orange', value: 3 },
    { label: 'Peach', value: 4 },
  ]
</script>

<p>
  <b> Selected fruit: </b>
  {fruit}
</p>

<CRadioGroup bind:value={fruit} {options} />
```