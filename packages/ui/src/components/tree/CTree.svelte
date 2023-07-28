<script>
  import CExpansion from '../CExpansion.svelte'

  /**
   * The tree array
   * @type {Array<import('./types').Tree>} The tree config
   */
  export let tree = []

  /**
   * Whether to show connectors or not
   */
  export let connectors = false
</script>

<div class="c-tree" class:c-tree--connectors="{connectors}">
  {#each tree as node}
    {#if Array.isArray(node.children)}
      <CExpansion showArrow="{false}">
        <div
          slot="title"
          let:expanded
          class="c-tree--title"
          class:c-tree--title-expanded="{expanded}"
        >
          <!-- Customize the expand status indicator icon -->
          <slot name="icon">
            <div
              class="c-tree--leading-icon"
              class:c-tree--leading-icon--expanded="{expanded}"
              i-ic-outline-arrow-right
            ></div>
          </slot>
          {node.title}
        </div>
        <div class="c-tree--sub">
          <svelte:self tree="{node.children}" />
        </div>
      </CExpansion>
    {:else}
      <div class="c-tree--leaf">
        {node.title}
      </div>
    {/if}
  {/each}
</div>
