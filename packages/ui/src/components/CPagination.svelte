<script>
  /**
   * The total page count
   * @type {number}
   */
  export let pages = 0

  /**
   * Current page
   * @type {number}
   */
  export let current = 1

  /**
   * The max page count to display. Will display ... when the pages is larger than this
   * @type {number}
   */
  export let maxDisplayPages = 10
</script>

<ul class="c-pagination">
  {#each pages as page}
    <li>
      {page}
    </li>
  {/each}
</ul>
