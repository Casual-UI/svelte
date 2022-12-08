<script lang="ts">
  import { CDatePicker } from '@casual-ui/svelte'

  let date: Date | undefined = undefined

  let formattedDate = ''
</script>

<div text-bold>
  <b> Selected date: </b>
  {date}
</div>
<div text-bold my-2>
  <b> Selected date formatted: </b>
  {formattedDate}
</div>

<CDatePicker
  bind:value={date}
  bind:formattedValue={formattedDate}
  placeholder="Select date"
/>
