<script>
  import useSize from '../../hooks/useSize'
  import bem from '../../utils/bem'
  import clsx from '../../utils/clsx'

  /**
   * The toggle label text. It is recommended to use `bind:value`.
   * @type {string}
   */
  export let label = ''

  /**
   * The size of toggle. Notice that the default value is `'md'` instead of `undefined`
   * @type {'xs' | 'sm' | 'md' | 'lg' | 'xl'=}
   */
  export let size = undefined

  /**
   * The current value of toggle.
   * @type {any}
   */
  export let value = false

  /**
   * The value passed to `value` prop when the toggle is on.
   * @type {any}
   */
  export let checkedValue = true

  /**
   * The value passed to `value` prop when the toggle is off.
   * @type {any}
   */
  export let uncheckValue = false

  /**
   * Determine whether the toggle is dislabed or not.
   * @type {boolean}
   */
  export let disabled = false

  const contextSize = useSize(size)

  $: checked = value === checkedValue

  const toggle = () => {
    if (disabled) return
    if (value === checkedValue) {
      value = uncheckValue
      return
    }
    value = checkedValue
  }
</script>

<div
  class="{clsx(
    bem('toggle', {
      checked,
      disabled,
    }),
    `c-h-${$contextSize}`,
    `c-font-${$contextSize}`,
    `c-toggle--size-${$contextSize}`,
  )}"
  on:click="{toggle}"
  on:keypress="{toggle}"
  role="checkbox"
  tabindex="0"
  aria-checked="{value}"
>
  <div class="c-toggle--track">
    <div class="c-toggle--dot"></div>
  </div>
  <div class="c-toggle--label">
    {label}
  </div>
</div>
