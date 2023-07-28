<script>
  import clsx from '../../utils/clsx'
  import { DEFAULT_WIDTH } from './CTable.svelte'

  /**
   * The width of th.
   * @type {string}
   */
  export let width = DEFAULT_WIDTH

  /**
   * @type {import('./types').EStickyPosition}
   */
  export let sticky

  export let stickyLeft = '0'
  export let stickyRight = '0'
  export let stickyLeftMax = false
  export let stickyRightMin = false
</script>

<th
  class="{clsx('c-table--th', {
    [`c-table--th--sticky-${sticky}`]: sticky,
  })}"
  class:c-table--td--sticky-max-left="{stickyLeftMax}"
  class:c-table--td--sticky-min-right="{stickyRightMin}"
  style:width
  style:--c-table-sticky-left="{stickyLeft}"
  style:--c-table-sticky-right="{stickyRight}"
>
  <slot />
</th>
