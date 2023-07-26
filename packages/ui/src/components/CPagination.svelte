<script>
  import useSize from '../hooks/useSize'
  import useTheme from '../hooks/useTheme'
  import bem from '../utils/bem'
  import clsx from '../utils/clsx'
  import CButton from './CButton.svelte'

  /**
   * The total page count
   * @type {number}
   */
  export let pages = 0

  /**
   * @type {'circle' | 'square' | 'rounded'}
   */
  export let shape = 'square'

  /**
   * Current page. It is recommended to use `bind:current`
   * @type {number}
   */
  export let current = 1

  /**
   * The max page count to display. Will display ... when the pages is larger than this
   * @type {number}
   */
  export let maxDisplayPages = 5

  /**
   * The size of all buttons
   * @type {import('@casual-ui/types').CSize}
   */
  export let size = undefined

  /**
   * The gutter size between each button
   * @type {import('@casual-ui/types').CSize}
   */
  export let gutterSize = 'md'

  /**
   * The theme of all buttons
   * @type {import('@casual-ui/types').CTheme}
   */
  export let theme = undefined

  /**
   * Determine whether to show the to first/last button or not.
   * @type {boolean}
   */
  export let showBoundaryButton = true

  /**
   * Determine whether to show the to prev/next button or not.
   * @type {boolean}
   */
  export let showPrevNextButton = true

  $: realSize = useSize(size)

  $: realTheme = useTheme(theme)

  const classPrefix = bem('pagination')

  $: isFirst = current === 1
  $: isLast = current === pages

  const toNext = () => {
    if (!isLast) current++
  }

  const toPrev = () => {
    if (!isFirst) current--
  }

  const toFirst = () => {
    if (!isFirst) current = 1
  }

  const toLast = () => {
    if (!isLast) current = pages
  }

  $: boundaryLeft = Math.floor(maxDisplayPages / 2)
  $: pagesArray = Array.from({
    length: maxDisplayPages < pages ? maxDisplayPages : pages,
  }).map((_, i) => {
    if (current <= boundaryLeft) return i + 1

    if (current >= pages - boundaryLeft) return pages - maxDisplayPages + i + 1

    return i <= boundaryLeft
      ? current - boundaryLeft + i
      : current + i - boundaryLeft
  })
  $: showEllipsesLeft = pagesArray[0] > 1
  $: showEllipsesRight = pagesArray.at(-1) < pages

  const toEllipsesLeft = () => (current = pagesArray[0] - 1)
  const toEllipsesRight = () => (current = pagesArray.at(-1) + 1)
</script>

<div
  class={clsx(
    classPrefix,
    `${classPrefix}--${shape}`,
    `${classPrefix}--${$realSize}`,
    `${classPrefix}--${$realTheme}`,
    'c-row',
    'c-items-center',
    `c-gutter-${gutterSize}`
  )}
>
  {#if showBoundaryButton}
    <slot name="to-first" {toFirst}>
      <div class={`${classPrefix}--to-first`}>
        <CButton disabled={isFirst} on:click={toFirst}>
          <div class="i-material-symbols-keyboard-double-arrow-left" />
        </CButton>
      </div>
    </slot>
  {/if}
  {#if showPrevNextButton}
    <div class={`${classPrefix}--to-prev`}>
      <CButton disabled={isFirst} on:click={toPrev}>
        <div class="i-material-symbols-chevron-left" />
      </CButton>
    </div>
  {/if}
  {#if showEllipsesLeft}
    <div>
      <CButton flat on:click={toEllipsesLeft}>
        {#if pagesArray[0] > 2}
          <div class="i-tabler-dots" />
        {:else}
          1
        {/if}
      </CButton>
    </div>
  {/if}
  {#each pagesArray as p}
    <div>
      <CButton label={p} flat={p !== current} on:click={() => (current = p)} />
    </div>
  {/each}
  {#if showEllipsesRight}
    <div>
      <CButton flat on:click={toEllipsesRight}>
        {#if pagesArray.at(-1) < pages - 1}
          <div class="i-tabler-dots" />
        {:else}
          {pages}
        {/if}
      </CButton>
    </div>
  {/if}
  {#if showPrevNextButton}
    <div class={`${classPrefix}--to-next`}>
      <CButton disabled={isLast} on:click={toNext}>
        <div class="i-material-symbols-chevron-right" />
      </CButton>
    </div>
  {/if}

  {#if showBoundaryButton}
    <div class={`${classPrefix}--to-last`}>
      <CButton disabled={isLast} on:click={toLast}>
        <div class="i-material-symbols-keyboard-double-arrow-right" />
      </CButton>
    </div>
  {/if}
</div>
