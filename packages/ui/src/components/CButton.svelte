<script>
  import { createEventDispatcher } from 'svelte'
  import bem from '../utils/bem'
  import { attributeAtom } from '../utils/attributeAtom'
  import clsx from '../utils/clsx'
  import useSize from '../hooks/useSize'
  import useTheme from '../hooks/useTheme'
  import CLoading from './CLoading.svelte'

  /**
   * The text of the button. You can also use the default slot to cover this prop
   * @type {string}
   */
  export let label = ''
  /**
   * Determine button use outlined style or not.
   * @type {boolean}
   */
  export let outlined = false

  /**
   * Determine whether the button has flat style or not.
   * @type {boolean}
   */
  export let flat = false

  /**
   * Determine the button has a rounded border or not.
   * @type {boolean}
   */
  export let rounded = false

  /**
   * Determine the button is disalbed or not.
   * @type {boolean}
   */
  export let disabled = false

  /**
   * The size of the button.
   * @type {'xs' | 'sm' | 'md' | 'lg' | 'xl'=}
   */
  export let size = undefined

  /**
   * Determine the button has a half circle round border or not.
   * @type {boolean}
   */
  export let round = false

  /**
   * Determine the button take up full width or not.
   * @type {boolean}
   */
  export let block = false

  /**
   * Determine the button is in loading state or not.
   * @type {boolean}
   */
  export let loading = false

  /**
   * Determine the button show as a icon button, a full circle style.
   * @type {boolean}
   */
  export let icon = false

  /**
   * The color theme of the button.
   * @type {'primary' | 'secondary' | 'warning' | 'negative'}
   */
  export let theme = undefined

  $: realTheme = useTheme(theme)

  /**
   * Custom style of the button.
   * @type {string}
   */
  export let style = ''

  $: realSize = useSize(size)

  const dispatch = createEventDispatcher()

  const handleClick = () => {
    if (!disabled && !loading) {
      /**
       * Emit when button is clicked. Notice that loading and disabled button won't trigger this event.
       */
      dispatch('click')
    }
  }
</script>

<!-- The click event -->
<button
  class="{bem('button', {
    round,
    outlined,
    disabled,
    loading,
    block,
    icon,
    flat,
  })} {clsx(
    `c-button--theme-${$realTheme}`,
    rounded && `c-rounded-${$realSize}`,
    `c-font-${$realSize}`,
    `c-h-${$realSize}`,
    `c-px-${$realSize}`,
    `c-button--size-${$realSize}`,
  )}"
  {disabled}
  {...attributeAtom($$restProps)}
  {style}
  on:click="{handleClick}"
>
  <div class="c-button--focus-helper"></div>
  <div class="c-button--content-wrapper">
    <!-- The internal content of the button. This slot can override `label` prop -->
    <slot>
      {label}
    </slot>
    {#if loading}
      <span>&nbsp;</span>
      <!-- Customize the loading content. Used when you don't want to use the default loading style -->
      <slot name="loading">
        <CLoading />
      </slot>
    {/if}
  </div>
</button>
