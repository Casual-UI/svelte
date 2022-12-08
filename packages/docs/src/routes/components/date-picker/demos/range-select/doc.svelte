<script lang="ts">
  import { CDatePicker } from '@casual-ui/svelte'

  let rangeValue: [Date, Date]

  let rangeFormattedValue: [string, string] = ['', '']
</script>

<div text-bold>
  <b> Selected date range: </b>
  {rangeValue}
</div>
<div text-bold my-2>
  <b> Selected date range formatted: </b>
  {rangeFormattedValue}
</div>

<CDatePicker
  bind:rangeValue
  bind:formattedRangeValue={rangeFormattedValue}
  placeholder="Select date range"
  range
/>
