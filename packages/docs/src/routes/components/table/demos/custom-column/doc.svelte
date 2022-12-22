<script lang="ts">
  import { CTable } from '@casual-ui/svelte'
  import CustomColumn from './CustomColumn.svelte'

  const columns = [
    {
      title: 'Name',
      field: 'name',
      width: '400px',
      cell: CustomColumn
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
