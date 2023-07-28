<script>
  import { onMount } from 'svelte'
  import { recomputePos } from '@casual-ui/utils'
  import createClickOutsideAction from '../actions/createClickOutsideAction'

  /**
   * The content text of tooltip
   * @type {string}
   */
  export let content = ''

  /**
   * The tooltip popup position
   * @type {import ('@casual-ui/types').CTooltipPosition}
   */
  export let position = 'top'

  /**
   * The trigger method
   * @type {'hover' | 'click' | 'manual'}
   */
  export let trigger = 'hover'

  /**
   * Determine the tooltip content is shown or not. Usful when the trigger method is set to 'manual'
   * @type {boolean}
   */
  export let show = false

  let triggerDom
  let contentDom
  let arrowDom

  let top = 0
  let left = 0

  const doCompute = () => {
    recomputePos({
      triggerDom,
      contentDom,
      arrowDom,
      placement: position,
    }).then(pos => {
      top = pos.top
      left = pos.left
    })
  }

  onMount(doCompute)

  const handleTriggerMouseEnter = () => {
    if (trigger === 'hover') show = true
  }

  const handleTriggerMouseLeave = () => {
    if (trigger === 'hover') show = false
  }

  $: if (show) doCompute()

  const clickOutside = createClickOutsideAction({
    cbInside: () => {
      if (trigger === 'click') show = !show
    },
    cbOutside: () => {
      if (trigger === 'click') show = false
    },
  })
</script>

<div
  class:c-tooltip--show="{show}"
  class="c-tooltip"
  style:--c-tooltip-top="{top}"
  style:--c-tooltip-left="{left}"
>
  <div
    bind:this="{triggerDom}"
    class="c-tooltip--trigger"
    on:mouseenter="{handleTriggerMouseEnter}"
    on:mouseleave="{handleTriggerMouseLeave}"
    use:clickOutside
    role="tooltip"
  >
    <!-- The trigger content -->
    <slot name="trigger" />
  </div>
  <div bind:this="{contentDom}" class="c-tooltip--content" role="tooltip">
    <!-- The tooltip content. Notice that this slot will override the content prop -->
    <slot>
      {content}
    </slot>
    <div bind:this="{arrowDom}" class="c-tooltip--arrow"></div>
  </div>
</div>
