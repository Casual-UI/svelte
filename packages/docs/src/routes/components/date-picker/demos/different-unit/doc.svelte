<script lang="ts">
  import { CDatePicker } from '@casual-ui/svelte'

  let month: Date

  let formattedMonth = ''

  let year: Date

  let yearFormatted = ''
</script>

<div grid md:grid-cols-2 grid-cols-1 gap-8>
  <div>
    <div text-bold>
      <b> Selected month: </b>
      {month}
    </div>
    <div text-bold my-2>
      <b> Selected month formatted: </b>
      {formattedMonth}
    </div>
    
    <CDatePicker
      bind:value={month}
      bind:formattedValue={formattedMonth}
      format="MM/YYYY"
      unit="month"
      placeholder="Select month"
    />
  </div>
  <div>
    <div text-bold>
      <b> Selected year: </b>
      {year}
    </div>
    <div text-bold my-2>
      <b> Selected year formatted: </b>
      {yearFormatted}
    </div>
    
    <CDatePicker
      bind:value={year}
      bind:formattedValue={yearFormatted}
      format="YYYY"
      unit="year"
      placeholder="Select year"
    />
  </div>
</div>
