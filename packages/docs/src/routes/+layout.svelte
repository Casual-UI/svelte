<script lang="ts">
  import 'uno.css'
  import '@casual-ui/svelte/dist/style/style.css'
  import { CNotification } from '@casual-ui/svelte'
  import NavBar from '../theme/NavBar.svelte'
  import { page } from '$app/stores'
  $: isDemo = $page.route.id?.indexOf('/demos/') !== -1
</script>

{#if isDemo}
<div bg-white>
  <slot />
</div>
{:else}

<NavBar />
<div
  flex-col
  flex
  text-t1
  dark:text-cecece
  sm:pt-18
  class="doc-container"
  overflow-auto
  sm:overflow-unset
>
  <div flex-grow>
    <slot />
  </div>

  <slot name="footer">
    <footer text-t-3 text-3 text-center h-8 leading-8>
      Copyright © 2021 - {new Date().getFullYear()} Casual UI
    </footer>
  </slot>
</div>
<CNotification />
{/if}

<style>
  .doc-container {
    min-height: calc(100vh - 3.5rem);
  }
  @media (min-width: 768px) {
    .doc-container {
      min-height: calc(100vh - 4.5rem);
    }
  }
</style>
