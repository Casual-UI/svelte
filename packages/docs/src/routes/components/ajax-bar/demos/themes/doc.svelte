<script lang="ts">
  import { CAjaxBar, CButton } from '@casual-ui/svelte'

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

<CButton label="Start primary" on:click={() => handleStartWithTheme('primary')} />
<CButton label="Start secondary" theme="secondary" on:click={() => handleStartWithTheme('secondary')} />
<CButton label="Start warning" theme="warning" on:click={() => handleStartWithTheme('warning')} />
<CButton label="Start negative" theme="negative" on:click={() => handleStartWithTheme('negative')} />

<CButton label="End" theme="negative" on:click={handleEnd} rounded  />

<CAjaxBar bind:this={ajaxBar} {theme} />

