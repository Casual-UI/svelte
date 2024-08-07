<script>
  import { createEventDispatcher } from 'svelte'
  import { useValidator } from '../../hooks/useForm'
  import useSize from '../../hooks/useSize'
  import clsx from '../../utils/clsx'

  /**
   * The radio selected status. It is recommended to use `bind:value`.
   * @type {boolean | string | number}
   */
  export let value = false

  /**
   * The selected value.
   * @type {boolean | string | number}
   */
  export let selectedValue = true

  /**
   * The label text.
   * @type {string}
   */
  export let label = ''

  /**
   * The size of radio. Notice that the default value is `'md'` instead of `undefined`
   * @type {'xs' | 'sm' | 'md' | 'lg' | 'xl'=}
   */
  export let size = undefined

  /**
   * Determine whether the radio is disabled or not.
   */
  export let disabled = false

  const contextSize = useSize(size)

  const { hasError } = useValidator()

  const dispatch = createEventDispatcher()

  const onClick = () => {
    if (disabled || value === selectedValue) return
    value = selectedValue
    /**
     * The change event.
     * @param {boolean | string | number} value - The new selected value.
     */
    dispatch('change', selectedValue)
  }
</script>

<div
  class="{clsx(
    `c-radio c-font-${$contextSize} c-h-${$contextSize} c-radio--size-${$contextSize}`,
    value === selectedValue && 'c-radio--selected',
    disabled && 'c-radio--disabled',
    $hasError && 'c-radio--has-error',
  )}"
  on:click="{onClick}"
  on:keypress="{onClick}"
  role="radio"
  tabindex="0"
  aria-checked="{value}"
>
  <svg
    class="c-radio--circle-wrapper"
    viewBox="0 0 24 24"
    aria-hidden="true"
    fill="currentColor"
  >
    <path
      d="M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12"
    ></path>
    <path
      class="c-radio--inner-circle"
      d="M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"
    ></path>
  </svg>
  <div class="c-radio--label">
    {label}
  </div>
</div>
