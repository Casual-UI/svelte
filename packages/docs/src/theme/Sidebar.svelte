<script lang="ts">
  import { cubicInOut } from 'svelte/easing'
  import { fly } from 'svelte/transition'
  import Link from './Link.svelte'
  import { page } from '$app/stores'

  export let links: {
    label: string
    to: string
  }[] = []
</script>

<div leading-8 p-8 box-content inline-block h-full overflow-y-auto>
  {#each links as { label, to } (to)}
    <div flex items-center relative>
      {#if $page.route.id === to}
        <div
          absolute
          left-0
          top-1-2
          i-emojione-monotone-backhand-index-pointing-right
          transition:fly={{ x: -20, easing: cubicInOut, duration: 200 }}
          text-primary
          dark:text-dark-primary
          mr-2
          text-4
          style="transform: translateX(calc(-100% - 12px))"
        />
      {/if}
      <Link {label} {to} exact />
    </div>
  {/each}
</div>
