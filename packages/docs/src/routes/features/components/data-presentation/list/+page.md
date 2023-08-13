---
title: List
componentName: 
  - CList
  - CItem
  - CInfoItem
---

## Sizes

```svelte live
<script lang="ts">
  const items = [
    { label: 'Apple', id: 1 },
    { label: 'Banana', id: 2 },
    { label: 'Orange', id: 3 },
    { label: 'Peach', id: 4 },
  ]

  const options = [
    { label: 'xs', value: 'xs' },
    { label: 'sm', value: 'sm' },
    { label: 'md', value: 'md' },
    { label: 'lg', value: 'lg' },
    { label: 'xl', value: 'xl' },
  ]

  let selectedSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md'
</script>

<CRadioGroup bind:value={selectedSize} {options} />

<CList {items} size={selectedSize} />
```

## Divider 

```svelte live
<script lang="ts">
  const items = [
    { label: 'Apple', id: 1 },
    { label: 'Banana', id: 2 },
    { label: 'Orange', id: 3 },
    { label: 'Peach', id: 4 },
  ]
</script>

<CList {items} divider />
```

## Use with CInfoItem

```svelte live
<script>
  const items = [
    { title: 'Notification', subtitle: 'Some notification description', icon: 'no', },
    { title: 'Personal', subtitle: 'Some personal description', icon: 'per' },
    { title: 'Settings', subtitle: 'Some settings description', icon: 'se' },
    { title: 'Exit', subtitle: 'Some exit description', icon: 'ex' },
  ]

  let activeItem = ''

  const handleItemClick = e => {
    activeItem = e.detail.title
  }
</script>

<CList {items}
  clickable
  activeFn={item => activeItem === item.title}
  on:item-click={handleItemClick}
>
  <CInfoItem
    slot="item"
    let:active
    let:itemObj
    title={itemObj.title}
    subtitle={itemObj.subtitle}
  >
    <div slot="icon" class={`${itemObj.icon}`}></div>
    <div slot="append" class:checked-icon={active} class="text-6"></div>
  </CInfoItem>
</CList>
<style>
  .no {
    --at-apply: 'i-carbon-notification text-8';
  }
  .per {
    --at-apply: 'i-ic-round-person text-8';
  }
  .se {
    --at-apply: 'i-ic-sharp-settings text-8';
  }
  .ex {
    --at-apply: 'i-mingcute-exit-line text-8';
  }
  .checked-icon {
    --at-apply: 'i-ic-baseline-check';
  }
</style>
```