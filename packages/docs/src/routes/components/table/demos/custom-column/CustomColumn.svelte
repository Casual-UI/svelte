<!-- CustomColumn.svelte -->

<script lang="ts">
  export let row: {
    name: string
  }
</script>

<div text-10>
  {#if row.name === 'Apple'}
    <div i-openmoji-red-apple />
  {:else if row.name === 'Banana'}
    <div i-openmoji-banana />
  {:else}
    <div i-openmoji-grapes />
  {/if}
</div>
