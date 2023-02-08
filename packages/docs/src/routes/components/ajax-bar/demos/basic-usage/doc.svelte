<script lang="ts">
  import { CAjaxBar, CButton } from '@casual-ui/svelte'

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
