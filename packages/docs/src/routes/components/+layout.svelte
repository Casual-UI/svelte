<script lang="ts">
  import DocLayout from '../../theme/DocLayout.svelte'
  import Sidebar from '../../theme/Sidebar.svelte'
  import type { LayoutData } from './$types'
  import CodeDemo from './CodeDemo.svelte'
  import { browser } from '$app/environment'
  import { page } from '$app/stores'

  export let data: LayoutData

  $: isDemo = $page.route.id?.indexOf('/demos/') !== -1
  if (browser && !isDemo)
    // eslint-disable-next-line no-console
    console.log(data)

</script>

{#if isDemo}
  <slot />
{:else}
  <DocLayout pages={data.sidebars}>
    <Sidebar slot="left" links={data.sidebars} />
      {#each data.demos as demo}
        <CodeDemo {demo} />
      {/each}
  </DocLayout>
{/if}
  


