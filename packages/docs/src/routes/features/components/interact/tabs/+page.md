---
title: Tabs
componentName: 
  - tabs/CTabs
  - tabs/CTabItem
---

## Basic

```svelte live
<script>
  let activeName = 'Apple'
</script>
<CTabs bind:activeName>
  <CTabItem name="Apple">
    <div class="i-openmoji-red-apple text-[100px]" />
      Do you want some apples?
  </CTabItem>
  <CTabItem name="Banana">
    <div class="i-openmoji-banana text-[100px]" />
      Do you want some banana?
  </CTabItem>
  <CTabItem name="Grapes">
    <div class="i-openmoji-grapes text-[100px]" />
      How about some grapes?
  </CTabItem>
</CTabs>
```

## Custom icon

<Tabs activeName="Result">
  <TabPanel name="Result">

```svelte live
<script>
  import BananaIcon from '/src/routes/features/components/interact/tabs/BananaIcon.svelte'

  let activeName = 'Apple'
</script>
<CTabs bind:activeName>
  <CTabItem name="Apple">
    <div class="i-openmoji-red-apple text-[100px]" />
      Do you want some apples?
  </CTabItem>
  <CTabItem name="Banana" icon={BananaIcon}>
    <div class="i-openmoji-banana text-[100px]" />
      Do you want some banana?
  </CTabItem>
  <CTabItem name="Grapes">
    <div class="i-openmoji-grapes text-[100px]" />
      How about some grapes?
  </CTabItem>
</CTabs>
```

  </TabPanel>
  <TabPanel name="BananaIcon">

@code(./BananaIcon.svelte)

  </TabPanel>
  
</Tabs>
