<script lang="ts">
  import { CButton, CDrawer } from '@casual-ui/svelte'

  let show = false
</script>

<CButton label="Click to show drawer" on:click={() => (show = true)} />

<CDrawer bind:show title="Hi, there!">Some drawer content</CDrawer>
