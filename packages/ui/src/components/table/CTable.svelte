<script context="module">
  export const DEFAULT_WIDTH = '100px'
</script>

<script>
  import { onMount } from 'svelte'

  import bem from '../../utils/bem'
  import CTd from './CTd.svelte'
  import CTh from './CTh.svelte'
  import CTr from './CTr.svelte'
  import { EStickyPosition } from './types'

  /**
   * Determine whether the table is striped or not.
   * @type {boolean}
   */
  export let striped = false

  /**
   * The columns config array.
   * @type {Array<import('./types').Column>}
   */
  export let columns = []

  /**
   * The table data.
   * @type {Array<any>}
   */
  export let data = []

  const stickyLeftPositions = []
  const stickyRightPositions = []
  let maxStickyLeftIdx = -1
  let minStickyRightIdx = -1

  function compute() {
    let previousLeftIndex = -1
    let previousRightIndex = -1
    columns.forEach((c, i) => {
      if (c.sticky === EStickyPosition.Left) {
        if (previousLeftIndex === -1) {
          stickyLeftPositions[i] = 0
        } else {
          stickyLeftPositions[i] =
            columns[previousLeftIndex].width || DEFAULT_WIDTH
        }

        previousLeftIndex = i
        maxStickyLeftIdx = i
      } else if (c.sticky === EStickyPosition.Right) {
        if (previousRightIndex === -1) {
          stickyRightPositions[i] = 0
          minStickyRightIdx = i
        } else {
          stickyRightPositions[i] =
            columns[previousRightIndex].width || DEFAULT_WIDTH
        }
        previousRightIndex = i
      } else {
        stickyLeftPositions[i] = 0
        stickyRightPositions[i] = 0
      }
    })
  }

  compute()

  /**
   * @type {HTMLDivElement}
   */
  let tableWrapper

  let scrollLeft = 0
  let clientWidth = 0
  let scrollWidth = 0

  $: showMaxLeftStickyShadow = scrollLeft > 0
  $: showMaxRightStickyShadow = scrollLeft < scrollWidth - clientWidth

  function handleScroll(e) {
    scrollLeft = e.target.scrollLeft
  }

  onMount(() => {
    scrollWidth = tableWrapper.scrollWidth
  })
</script>

<div
  class="{bem('table', {
    striped,
  })}"
  bind:clientWidth
  on:scroll="{handleScroll}"
  bind:this="{tableWrapper}"
>
  <table class="c-table--table">
    <colgroup>
      {#each columns as col}
        <col style="{{ width: col.width ?? DEFAULT_WIDTH }}" />
      {/each}
    </colgroup>
    <thead>
      <CTr>
        {#each columns as col, i}
          <CTh
            width="{col.width}"
            sticky="{col.sticky}"
            stickyLeft="{stickyLeftPositions[i]}"
            stickyRight="{stickyRightPositions[i]}"
            stickyLeftMax="{maxStickyLeftIdx === i && showMaxLeftStickyShadow}"
            stickyRightMin="{minStickyRightIdx === i &&
              showMaxRightStickyShadow}"
          >
            {#if typeof col.title === 'string'}
              {col.title}
            {:else}
              <svelte:component this="{col.title}" {col} />
            {/if}
          </CTh>
        {/each}
      </CTr>
    </thead>
    <tbody>
      {#each data as row, i}
        <CTr>
          {#each columns as col, j}
            <CTd
              width="{col.width}"
              sticky="{col.sticky}"
              stickyLeft="{stickyLeftPositions[j]}"
              stickyRight="{stickyRightPositions[j]}"
              stickyLeftMax="{maxStickyLeftIdx === j &&
                showMaxLeftStickyShadow}"
              stickyRightMin="{minStickyRightIdx === j &&
                showMaxRightStickyShadow}"
            >
              {#if col.cell}
                <svelte:component
                  this="{col.cell}"
                  {col}
                  {row}
                  rowIndex="{i}"
                />
              {:else}
                {row[col.field]}
              {/if}
            </CTd>
          {/each}
        </CTr>
      {/each}
    </tbody>
  </table>
</div>
