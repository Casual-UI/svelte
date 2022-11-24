<script lang="ts">

  export let demo: {
    name: string
    iframeUrl: string
    code: string
  }
</script>

<div>
  <h3>
    {demo.name}
  </h3>
  <iframe title={demo.name} src={demo.iframeUrl} class="sandbox"></iframe>
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