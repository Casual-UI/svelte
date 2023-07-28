<script>
  import { createEventDispatcher } from 'svelte'
  import { cubicIn } from 'svelte/easing'
  import { scale } from 'svelte/transition'

  /**
   * @type {any[]}
   */
  export let items = []

  /**
   * @type {(item: any) => boolean}
   */
  export let isActive

  /**
   * @type {(item: any) => string}
   */
  export let displayFormatter = item => item

  const dispatch = createEventDispatcher()
</script>

<div
  transition:scale="{{
    duration: 300,
    easing: cubicIn,
  }}"
  class="c-date-picker--panel"
>
  <div class="c-date-picker--panel-body c-grid c-grid-col-4 c-grid-row-3">
    {#each items as item}
      <div
        class="c-date-picker--panel-cell"
        class:c-date-picker--panel-cell--is-selected="{isActive(item)}"
        on:click|stopPropagation="{() => dispatch('item-click', item)}"
        on:keypress|stopPropagation="{() => dispatch('item-click', item)}"
        role="button"
        tabindex="0"
      >
        <div class="c-date-picker--panel-cell--inner">
          {displayFormatter(item)}
        </div>
      </div>
    {/each}
  </div>
</div>
