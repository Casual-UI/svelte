<!-- Leave this. Or you can add more content for your custom layout -->
<script>
  import '@casual-ui/svelte/dist/style/style.css'
  import { CNotification } from '@casual-ui/svelte'
</script>

<CNotification />

<slot />

<style>
  :global(.svp-live-code--demo) {
    --at-apply: 'bg-white dark:bg-black rounded-t-lg';
  }
  :global(.c-tooltip--popper-content-wrapper) {
    z-index: 10000;
  }
</style>
