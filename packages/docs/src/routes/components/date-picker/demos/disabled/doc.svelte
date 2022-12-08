<script lang="ts">
  import { CDatePicker } from '@casual-ui/svelte'

  let date: Date
</script>

<CDatePicker bind:value={date} placeholder="Select date" disabled />