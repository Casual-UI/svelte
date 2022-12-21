<script lang="ts">
  import { CExpansion } from '@casual-ui/svelte'
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

  let docHTML: string

  import(`./${componentName}/demos/${demo.slug}/doc.md`).then((module) => {
    docHTML = module.html
  }).catch(() => {})

</script>

<div bg-white dark:bg-111111 mb-8 shadow-sm rounded-md>
  <div text-lg font-bold leading-16 pl-4>
    {demo.name}
  </div>
  {#if docHTML}
    <div mb-4 bg-gray-1 dark:bg-gray-9 p-4 leading-6 class="demo-md-content">
      {@html docHTML}
    </div>
  {/if}
  <div px-4 pb-4 id={demo.slug}>
    {#if DemoComponent}
      <svelte:component this={DemoComponent} />
    {/if}
  </div>
  <CExpansion reverse title="Fold/Expand code"  headerStyle="position: sticky; bottom: 0;font-size: 14px;">
    <div i-vscode-icons-file-type-svelte slot="icon"></div>
    {@html demo.code}
  </CExpansion>
</div>