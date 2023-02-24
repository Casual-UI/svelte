---
title: Dialog
componentName: CDialog
---

## Basic usage

```svelte live
<script lang="ts">
  import { CButton, CDialog } from '@casual-ui/svelte'

  let show = false
</script>

<CButton label="Click to show dialog" on:click={() => (show = true)} />

<CDialog bind:show title="Hi, there!">some content</CDialog>
```

## Height & width

```svelte live
<script lang="ts">
  import { CButton, CDialog } from '@casual-ui/svelte'

  let show = false
</script>

<CButton label="Click to show dialog" on:click={() => (show = true)} />

<CDialog bind:show title="Hi, there!" width="60vw" bodyHeight="60vh">
  Some content
</CDialog>
```

## Without close icon

```svelte live
<script lang="ts">
  import { CButton, CDialog } from '@casual-ui/svelte'

  let show = false
</script>

<CButton
  label="Click to show dialog (Press Esc to close)"
  on:click={() => (show = true)}
/>

<CDialog bind:show title="Hi, there!" closeIcon={false}>some content</CDialog>
```

## Positions

```svelte live
<script lang="ts">
  import { CButton, CDialog } from '@casual-ui/svelte'

  let show = false

  let verticalAlign: any = 'start'
  let horizontalAlign: any = 'start'

  function openWithPosition(h: any, v: any) {
    horizontalAlign = h
    verticalAlign = v
    show = true
  }
</script>

<CDialog
  bind:show
  title="Hi, there!"
  {verticalAlign}
  {horizontalAlign}
  bodyHeight="40vh"
>
  some content
</CDialog>

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
```

## Footer actions

```svelte live
<script lang="ts">
  import { CButton, CDialog } from '@casual-ui/svelte'

  let show = false

  function onCancel() {
    show = false
  }
</script>

<CButton label="Click to show dialog" on:click={() => (show = true)} />

<CDialog
  bind:show
  title="Hi, there!"
  showCancelBtn
  showConfirmBtn
  on:cancel={onCancel}
>
  some content
</CDialog>
```

## Customize contents with slots

```svelte live
<script lang="ts">
  import { CButton, CDialog } from '@casual-ui/svelte'
  let show = false
</script>

<CButton on:click={() => (show = true)} label="Click to show dialog" />

<CDialog bind:show>
  <div class="c-text-primary flex items-center" slot="title">
    <div class="i-line-md-emoji-smile-wink text-8 mr-2" />
    <div>Hi, there</div>
  </div>

  <div class="i-mdi-progress-close hover:i-line-md-close" slot="close-icon" />

  <div>Body content</div>

  <div slot="actions">
    <button on:click={() => (show = false)}> Custom action button </button>
  </div>
</CDialog>
```
