<script>
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

  /**
   * @type {import('../actions/clickOutside').ClickOutsideParams}
   */
  const clickOutsideParams = {
    cbInside: () => {
      if (disabled || manual) return
      if (!show) show = true
    },
    cbOutside: () => {
      if (disabled || manual) return
      show = false
    },
  }
</script>

<div
  use:clickOutside="{clickOutsideParams}"
  class="{clsx('c-dropdown', show && 'c-dropdown--dropped')}"
>
  <div class="c-dropdown--trigger">
    <!-- The trigger content -->
    <slot />
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
