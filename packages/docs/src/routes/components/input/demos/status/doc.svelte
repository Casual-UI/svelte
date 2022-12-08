<script lang="ts">
  import { CInput } from '@casual-ui/svelte'

  const value = ''
</script>

<CInput {value} disabled placeholder="Disabled" />

<CInput rounded {value} loading placeholder="Loading..." />

<CInput rounded {value} placeholder="Readonly" readonly />
