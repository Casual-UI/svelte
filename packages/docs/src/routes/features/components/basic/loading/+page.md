---
title: Loading
componentName: CLoading
---

## Loading instances

```svelte live
<div class="c-flex c-gutter-md c-wrap text-12">
  <div class="c-text-primary">
    <CLoadingAudio />
  </div>
  <div class="c-text-secondary">
    <CLoadingBar />
  </div>
  <div class="c-text-warning">
    <CLoadingBars />
  </div>
  <div class="c-text-negative">
    <CLoadingCircleBars />
  </div>
  <div class="text-blue">
    <CLoadingClock />
  </div>
  <div class="text-orange">
    <CLoadingComment />
  </div>
  <div class="text-blue">
    <CLoadingCube />
  </div>
  <div class="text-yellow-900">
    <CLoadingDot />
  </div>
  <div class="text-pink">
    <CLoadingDots />
  </div>
  <div class="text-purple">
    <CLoadingGear />
  </div>
  <div class="text-red-600">
    <CLoadingHeart />
  </div>
  <div class="text-teal-500">
    <CLoadingHourglass />
  </div>
  <div class="text-yellow-500">
    <CLoadingInfinity />
  </div>
  <div class="text-secondary">
    <CLoadingLattice />
  </div>
  <div class="text-pink-600">
    <CLoadingOrbit />
  </div>
  <div class="text-purple-500">
    <CLoadingOval />
  </div>
  <div class="text-yellow">
    <CLoadingPie />
  </div>
  <div class="text-sky">
    <CLoadingPuff />
  </div>
  <div class="text-lime">
    <CLoadingRings />
  </div>
  <div class="text-rose">
    <CLoadingSpinBox />
  </div>
  <div class="text-violet">
    <CLoadingTail />
  </div>
  <div class="text-slate">
    <CLoadingWifi />
  </div>
</div>
```

## Customize styles

- Use CSS attribute `font-size` to set the loading size
- Use `thickness` prop to set the loading circle bar thickness
- Use CSS attribute `color` to set the loading color

```svelte live
<div flex gap-4 items-center>
  <CLoading style="font-size: 2em;color: pink;" />
  <CLoading style="font-size: 4em;color: cyan;" thickness={7} />
  <CLoading style="font-size: 8em;color: purple;" thickness={10} />
</div>
```