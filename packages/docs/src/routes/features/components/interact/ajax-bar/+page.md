---
title: Ajax Bar
componentName: CAjaxBar
---

Ajax bar is useful when page toggling or data fetching visibility is required.

## Basic usage

```svelte live
<script lang="ts">
  let ajaxBar: CAjaxBar

  const handleStart = () => {
    ajaxBar && ajaxBar.start()
  }

  const handleEnd = () => {
    ajaxBar && ajaxBar.end()
  }
</script>

<CButton label="Start" on:click={handleStart} />
<CButton label="End" theme="negative" on:click={handleEnd} />
<CAjaxBar bind:this={ajaxBar} />
```

## Themes 

```svelte live
<script lang="ts">
  let ajaxBar: CAjaxBar

  let theme = 'primary'

  const handleStartWithTheme = (t: string) => {
    theme = t
    ajaxBar && ajaxBar.start()
  }

  const handleEnd = () => {
    ajaxBar && ajaxBar.end()
  }
</script>

<CButton
  label="Start primary"
  on:click={() => handleStartWithTheme('primary')}
/>
<CButton
  label="Start secondary"
  theme="secondary"
  on:click={() => handleStartWithTheme('secondary')}
/>
<CButton
  label="Start warning"
  theme="warning"
  on:click={() => handleStartWithTheme('warning')}
/>
<CButton
  label="Start negative"
  theme="negative"
  on:click={() => handleStartWithTheme('negative')}
/>

<CButton label="End" theme="negative" on:click={handleEnd} rounded />

<CAjaxBar bind:this={ajaxBar} {theme} />
```
