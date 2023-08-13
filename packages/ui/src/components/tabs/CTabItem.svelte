<script>
  import { getContext } from 'svelte'
  import { activeTabNameKey, tabsKey } from './CTabs.svelte'

  /**
   * The unique name of tab item
   * @type {string}
   */
  export let name

  /**
   * The tab title. Would use name prop if not provided
   * @type {string}
   */
  export let title = undefined

  /**
   * The custom icon component
   * @type {import('svelte').SvelteComponent}
   */
  export let icon = undefined

  const tabs = getContext(tabsKey)
  const activeName = getContext(activeTabNameKey)

  if (!$tabs.some(t => t.name === name)) {
    $tabs.push({
      name,
      title,
      icon,
    })
    $tabs = $tabs
  }
</script>

{#if $activeName === name}
  <slot />
{/if}
