<script lang="ts">
  import { onMount } from 'svelte'
  import CExpansion from '@casual-ui/svelte/dist/standalone/components/CExpansion.svelte'

  export let demo: {
    name: string
    iframeUrl: string
    code: string
    slug: string
  }

  let iframe: HTMLIFrameElement
  let contentHeight = 'auto'

  const computedHeight = () => {
    if (!iframe)
      return
    contentHeight = `${iframe.contentDocument?.body.offsetHeight}px`
  }

  onMount(computedHeight)
</script>

<div bg-white mb-8 shadow-sm rounded-md id={demo.slug}>
  <div text-2xl font-bold leading-16 indent>
    {demo.name}
  </div>
  <div p-4>
    <iframe on:load={computedHeight} bind:this={iframe} title={demo.name} src={demo.iframeUrl} class="sandbox" style={`height: ${contentHeight}`}></iframe>
  </div>
  <CExpansion reverse title="Fold/Expand code"  headerStyle="position: sticky; bottom: 0;">
    <div i-vscode-icons-file-type-svelte slot="icon"></div>
    {@html demo.code}
  </CExpansion>
</div>

<style>
	.sandbox {
		border: none;
		outline: none;
    width: 100%;
	}
</style>