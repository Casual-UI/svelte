---
title: Theme Customization
---

All colors in Casual UI are defined with [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

## Theme colors

```svelte live
<script>
  const colors = ['--casual-primary', '--casual-secondary', '--casual-warning', '--casual-negative']
</script>
<div class="sm:grid-cols-4 gap-4 grid grid-cols-2">
  {#each colors as color}
    <div style="background-color:var({color});" class="h-[200px] flex items-center justify-center text-white rounded-lg">
      {color}
    </div>
  {/each}
</div>
```

## Css variables

@code(/../styles/src/variables/colors.scss)