<script lang="ts">
  import 'uno.css'
  import '@casual-ui/styles/src/index.scss'
  import { CLoading, CNotification } from '@casual-ui/svelte'
  import NavBar from '../theme/NavBar.svelte'
  import { navigating } from '$app/stores'
</script>

{#if $navigating}
  <div 
    flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 z-999 
    bg-white 
    bg-opacity-30 
    text-20 
    text-teal-6
    dark:bg-gray-3
  >
    <CLoading />
  </div>
{/if}

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
