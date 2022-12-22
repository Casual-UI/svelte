<script lang="ts">
  import { attributeAtom } from './utils/attributeAtom'
  import { goto } from '$app/navigation'
  import { page } from '$app/stores'

  export let label = ''
  export let to = '/'
  export let external = false
  export let hideExternalIcon = false
  export let customClass = ''
  export let exact = false
  /**
   * Whether compare `$page` with `to` prop
   */
  export let computeActiveByPageUrl = true

  const onClick = () => {
    if (external) {
      window.open(to, '_blank')
      return
    }
    goto(to)
  }
</script>

<div
  cursor-pointer
  inline-flex
  items-center
  hover="opacity-60"
  {...attributeAtom({
    'text-primary': computeActiveByPageUrl && (exact ? to === $page.route.id : $page.url.href.includes(to)),
    'dark:text-dark-primary':
      computeActiveByPageUrl && $page.url.href.includes(to),
  })}
  {...attributeAtom($$restProps)}
  on:click={onClick}
  class={customClass}
>
  <div flex items-center>
    <slot>{label}</slot>
  </div>
  {#if external && !hideExternalIcon}
    <div i-eva-external-link-outline />
  {/if}
</div>
