<script>
  import { createEventDispatcher } from 'svelte'
  import clickOutside from '../actions/clickOutside'
  import clsx from '../utils/clsx'

  /**
   * The dropdown shown status. It is recommended to use `bind:show`.
   * @type {boolean}
   */
  export let show = false

  /**
   * Determine whether the dropdown is disabled or not.
   * @type {boolean}
   */
  export let disabled = false

  /**
   * Does the dropdown content maintain the same width with parent.
   * @type {boolean}
   */
  export let widthWithinParent = true

  /**
   * If set to `true`. Hover parent would not trigger dropdwon show.
   * @type {boolean}
   */
  export let manual = false

  const dispatch = createEventDispatcher()

  /**
   * @type {import('../actions/clickOutside').ClickOutsideParams}
   */
  const clickOutsideParams = {
    cbInside: async () => {
      if (disabled || manual) return
      /**
       * Emit dropdown next expand status
       * @param {boolean} newShowStatus The new shown status
       */
      dispatch('toggle', !show)
      show = !show
    },
    cbOutside: async () => {
      if (disabled || manual) return
      dispatch('toggle', false)
      show = false
    },
  }

  export const toggleManually = newShowStatus => {
    show = newShowStatus
  }
</script>

<div
  use:clickOutside="{clickOutsideParams}"
  class="{clsx('c-dropdown', show && 'c-dropdown--dropped')}"
>
  <div class="c-dropdown--trigger">
    <!--
      The trigger content
      @param toggleManually The function to manually toggle shown status
    -->
    <slot {toggleManually} />
  </div>
  <div
    class="{clsx(
      'c-dropdown--drop-content',
      !widthWithinParent && 'c-dropdown--drop-content-auto-width',
    )}"
  >
    <!-- The dropdown content -->
    <slot name="drop-content" />
  </div>
</div>
