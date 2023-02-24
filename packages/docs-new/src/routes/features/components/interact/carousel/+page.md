---
title: Carousel
componentName: carousel/CCarousel
---

## Basic usage

```svelte live
<script lang="ts">
  import { CCarousel, CCarouselSlider } from '@casual-ui/svelte'

  let activeIndex = 0
</script>

<CCarousel bind:activeIndex>
  <CCarouselSlider>
    <div class="item">
      <div class="i-openmoji-red-apple icon" />
      Do you want some apples?
    </div>
  </CCarouselSlider>
  <CCarouselSlider>
    <div class="item">
      <div class="i-openmoji-banana icon" />
      Would you like some bananas?
    </div>
  </CCarouselSlider>
  <CCarouselSlider>
    <div class="item">
      <div class="i-openmoji-grapes icon" />
      How about some grapes?
    </div>
  </CCarouselSlider>
</CCarousel>

<style>
  .item {
    font-size: 32px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .item .icon {
    font-size: 100px;
  }
</style>
```

## Themes

```svelte live
<script lang="ts">
  import { CCarousel, CCarouselSlider, CRadioGroup } from '@casual-ui/svelte'

  let activeIndex = 0
  let theme: 'primary' | 'secondary' | 'warning' | 'negative' = 'primary'
  const themeOptions = [
    {
      label: 'primary',
      value: 'primary',
    },
    {
      label: 'secondary',
      value: 'secondary',
    },
    {
      label: 'warning',
      value: 'warning',
    },
    {
      label: 'negative',
      value: 'negative',
    },
  ]
</script>

<CRadioGroup bind:value={theme} options={themeOptions} />

<hr />

<CCarousel bind:activeIndex {theme}>
  <CCarouselSlider>
    <div class="item">
      <div class="i-openmoji-red-apple icon" />
      Do you want some apples?
    </div>
  </CCarouselSlider>
  <CCarouselSlider>
    <div class="item">
      <div class="i-openmoji-banana icon" />
      Would you like some bananas?
    </div>
  </CCarouselSlider>
  <CCarouselSlider>
    <div class="item">
      <div class="i-openmoji-grapes icon" />
      How about some grapes?
    </div>
  </CCarouselSlider>
</CCarousel>

<style>
  .item {
    font-size: 32px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .item .icon {
    font-size: 100px;
  }
</style>
```

## Arrow show timing

`arrowTiming` prop can hold these values:
* `'hover'` - only show when mouse hover
* `'never'` - never show arrow
* '`always`'- always show arrow

```svelte live
<script lang="ts">
  import { CCarousel, CCarouselSlider } from '@casual-ui/svelte'

  let activeIndex = 0
</script>

<CCarousel bind:activeIndex arrowTiming="hover">
  <CCarouselSlider>
    <div class="item">
      <div class="icon i-openmoji-red-apple" />
      Do you want some apples?
    </div>
  </CCarouselSlider>
  <CCarouselSlider>
    <div class="item">
      <div class="icon i-openmoji-banana" />
      Would you like some bananas?
    </div>
  </CCarouselSlider>
  <CCarouselSlider>
    <div class="item">
      <div class="icon i-openmoji-grapes" />
      How about some grapes?
    </div>
  </CCarouselSlider>
</CCarousel>

<style>
  .item {
    font-size: 32px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .item .icon {
    font-size: 100px;
  }
</style>
```

## Infinity

```svelte live
<script lang="ts">
  import { CCarousel, CCarouselSlider } from '@casual-ui/svelte'

  let activeIndex = 0
</script>

<CCarousel bind:activeIndex infinity>
  <CCarouselSlider>
    <div class="item">
      <div class="icon i-openmoji-red-apple" />
      Do you want some apples?
    </div>
  </CCarouselSlider>
  <CCarouselSlider>
    <div class="item">
      <div class="icon i-openmoji-banana" />
      Would you like some bananas?
    </div>
  </CCarouselSlider>
  <CCarouselSlider>
    <div class="item">
      <div class="icon i-openmoji-grapes" />
      How about some grapes?
    </div>
  </CCarouselSlider>
</CCarousel>

<style>
  .item {
    font-size: 32px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .item .icon {
    font-size: 100px;
  }
</style>
```

## Interval & auto play

Notice that the `pauseOnHover` prop is default `true`

So when you hover the carousel. It will pause transition.

