<script lang="ts">
  import { CExpansion } from '@casual-ui/svelte'
  import type { SvelteComponent } from 'svelte'
  import { page } from '$app/stores'

  export let demo: {
    name: string
    iframeUrl: string
    code: string
    slug: string
  }

  const componentName = $page.route.id?.split('/').pop()

  let DemoComponent: any
  import(`./${componentName}/demos/${demo.slug}/doc.svelte`).then((module) => {
    DemoComponent = module.default
})

  // onMount(() => {
  //   const id = demo.slug


  //   const link = document.createElement('link')
  //   link.rel = 'stylesheet'
  //   link.href = `/demos${$page.route.id}/demos/${id}/style.css`
  //   document.head.append(link)
  
  //   const script = document.createElement('script')
  //   script.src = `/demos${$page.route.id}/demos/${id}/main.js`
  //   document.body.append(script)

  //   return () => {
  //     script.remove()
  //     link.remove()
  //   }
  // })
</script>

<div bg-white dark:bg-111111 mb-8 shadow-sm rounded-md>
  <div text-lg font-bold leading-16 pl-4>
    {demo.name}
  </div>
  <div p-4 id={demo.slug}>
    {#if DemoComponent}
      <svelte:component this={DemoComponent} />
    {/if}
  </div>
  <CExpansion reverse title="Fold/Expand code"  headerStyle="position: sticky; bottom: 0;font-size: 14px;">
    <div i-vscode-icons-file-type-svelte slot="icon"></div>
    {@html demo.code}
  </CExpansion>
</div>
