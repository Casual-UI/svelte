<script lang="ts">
  import { CTable } from '@casual-ui/svelte'
  import CustomTitle from './CustomTitle.svelte'

  const columns = [
    {
      field: 'name',
      width: '200px',
      title: CustomTitle
    },
    {
      title: 'Description',
      field: 'description',
    },
  ]

  const fruites = [
    { name: 'Apple', description: 'Apple is red' },
    { name: 'Banana', description: 'Banana is yellow' },
    { name: 'Grapes', description: 'Grapes is purple' },
  ]
</script>

<CTable data={fruites} {columns} />
