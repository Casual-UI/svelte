---
title: Table
componentName:
  - table/CTable
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

## Sticky columns

```svelte live
<script>
  import { CTable } from '@casual-ui/svelte'
  import CustomColumn from '/src/routes/features/components/data-presentation/table/CustomColumn.svelte'

  const columns = [
    {
      title: 'Icon',
      field: 'icon',
      cell: CustomColumn,
      sticky: 'left',
      width: '100px'
    },
    {
      title: 'Name',
      field: 'name',
      width: '100px',
      sticky: 'left',
    },
    {
      title: 'Color',
      field: 'color',
      width: '300px',
    },
    {
      title: 'Shape',
      field: 'shape',
      width: '300px'
    },
    {
      title: 'Description',
      field: 'description',
      width: '200px',
      sticky: 'right',
    },
  ]

  const fruits = [
    { name: 'Apple', color: 'red', shape: 'circle', description: 'Apple is red' },
    { name: 'Banana', color: 'yellow', shape: 'long', description: 'Banana is yellow' },
    { name: 'Grapes', color: 'purple', shape: 'many circles', description: 'Grapes is purple' },
  ]
</script>

<CTable data={fruits} {columns} />
```

## Custom column

A custom column component can hold these props:

* `col`: The column config
* `row`: The row data
* `rowIdex`: The row index number (from 0).

<Tabs activeName="CustomColumn.svelte">
  <TabPanel name="CustomColumn.svelte">
    
@code(./CustomColumn.svelte)

  </TabPanel>
  <TabPanel name="Live">

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
    { name: 'Grapes', description: 'Grapes are purple' },
  ]
</script>

<CTable data={fruits} {columns} />
```

  </TabPanel>
</Tabs>



## Custom title

A custom title component can hold these props:

* `col`: The column config

<Tabs activeName="CustomTitle.svelte">
  <TabPanel name="CustomTitle.svelte">
    
@code(./CustomTitle.svelte)

  </TabPanel>
  <TabPanel name="Live">

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

  </TabPanel>
</Tabs>

