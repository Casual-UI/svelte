<script>
  import { createEventDispatcher } from 'svelte'
  import { useValidator } from '../../hooks/useForm'
  
  import useSize from '../../hooks/useSize'
  import bem from '../../utils/bem'
  import clsx from '../../utils/clsx'

  /**
   * Determine whether the checkbox is checked or not. It is recommended to use `bind:value`.
   * @type {boolean | string | number=}
   */
  export let value

  /**
   * The theme color
   * @type {'primary' | 'secondary' | 'warning' | 'negative'}
   */
  export let theme = 'primary'

  /**
   * The size of checkbox.
   * @type {'xs' | 'sm' | 'md' | 'lg' | 'xl'=}
   */
  export let size = undefined

  /**
   * The text label of checkbox.
   * @type {string}
   */
  export let label = ''

  /**
   * The checked value pass to `value` prop when the checkbox is checked.
   * @type {boolean | string | number}
   */
  export let checkedValue = true

  /**
   * Determine whether the checkbox is disabled or not.
   * @type {boolean}
   */
  export let disabled = false

  const dispatch = createEventDispatcher()

  $: contextSize = useSize(size)

  const { hasError } = useValidator()

  const onClick = () => {
    if (disabled)
      return
    const newValue = value === checkedValue ? undefined : checkedValue
    value = newValue
    /**
     * Emit when the checked status change.
     */
    dispatch('change', newValue)
  }
</script>

<div
  class={clsx(
    bem('checkbox', {
      checked: value === checkedValue,
      disabled,
      hasError: $hasError,
    }),
    `c-checkbox--theme-${theme} c-h-${$contextSize} c-font-${$contextSize}`
  )}
  on:click={onClick}
  on:keypress={onClick}
>
  <svg class="c-checkbox--check-wrapper" viewBox="0 0 24 24" aria-hidden="true">
    <path
      class="c-checkbox--checker"
      fill="none"
      d="M1.73,12.91 8.1,19.28 22.79,4.59"
    />
    <!-- TODO: half checked -->
    <!-- <path d="M4,14H20V10H4"></path> -->
  </svg>
  <div class="c-checkbox--label">
    <!-- Customize some label content. Notice that this slot would override the `label` prop -->
    <slot name="label">
      {label}
    </slot>
  </div>
</div>
