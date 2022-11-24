<script lang="ts">
  import Link from './Link.svelte'
  import { page } from '$app/stores'
</script>

<Link
  to={`https://github.com/Blackman99/casual-ui/edit/main/packages/svelte/src/routes/${$page.route.id}/index.svelte`}
  external
  hideExternalIcon
  mt-8
>
  <div flex items-center text-primary>
    <div i-bx-edit text-5 mr-2 />
    Edit this page on github
  </div>
</Link>
