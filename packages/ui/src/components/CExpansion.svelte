<script>
  import { createEventDispatcher, onMount, tick } from 'svelte'
  import { slide } from 'svelte/transition'
  import { cubicInOut } from 'svelte/easing'
  import bem from '../utils/bem'
  import clsx from '../utils/clsx'

  /**
   * The title of the expansion
   * @type {string}
   */
  export let title = ''

  /**
   * Determine whether the expansion is expanded or not. It is recomended to use `bind:expanded`
   * @type {boolean}
   */
  export let expanded = false

  /**
   * Determine the expand direction, `false` means down, `true` means up
   * @type {boolean}
   */
  export let reverse = false

  /**
   * Custom header style
   * @type {string}
   */
  export let headerStyle = ''

  /**
   * Determine whether to show the expanded status arrow on the right.
   */
  export let showArrow = true

  /**
   * The panel body dom
   * @type {HTMLDivElement}
   */
  let bodyDom

  const dispatch = createEventDispatcher()

  function onHeaderClick() {
    expanded = !expanded
  }

  function onTransitionEnd() {
    /**
     * Dispatch when the toggle transition end
     */
    dispatch('toggled')
  }

  onMount(() => {
    tick().then(() => {
      /**
       * Emit when the initial height compute is done
       */
      dispatch('ready')
    })
  })

  const resetHeight = () => {}
</script>

<div
  class={bem('expansion', {
    expanded,
  })}
>
  {#if reverse && expanded}
    <div
      transition:slide={{
        duration: 300,
        easing: cubicInOut,
      }}
      on:introend={onTransitionEnd}
      on:outroend={onTransitionEnd}
      bind:this={bodyDom}
      class="c-expansion--body"
    >
      <!--  
        Expansion body content 
        @param {() => void} recomputedHeight The method to recomputed the body height.
      -->
      <slot recomputedHeight={resetHeight} />
    </div>
  {/if}
  <!-- The header click function, emit the expand status exchange -->
  <div
    class="c-expansion--header"
    style={headerStyle}
    on:click|stopPropagation={onHeaderClick}
    on:keypress={onHeaderClick}
    role="button"
    tabindex="0"
  >
    {#if $$slots.icon}
      <div class="c-expansion--icon">
        <!-- The content before title -->
        <slot name="icon" />
      </div>
    {/if}
    <div class="c-expansion--title">
      <!-- Customize the title content -->
      <slot name="title" {expanded}>
        {title}
      </slot>
    </div>
    <div
      class={clsx(
        'c-expansion--arrow',
        expanded && 'c-expansion--arrow-expanded'
      )}
    >
      {#if showArrow}
        <!-- Customize the arrow dom -->
        <slot name="arrow">
          <div i-ph-caret-down-light />
        </slot>
      {/if}
    </div>
  </div>
  {#if !reverse && expanded}
    <div
      transition:slide
      on:introend={onTransitionEnd}
      on:outroend={onTransitionEnd}
      bind:this={bodyDom}
      class="c-expansion--body"
    >
      <!--  
        Expansion body content 
        @param {() => void} recomputedHeight The method to recomputed the body height.
      -->
      <slot recomputedHeight={resetHeight} />
    </div>
  {/if}
</div>
