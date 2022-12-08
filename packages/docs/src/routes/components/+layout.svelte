<script lang="ts">
  import SlugNav from '../../theme/SlugNav.svelte'
  import DocLayout from '../../theme/DocLayout.svelte'
  import Sidebar from '../../theme/Sidebar.svelte'
  import ComponentApi from '../../theme/ComponentAPI.svelte'
  import type { LayoutData } from './$types'
  import CodeDemo from './CodeDemo.svelte'

  export let data: LayoutData

</script>

<DocLayout pages={data.sidebars}>
  <Sidebar slot="left" links={data.sidebars} />
  <slot />
  {#each data.demos as demo (demo)}
    <CodeDemo {demo} />
  {/each}
  <SlugNav
    demos={data.demos.map(demo => ({
      title: demo.name,
        name: demo.slug
      }
    ))} 
    slot="right"
  />
  {#if data.api}
    <ComponentApi api={data.api} />
  {/if}
</DocLayout>



