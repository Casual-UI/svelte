<script>
  import CExpansion from '../CExpansion.svelte'
  
  /**
   * The tree array
   * @type {Array<import('./types').Tree>} The tree config
   */
  export let tree = []
</script>

<div class="c-tree">
  {#each tree as node}
    {#if Array.isArray(node.children)}
      <CExpansion showArrow={false}>
        <div
          slot="title"
          let:expanded
          class="c-tree--title"
          class:c-tree--title-expanded={expanded}
        >
          <div
            class="c-tree--leading-icon"
            class:c-tree--leading-icon--expanded={expanded}
            i-ic-outline-arrow-right
          />
          {node.title}
        </div>
        <div class="c-tree--sub">
          <svelte:self tree={node.children} />
        </div>
      </CExpansion>
    {:else}
      <div class="c-tree--leaf">
        {node.title}
      </div>
    {/if}
  {/each}
</div>
