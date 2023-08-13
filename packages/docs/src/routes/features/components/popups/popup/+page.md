---
title: Popup
componentName: CPopup
---

## Positions

```svelte live ln
<script lang="ts">
  import { cubicInOut } from 'svelte/easing'
  import { fly } from 'svelte/transition'

  let show = false

  let verticalAlign: any = 'start'
  let horizontalAlign: any = 'start'

  function openWithPosition(h: any, v: any) {
    horizontalAlign = h
    verticalAlign = v
    show = true
  }
</script>

<div class="grid grid-cols-3 gap-4">
  <CButton
    icon
    style="font-size: 28px;"
    on:click={() => openWithPosition('start', 'start')}
  >
    <div class="i-ph-arrow-circle-up-left" />
  </CButton>
  <CButton
    icon
    style="font-size: 28px;"
    on:click={() => openWithPosition('center', 'start')}
  >
    <div class="i-ph-arrow-circle-up" />
  </CButton>
  <CButton
    icon
    style="font-size: 28px;"
    on:click={() => openWithPosition('end', 'start')}
  >
    <div class="i-ph-arrow-circle-up-right" />
  </CButton>
  <CButton
    icon
    style="font-size: 28px;"
    on:click={() => openWithPosition('start', 'center')}
  >
    <div class="i-ph-arrow-circle-left" />
  </CButton>
  <CButton
    icon
    style="font-size: 28px;"
    on:click={() => openWithPosition('center', 'center')}
  >
    <div class="i-cil-center-focus" />
  </CButton>
  <CButton
    icon
    style="font-size: 28px;"
    on:click={() => openWithPosition('end', 'center')}
  >
    <div class="i-ph-arrow-circle-right" />
  </CButton>
  <CButton
    icon
    style="font-size: 28px;"
    on:click={() => openWithPosition('start', 'end')}
  >
    <div class="i-ph-arrow-circle-down-left" />
  </CButton>
  <CButton
    icon
    style="font-size: 28px;"
    on:click={() => openWithPosition('center', 'end')}
  >
    <div class="i-ph-arrow-circle-down" />
  </CButton>
  <CButton
    icon
    style="font-size: 28px;"
    on:click={() => openWithPosition('end', 'end')}
  >
    <div class="i-ph-arrow-circle-down-right" />
  </CButton>
</div>

<CPopup {show} {verticalAlign} {horizontalAlign}>
  {#if show}
    <div
      class="wrapper"
      in:fly={{
        easing: cubicInOut,
        x:
          horizontalAlign === 'start'
            ? -50
            : horizontalAlign === 'center'
              ? -100
              : 50,
        y:
          verticalAlign === 'start' ? -50 : verticalAlign === 'center' ? 0 : 50,
      }}
      out:fly={{
        x:
          horizontalAlign === 'start'
            ? -50
            : horizontalAlign === 'center'
              ? 100
              : 50,
        y:
          verticalAlign === 'start' ? -50 : verticalAlign === 'center' ? 0 : 50,
      }}
    >
      <div class="inner">
        <div class="font-bold">Some Title</div>
        <div
          class="close-icon"
          on:click={() => (show = false)}
          on:keypress={() => (show = false)}
          role="button"
          tabindex="0"
        />
      </div>
      <div class="desc">
        <p>Some description</p>
      </div>
      <div class="flex justify-end">
        <CButton rounded label="A Button" />
      </div>
    </div>
  {/if}
</CPopup>
<style>
  .wrapper {
    --at-apply: 'bg-white dark:bg-[#222222] p-4 rounded-2 w-80';
  }
  .inner {
    --at-apply: 'pb-4 border-b border-gray-3 dark:border-gray-7 flex justify-between items-center';
  }
  .close-icon {
    --at-apply: 'i-material-symbols-close cursor-pointer hover:text-gray'
  }
  .desc {
    --at-apply: 'text-gray-6 dark:text-gray-3';
  }
</style>
```