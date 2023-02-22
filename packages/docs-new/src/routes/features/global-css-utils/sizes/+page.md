---
title: Sizes
---

## Heights & widths

Class grammar: `class="c-[h|w]-[xs|sm|md|lg|xl]"`.  
For example:
* `c-h-sm`: small height and line-height
* `c-w-lg`: large width

@code(/../styles/src/variables/sizes.scss,2,8)

```svelte live
<h3>
  Heights
</h3>
<div class="sizes">
  <div class="c-h-xs item">
    c-h-xs
  </div>
  <div class="c-h-sm item">
    c-h-sm
  </div>
  <div class="c-h-md item">
    c-h-md
  </div>
  <div class="c-h-lg item">
    c-h-lg
  </div>
  <div class="c-h-xl item">
    c-h-xl
  </div>
</div>
<h3>
  Widths
</h3>
<div class="sizes">
  <div class="c-w-xs item">
    xs
  </div>
  <div class="c-w-sm item">
    sm
  </div>
  <div class="c-w-md item">
    md
  </div>
  <div class="c-w-lg item">
    lg
  </div>
  <div class="c-w-xl item">
    xl
  </div>
</div>
<style>
.sizes {
  --at-apply: 'grid sm:grid-cols-2 grid-cols-1 gap-4';
}
.item {
  --at-apply: 'pl-4 bg-svp-primary text-white';
}
</style>
```

## Font sizes

Class grammar: `class="c-font-[xs|sm|md|lg|xl]"`.  

@code(/../styles/src/variables/sizes.scss,11,17)

```svelte live
<div class="sizes">
  <div class="c-font-xs item">
    c-font-xs
  </div>
  <div class="c-font-sm item">
    c-font-sm
  </div>
  <div class="c-font-md item">
    c-font-md
  </div>
  <div class="c-font-lg item">
    c-font-lg
  </div>
  <div class="c-font-xl item">
    c-font-xl
  </div>
</div>
<style>
.sizes {
  --at-apply: 'grid sm:grid-cols-2 grid-cols-1 gap-4';
}
.item {
  --at-apply: 'pl-4 text-svp-primary';
}
</style>
```

## Padding and margin

Class grammar: `class="c-[m|p][t|r|b|l|x|y]-[xs|sm|md|lg|xl]"`.  
For example:
* `c-pt-sm`: small top padding
* `c-mx-lg`: large margin left and right
* `c-pa-xs`: extra small padding for all directions

```svelte live
<div class="sizes">
  <div class="c-pa-xs item">
    c-pa-xs
  </div>
  <div class="c-pa-sm item">
    c-pa-sm
  </div>
  <div class="c-pa-md item">
    c-pa-md
  </div>
  <div class="c-pa-lg item">
    c-pa-lg
  </div>
  <div class="c-pa-xl item">
    c-pa-xl
  </div>
</div>
<style>
.sizes {
  --at-apply: 'grid sm:grid-cols-2 grid-cols-1 gap-4';
}
.item {
  --at-apply: 'b-1 b-svp-primary b-solid h-[100px] flex items-center justify-center bg-gray-2 dark:bg-gray-8 bg-clip-content';
}
</style>
```

## Rounded sizes

Class grammar: `class="c-rounded-[t|r|b|l|tr|tl|br|bl]-[xs|sm|md|lg|xl]"`.  
For example: 
* `c-rounded-tr-md` - top right medium border radius 
* `c-rounded-l-lg` - top left and bottom left large border radius
* `c-rounded-sm` - small border radius for all corners

@code(/../styles/src/variables/sizes.scss,29,35)

```svelte live
<div class="sizes">
  <div class="c-rounded-xs item">
    c-rounded-xs
  </div>
  <div class="c-rounded-sm item">
    c-rounded-sm
  </div>
  <div class="c-rounded-md item">
    c-rounded-md
  </div>
  <div class="c-rounded-lg item">
    c-rounded-lg
  </div>
  <div class="c-rounded-xl item">
    c-rounded-xl
  </div>
</div>
<style>
.sizes {
  --at-apply: 'grid sm:grid-cols-2 grid-cols-1 gap-4';
}
.item {
  --at-apply: 'flex justify-center items-center bg-svp-primary text-white h-[100px]';
}
</style>
```
