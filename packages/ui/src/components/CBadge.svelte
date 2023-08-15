<script>
  /**
   * The label text content
   * @type {string}
   */
  export let label = undefined
</script>

<div class="c-badge">
  {#if label}
    <div class="c-badge--label">
      {label}
    </div>
  {/if}
  <!-- The content that holds the badge -->
  <slot />
</div>
