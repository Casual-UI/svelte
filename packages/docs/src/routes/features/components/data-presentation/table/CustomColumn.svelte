<!-- CustomColumn.svelte -->
<script lang="ts">
  export let row: {
    name: string
  }
</script>

<div class="text-10">
  {#if row.name === 'Apple'}
    <div class="i-openmoji-red-apple" />
  {:else if row.name === 'Banana'}
    <div class="i-openmoji-banana" />
  {:else}
    <div class="i-openmoji-grapes" />
  {/if}
</div>
