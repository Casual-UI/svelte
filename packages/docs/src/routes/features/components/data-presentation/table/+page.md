---
title: Table
---

## Basic usage

```svelte live
<script lang="ts">
  import { CTable } from '@casual-ui/svelte'

  const columns = [
    {
      title: 'Name',
      field: 'name',
      width: '200px',
    },
    {
      title: 'Description',
      field: 'description',
    },
  ]

  const fruits = [
    { name: 'Apple', description: 'Apple is red' },
    { name: 'Banana', description: 'Banana is yellow' },
    { name: 'Grapes', description: 'Grapes is purple' },
  ]
</script>

<CTable data={fruits} {columns} />
```

## Custom column

A custom column component can hold these props:

* `col`: The column config
* `row`: The row data
* `rowIdex`: The row index number (from 0).

@code(./CustomColumn.svelte)

```svelte live
<script lang="ts">
  import { CTable } from '@casual-ui/svelte'
  import CustomColumn from '/src/routes/features/components/data-presentation/table/CustomColumn.svelte'

  const columns = [
    {
      title: 'Name',
      field: 'name',
      width: '400px',
      cell: CustomColumn,
    },
    {
      title: 'Description',
      field: 'description',
    },
  ]

  const fruits = [
    { name: 'Apple', description: 'Apple is red' },
    { name: 'Banana', description: 'Banana is yellow' },
    { name: 'Grapes', description: 'Grapes is purple' },
  ]
</script>

<CTable data={fruits} {columns} />
```

## Custom title

A custom title component can hold these props:

* `col`: The column config

The CustomTitle.svelte content is shown below

@code(./CustomTitle.svelte)

Toggle Dark mode to see title color change

```svelte live
<script lang="ts">
  import { CTable } from '@casual-ui/svelte'
  import CustomTitle from '/src/routes/features/components/data-presentation/table/CustomTitle.svelte'

  const columns = [
    {
      field: 'name',
      width: '200px',
      title: CustomTitle,
    },
    {
      title: 'Description',
      field: 'description',
    },
  ]

  const fruits = [
    { name: 'Apple', description: 'Apple is red' },
    { name: 'Banana', description: 'Banana is yellow' },
    { name: 'Grapes', description: 'Grapes is purple' },
  ]
</script>

<CTable data={fruits} {columns} />
```