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
  class="{clsx(
    classPrefix,
    `${classPrefix}--${shape}`,
    `${classPrefix}--${$realSize}`,
    `${classPrefix}--${$realTheme}`,
    'c-row',
    'c-items-center',
    `c-gutter-${gutterSize}`,
  )}"
>
  {#if showBoundaryButton}
    <div class="{classPrefix}--to-first">
      <!--
        Customize the "to first" button
        @param {function} set Set first page
        @param {function} disabled Determine whether the button should be disabled or not
      -->
      <slot name="to-first" set="{toFirst}" disabled="{isFirst}">
        <CButton disabled="{isFirst}" on:click="{toFirst}" flat>
          <div class="i-material-symbols-keyboard-double-arrow-left"></div>
        </CButton>
      </slot>
    </div>
  {/if}
  {#if showPrevNextButton}
    <div class="{classPrefix}--to-prev">
      <!--
        Customize the "to prev" button
        @param {function} set Do set previous page
        @param {boolean} disabled Determine whether the button should be disabled or not
      -->
      <slot name="to-prev" set="{toPrev}" disabled="{isFirst}">
        <CButton disabled="{isFirst}" on:click="{toPrev}" flat>
          <div class="i-material-symbols-chevron-left"></div>
        </CButton>
      </slot>
    </div>
  {/if}
  {#if showEllipsesLeft}
    <div>
      <!--
        Customize the left ellipsis button
        @param {function} set Set left ellipsis page
      -->
      <slot name="left-ellipsis" set="{toEllipsesLeft}">
        <CButton flat on:click="{toEllipsesLeft}">
          {#if pagesArray[0] > 2}
            <div class="i-tabler-dots"></div>
          {:else}
            1
          {/if}
        </CButton>
      </slot>
    </div>
  {/if}
  {#each pagesArray as p}
    {@const active = p === current}
    <div>
      <!--
        Customize the page button
        @param {number} p The page number
        @param {boolean} active Determine whether the button is active or not
      -->
      <slot name="page-button" {p} {active}>
        <CButton
          label="{p}"
          flat="{!active}"
          on:click="{() => (current = p)}"
        />
      </slot>
    </div>
  {/each}
  {#if showEllipsesRight}
    <div>
      <!--
        Customize the right ellipsis button
        @param {function} set Set right ellipsis page
      -->
      <slot name="right-ellipsis" set="{toEllipsesRight}">
        <CButton flat on:click="{toEllipsesRight}">
          {#if pagesArray.at(-1) < pages - 1}
            <div class="i-tabler-dots"></div>
          {:else}
            {pages}
          {/if}
        </CButton>
      </slot>
    </div>
  {/if}
  {#if showPrevNextButton}
    <div class="{classPrefix}--to-next">
      <!--
        Customize the "to next" button
        @param {function} set Set next page
        @param {boolean} disabled Determine whether the button should be disabled or not
      -->
      <slot name="to-next" set="{toNext}" disabled="{isLast}">
        <CButton disabled="{isLast}" on:click="{toNext}" flat>
          <div class="i-material-symbols-chevron-right"></div>
        </CButton>
      </slot>
    </div>
  {/if}

  {#if showBoundaryButton}
    <div class="{classPrefix}--to-last">
      <!--
        Customize the "to last" button
        @param {function} set Set last page
        @param {boolean} disabled Determine whether the button should be disabled or not
      -->
      <slot name="to-last" set="{toLast}" disabled="{isLast}">
        <CButton disabled="{isLast}" on:click="{toLast}" flat>
          <div class="i-material-symbols-keyboard-double-arrow-right"></div>
        </CButton>
      </slot>
    </div>
  {/if}
</div>
