<script>
  import { arrow, computePosition, flip, offset, shift } from '@floating-ui/dom'
  import { onMount } from 'svelte'
  import createClickOutsideAction from '../actions/createClickOutsideAction'

  /**
   * The content text of tooltip
   * @type {string}
   */
  export let content = ''

  /**
   * The tooltip popup position
   * @type {`${'top' | 'right' | 'bottom' | 'left'}${`-${'start' | 'end'}` | ''}`}
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

  const recomputePos = () => {
    if (!triggerDom || !contentDom || !arrowDom) return
    computePosition(triggerDom, contentDom, {
      placement: position,
      middleware: [
        offset(6),
        flip(),
        shift({ padding: 5 }),
        arrow({ element: arrowDom }),
      ],
    }).then(({ x, y, placement, middlewareData }) => {
      left = `${x}px`
      top = `${y}px`
      const { x: arrowX, y: arrowY } = middlewareData.arrow

      const staticSide = {
        top: 'bottom',
        right: 'left',
        bottom: 'top',
        left: 'right',
      }[placement.split('-')[0]]

      Object.assign(arrowDom.style, {
        left: arrowX != null ? `${arrowX}px` : '',
        top: arrowY != null ? `${arrowY}px` : '',
        right: '',
        bottom: '',
        [staticSide]: '-4px',
      })
    })
  }

  onMount(recomputePos)

  const handleTriggerMouseEnter = () => {
    if (trigger === 'hover') show = true
  }

  const handleTriggerMouseLeave = () => {
    if (trigger === 'hover') show = false
  }

  $: if (show) recomputePos()

  const clickOutside = createClickOutsideAction({
    cbInside: () => {
      if (trigger === 'click') show = !show
    },
    cbOutside: () => {
      if (trigger === 'click') show = false
    },
  })
</script>

<div class:show class="tooltip" style:--top={top} style:--left={left}>
  <div
    bind:this={triggerDom}
    class="trigger"
    on:mouseenter={handleTriggerMouseEnter}
    on:mouseleave={handleTriggerMouseLeave}
    use:clickOutside
  >
    <!-- The trigger content -->
    <slot name="trigger" />
  </div>
  <div bind:this={contentDom} class="content" role="tooltip">
    <!-- The tooltip content. Notice that this slot will override the content prop -->
    <slot>
      {content}
    </slot>
    <div bind:this={arrowDom} class="arrow" />
  </div>
</div>

<style>
  .tooltip {
    position: relative;
  }
  .trigger {
    display: inline-block;
  }
  .content {
    line-height: 1.5em;
    padding: 4px 8px;
    background-color: var(--casual-tooltip-bg);
    border-radius: 4px;
    white-space: nowrap;
    font-size: 14px;
    color: var(--casual-tooltip-color);
    display: none;
    position: absolute;
    top: var(--top);
    left: var(--left);
  }
  .show .content {
    display: block;
  }
  .arrow {
    position: absolute;
    background: var(--casual-tooltip-bg);
    width: 8px;
    height: 8px;
    transform: rotate(45deg);
  }
</style>