```svelte live
<script lang="ts">
  import { CCarousel, CCarouselSlider } from '@casual-ui/svelte'

  let activeIndex = 0
</script>

<CCarousel bind:activeIndex interval={5000} infinity arrowTiming="hover">
  <CCarouselSlider>
    <div class="item">
      <div class="icon i-openmoji-red-apple" />
      Do you want some apples?
    </div>
  </CCarouselSlider>
  <CCarouselSlider>
    <div class="item">
      <div class="icon i-openmoji-banana" />
      Would you like some bananas?
    </div>
  </CCarouselSlider>
  <CCarouselSlider>
    <div class="item">
      <div class="icon i-openmoji-grapes" />
      How about some grapes?
    </div>
  </CCarouselSlider>
</CCarousel>

<style>
  .item {
    font-size: 32px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .item .icon {
    font-size: 100px;
  }
</style>
```

## Indicator positions

```svelte live
<script lang="ts">
  import { CCarousel, CCarouselSlider, CRadioGroup } from '@casual-ui/svelte'

  let activeIndex = 0

  let indicatorsPositionHorizontal: 'start' | 'center' | 'end' = 'center'
  let indicatorsPositionVertical: 'start' | 'center' | 'end' = 'end'
  let indicatorsAlignDirection:
  | 'row'
  | 'row-reverse'
  | 'column'
  | 'column-reverse' = 'row'

  const positionOptions = [
    { label: 'start', value: 'start' },
    { label: 'center', value: 'center' },
    { label: 'end', value: 'end' },
  ]

  const alignOptions = [
    { label: 'row', value: 'row' },
    { label: 'row-reverse', value: 'row-reverse' },
    { label: 'column', value: 'column' },
    { label: 'column-reverse', value: 'column-reverse' },
  ]
</script>

<div>
  <b> indicatorsPositionHorizontal </b>
  <CRadioGroup
    bind:value={indicatorsPositionHorizontal}
    options={positionOptions}
  />
</div>

<div>
  <b> indicatorsPositionVertical </b>
  <CRadioGroup
    bind:value={indicatorsPositionVertical}
    options={positionOptions}
  />
</div>

<div>
  <b> indicatorsAlignDirection </b>
  <CRadioGroup bind:value={indicatorsAlignDirection} options={alignOptions} />
</div>

<hr />

<CCarousel
  bind:activeIndex
  {indicatorsPositionHorizontal}
  {indicatorsPositionVertical}
  {indicatorsAlignDirection}
  infinity
>
  <CCarouselSlider>
    <div class="item">
      <div class="icon i-openmoji-red-apple" />
      Do you want some apples?
    </div>
  </CCarouselSlider>
  <CCarouselSlider>
    <div class="item">
      <div class="icon i-openmoji-banana" />
      Would you like some bananas?
    </div>
  </CCarouselSlider>
  <CCarouselSlider>
    <div class="item">
      <div class="icon i-openmoji-grapes" />
      How about some grapes?
    </div>
  </CCarouselSlider>
</CCarousel>

<style>
  .item {
    font-size: 32px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .item .icon {
    font-size: 100px;
  }
</style>
```

## Custom controls

```svelte live
<script lang="ts">
  import { CButton, CCarousel, CCarouselSlider } from '@casual-ui/svelte'

  let activeIndex = 0
</script>

<CCarousel bind:activeIndex infinity>
  <CCarouselSlider>
    <div class="item">
      <div class="icon i-openmoji-red-apple" />
      Do you want some apples?
    </div>
  </CCarouselSlider>
  <CCarouselSlider>
    <div class="item">
      <div class="icon i-openmoji-banana" />
      Would you like some bananas?
    </div>
  </CCarouselSlider>
  <CCarouselSlider>
    <div class="item">
      <div class="icon i-openmoji-grapes" />
      How about some grapes?
    </div>
  </CCarouselSlider>
  <CButton slot="control-prev" icon flat theme="secondary">
    <div class="i-mdi-page-previous-outline" />
  </CButton>
  <CButton slot="control-next" icon flat theme="secondary">
    <div class="i-mdi-page-next-outline" />
  </CButton>
</CCarousel>

<style>
  .item {
    font-size: 32px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .item .icon {
    font-size: 100px;
  }
</style>
```

## Vertical 

```svelte live
<script lang="ts">
  import { CCarousel, CCarouselSlider } from '@casual-ui/svelte'

  let activeIndex = 0
</script>

<CCarousel bind:activeIndex vertical>
  <CCarouselSlider>
    <div class="item">
      <div class="icon i-openmoji-red-apple" />
      Do you want some apples?
    </div>
  </CCarouselSlider>
  <CCarouselSlider>
    <div class="item">
      <div class="icon i-openmoji-banana" />
      Would you like some bananas?
    </div>
  </CCarouselSlider>
  <CCarouselSlider>
    <div class="item">
      <div class="icon i-openmoji-grapes" />
      How about some grapes?
    </div>
  </CCarouselSlider>
</CCarousel>

<style>
  .item {
    font-size: 32px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .item .icon {
    font-size: 100px;
  }
</style>
```