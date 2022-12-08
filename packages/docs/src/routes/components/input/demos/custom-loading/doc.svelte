<script lang="ts">
  import { CInput, CLoadingBars, CLoadingWifi } from '@casual-ui/svelte'

  const value = ''
</script>

<CInput {value} placeholder="Custom loading" loading>
  <CLoadingWifi slot="loading" />
</CInput>

<CInput {value} placeholder="Custom loading" loading>
  <CLoadingBars slot="loading" />
</CInput>
