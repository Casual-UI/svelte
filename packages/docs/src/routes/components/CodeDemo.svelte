<script lang="ts">
  import { onMount } from 'svelte'
  import { CExpansion } from '@casual-ui/svelte'
  import { page } from '$app/stores'

  export let demo: {
    name: string
    iframeUrl: string
    code: string
    slug: string
  }

  onMount(() => {
    const id = demo.slug
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = `/demos${$page.route.id}/demos/${id}/style.css`
    document.head.append(link)
  
    const script = document.createElement('script')
    script.src = `/demos${$page.route.id}/demos/${id}/main.js`
    document.body.append(script)

    return () => {
      script.remove()
      link.remove()
    }
  })
</script>

<div bg-white dark:bg-111111 mb-8 shadow-sm rounded-md>
  <div text-2xl font-bold leading-16 indent>
    {demo.name}
  </div>
  <div p-4>
    <div id={demo.slug}></div>
    <!-- <iframe on:load={computedHeight} bind:this={iframe} title={demo.name} src={demo.iframeUrl} class="sandbox" style={`height: ${contentHeight}`}></iframe> -->
  </div>
  <CExpansion reverse title="Fold/Expand code"  headerStyle="position: sticky; bottom: 0;">
    <div i-vscode-icons-file-type-svelte slot="icon"></div>
    {@html demo.code}
  </CExpansion>
</div>
