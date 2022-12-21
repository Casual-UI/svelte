<script lang="ts">
  import Layout from '../components/+layout.svelte'
  import type { LayoutData } from './$types'
  export let data: LayoutData

</script>

<Layout data={data}>
  <slot />
</Layout>