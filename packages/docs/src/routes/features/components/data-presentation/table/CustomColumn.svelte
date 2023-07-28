<!-- CustomColumn.svelte -->
<script lang="ts">
  export let row: {
    name: string
  }

  $$restProps
</script>

<div class="text-10">
  {#if row.name === 'Apple'}
    <div class="i-openmoji-red-apple"></div>
  {:else if row.name === 'Banana'}
    <div class="i-openmoji-banana"></div>
  {:else}
    <div class="i-openmoji-grapes"></div>
  {/if}
</div>
