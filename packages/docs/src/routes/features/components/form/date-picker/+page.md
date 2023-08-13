---
title: Date Picker
componentName: form/date-picker/CDatePicker
---

## Basic usage

```svelte live
<script lang="ts">
  let date: Date | undefined = undefined
  let formattedDate = ''
</script>

<div>
  <b> Selected date: </b>
  {date}
</div>
<div class="my-4">
  <b> Selected date formatted: </b>
  {formattedDate}
</div>

<CDatePicker
  bind:value={date}
  bind:formattedValue={formattedDate}
  placeholder="Select date"
/>
```

## Disabled

```svelte live
<script lang="ts">
  let date: Date
</script>

<CDatePicker bind:value={date} placeholder="Select date" disabled />
```

## Sizes

```svelte live
<script lang="ts">
  let date: Date
</script>

<div class="c-flex c-items-center c-gutter-md c-wrap">
  <div>
    <CDatePicker size="xs" bind:value={date} placeholder="xs" />
  </div>
  <div>
    <CDatePicker size="sm" bind:value={date} placeholder="sm" />
  </div>
  <div>
    <CDatePicker bind:value={date} placeholder="md (default)" />
  </div>
  <div>
    <CDatePicker size="lg" bind:value={date} placeholder="lg" />
  </div>
  <div>
    <CDatePicker size="xl" bind:value={date} placeholder="xl" />
  </div>
</div>
```

## Select month & year

```svelte live
<script lang="ts">
  let month: Date
  let formattedMonth = ''
  let year: Date
  let yearFormatted = ''
</script>

<div class="grid md:grid-cols-2 grid-cols-1 gap-8">
  <div>
    <div>
      <b> Selected month: </b>
      {month}
    </div>
    <div class="my-2">
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
    <div>
      <b> Selected year: </b>
      {year}
    </div>
    <div class="my-2">
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
```

## Range select

```svelte live
<script lang="ts">
  let rangeValue: [Date, Date]
  let rangeFormattedValue: [string, string] = ['', '']
</script>

<div>
  <b> Selected date range: </b>
  {rangeValue}
</div>
<div class="my-2">
  <b> Selected date range formatted: </b>
  {rangeFormattedValue}
</div>

<CDatePicker
  bind:rangeValue
  bind:formattedRangeValue={rangeFormattedValue}
  placeholder="Select date range"
  range
/>
```
