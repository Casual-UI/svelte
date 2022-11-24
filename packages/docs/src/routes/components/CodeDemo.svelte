<script lang="ts">
  import { onMount } from 'svelte'

  export let demo: {
    name: string
    iframeUrl: string
    code: string
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

<div>
  <h3>
    {demo.name}
  </h3>
  <iframe on:load={computedHeight} bind:this={iframe} title={demo.name} src={demo.iframeUrl} class="sandbox" style={`height: ${contentHeight}`}></iframe>
  <pre>
    {demo.code}
  </pre>
</div>

<style>
	.sandbox {
		border: none;
		outline: none;
    width: 100%;
	}
</style>