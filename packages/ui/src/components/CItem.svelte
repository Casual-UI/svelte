<script>
  import { createEventDispatcher } from 'svelte'
  import useSize from '../hooks/useSize'
  import bem from '../utils/bem'

  /**
   * The label text.
   * @type {string}
   */
  export let label = ''

  /**
   * The size of item. Notice that default value is `'md'` instead of `undefined`
   * @type {'xs' | 'sm' | 'md' | 'lg' | 'xl'=}
   */
  export let size = undefined

  /**
   * Determine whether the item is clickable or not.
   * @type {boolean}
   */
  export let clickable = false

  /**
   * Determine whether the item is active or not. Which will lead to different styles.
   * @type {boolean}
   */
  export let active = false

  const dispatch = createEventDispatcher()

  $: contextSize = useSize(size)

  const onClick = () => {
    if (clickable) {
      /**
       * Emit when the item is clicked. It only take effect when the `clickable` prop is set to `true`
       */
      dispatch('click')
    }
  }
</script>

<div
  class={`${bem('item', {
    clickable,
    active,
  })} c-font-${$contextSize} c-pa-${$contextSize}`}
  on:click|stopPropagation={onClick}
  on:keypress={onClick}
  role="none"
>
  <slot>
    <span class={`c-h-${$contextSize}`}>
      {label}
    </span>
  </slot>
</div>
