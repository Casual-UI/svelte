---
title: Parallax
componentName: CParallax
---

## Basic usage

```svelte live
<CParallax src="/rabbit.jpg">
<div class="text-white text-6xl absolute inset-0 flex items-center justify-center">
    Rabbit
  </div>

</CParallax>
```


## Custom height & speed

```svelte live
<CParallax src="/sunset.png" speed={0.5} height="300px">
   <div class="text-white text-6xl absolute inset-0 flex items-center justify-center">
    Sunset
  </div>
</CParallax>
```

## Using video with slots

```svelte live
<CParallax src="/rabbit.jpg" speed={0.2} height="300px">
  <div class="text-white text-6xl absolute inset-0 flex items-center justify-center">
    Cats playing
  </div>
  <video slot="bg" width="100%" height="800" autoplay loop muted>
    <source type="video/mp4" src="/cat.mp4">
  </video>
</CParallax>
```