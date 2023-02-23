---
title: Notification
---

## Add in root

Take projects use SvelteKit for example:

```svelte title="/src/routes/+layout.svelte"
<script>
  import CNotification from '@casual-ui/svelte/dist/components/CNotification.svelte' // [svp! ~~]
</script>

<CNotification /> // [svp! ~~]
<slot />
```

:::note[Only Once]
Please make sure CNotification component only used once in whole application.
:::

## Basic usage

```svelte live
<script lang="ts">
  import { CButton, openNotification } from '@casual-ui/svelte'
</script>

<CButton 
  label="Open notification" 
  on:click={() => openNotification({
    title: 'Hi, there',
    message: 'You\'ve got a new notification',
  })} 
/>
```

## Themes

```svelte live
<script lang="ts">
  import { CButton, openNotification } from '@casual-ui/svelte'

  function openWithTheme(
    theme: 'primary' | 'secondary' | 'warning' | 'negative' = 'primary'
  ) {
    openNotification({
      title: 'Hi, there',
      message: 'You\'ve got a new notification',
      theme,
    })
  }
</script>

<CButton label="Primary (default)" on:click={() => openWithTheme()} />

<CButton
  label="Secondary"
  theme="secondary"
  on:click={() => openWithTheme('secondary')}
/>
<CButton
  label="Warning"
  theme="warning"
  on:click={() => openWithTheme('warning')}
/>
<CButton
  label="Negative"
  theme="negative"
  on:click={() => openWithTheme('negative')}
/>
```

## Positions

```svelte live
<script lang="ts">
  import { CButton, openNotification } from '@casual-ui/svelte'

  function openWithPosition(alignX: any, alignY: any) {
    openNotification({
      title: 'Hi, there',
      message: 'You\'ve got a new notification',
      alignX,
      alignY,
    })
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
```

## No auto closing

Set `timeout` to `0` to disable auto closing

```svelte live
<script lang="ts">
  import { CButton, openNotification } from '@casual-ui/svelte'
</script>

<CButton
  label="Click to open notification"
  on:click={() =>
    openNotification({
      title: 'Hi, there',
      message: 'This is a notification without auto closing',
      timeout: 0,
    })}
/>
```

## Without close icon

set `closeIcon` to `false` to manually close notification.

```svelte live
<script lang="ts">
  import { CButton, openNotification } from '@casual-ui/svelte'

  let closeNotification: (() => void) | null

  const onClick = () => {
    if (!closeNotification) {
      const { close } = openNotification({
        title: 'Hi, there',
        message: 'This is a notification withuot close icon',
        closeIcon: false,
        timeout: 0,
      })
      closeNotification = close
    } else {
      closeNotification()
      closeNotification = null
    }
  }
</script>

<CButton
  theme={closeNotification ? 'negative' : 'primary'}
  label={`Click to ${closeNotification ? 'close' : 'open'} notification`}
  on:click={onClick}
/>
```

## Dynamic content

```svelte live
<script lang="ts">
  import { CButton, openNotification } from '@casual-ui/svelte'

  const onClick = () => {
    const { changeContent } = openNotification({
      title: 'Hi, there',
      message: 'You\'ve got a new notification',
      timeout: 6500,
    })
    setTimeout(() => {
      changeContent({
        title: 'Hi, there',
        message: 'Message changed!',
        theme: 'secondary',
      })
    }, 2000)

    setTimeout(() => {
      changeContent({
        title: 'Hi, there',
        message: 'Message changed again!',
        theme: 'warning',
      })
    }, 4000)

    setTimeout(() => {
      changeContent({
        title: 'Hi, there',
        message: 'About to close notification',
        theme: 'negative',
      })
    }, 6000)
  }
</script>

<CButton label="Click to open notification" on:click={onClick} />
```