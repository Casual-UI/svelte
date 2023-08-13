<script context="module">
  export const tabsKey = Symbol('tabs')
  export const activeTabNameKey = Symbol('activeTabName')
</script>

<script>
  import { setContext, tick } from 'svelte'
  import { writable } from 'svelte/store'
  import useSize from '../../hooks/useSize'
  import clsx from '../../utils/clsx'

  /**
   * The current active tab name
   * @type {string}
   */
  export let activeName = ''

  /**
   * The size of tabs. Notice that the default value is `'md'` instead of `undefined`
   * @type {'xs' | 'sm' | 'md' | 'lg' | 'xl'=}
   */
  export let size = undefined

  /**
   * Determien whether the panel body has a padding or not.
   * @type {boolean}
   */
  export let panelPadding = true

  /**
   * Customize the body style.
   * @type {string}
   */
  export let bodyStyle = ''

  const contextSize = useSize(size)

  /**
   * @type {HTMLDivElement}
   */
  let header

  let activeBarLeft = 0
  let activeBarWidth = 0

  const computeActiveBar = async () => {
    await tick()
    if (!header) return
    /**
     * @type {*}
     */
    const activeItem = header.querySelector('.c-tabs--header-item-active')
    if (!activeItem) return
    activeBarLeft = activeItem.offsetLeft
    activeBarWidth = activeItem.offsetWidth
  }

  $: {
    activeName
    computeActiveBar()
  }

  const tabs = writable([])
  const activeNameStore = writable(activeName)

  setContext(tabsKey, tabs)
  setContext(activeTabNameKey, activeNameStore)

  // listen to activeName change and sync to context store
  $: $activeNameStore = activeName

  /**
   * @param {{ name: string }} item
   */
  const onHeaderClick = async item => {
    activeName = item.name
  }
</script>

<div class="c-tabs">
  <div bind:this="{header}" class="c-tabs--header c-row c-items-center">
    {#each $tabs as tabItem}
      <div
        class="c-tabs--header-item c-h-{$contextSize} c-font-{$contextSize} c-px-{$contextSize}"
        class:c-tabs--header-item-active="{activeName === tabItem.name}"
        class:c-flex="{tabItem.icon}"
        class:c-items-center="{tabItem.icon}"
        on:click="{() => onHeaderClick(tabItem)}"
        on:keypress="{() => onHeaderClick(tabItem)}"
        role="tab"
        tabindex="0"
      >
        {#if tabItem.icon}
          <div class="c-mr-sm">
            <svelte:component this="{tabItem.icon}" />
          </div>
        {/if}
        <span>
          {tabItem.title ? tabItem.title : tabItem.name}
        </span>
      </div>
    {/each}
    <div
      class="c-tabs--header-active-bar"
      style="left: {activeBarLeft}px;width: {activeBarWidth}px;"
    ></div>
  </div>
  <div
    class="{clsx('c-tabs--body', panelPadding && `c-pa-${$contextSize}`)}"
    style="{bodyStyle}"
  >
    <!-- It is recommended to use CTabItem -->
    <slot />
  </div>
</div>
