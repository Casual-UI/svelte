<script>
  import '@casual-ui/styles'
  import '@casual-ui/svelte/icon.css'
  import { CNotification } from '@casual-ui/svelte'
</script>

<CNotification />

<slot />

<style>
  :global(.svp-live-code--demo) {
    --at-apply: 'bg-white dark:bg-black rounded-t-lg';
  }
  :global(.c-tooltip--popper-content-wrapper) {
    z-index: 1000;
  }
  :global(:root) {
    --docsearch-primary-color: var(--casual-primary);
  }
</style>
