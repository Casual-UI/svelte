<script lang="ts">
  
  import { slide } from 'svelte/transition'
  import { dark } from './theme'
  import { browser } from '$app/environment'

  const setDark = () => {
    document.documentElement.classList.add('dark')
  }

  if (browser) {
    const storeValue = window.localStorage.getItem(
      'CASUAL_SVELTE_DOC_DARK_MODE'
    ) as any
    if (storeValue)
      $dark = storeValue
  
    if (storeValue === 'on')
      setDark()
  }

  const toggle = () => {
    $dark = $dark === 'off' ? 'on' : 'off'
    if ($dark === 'on')
      setDark()
  
  
    else
      document.documentElement.classList.remove('dark')
  
    window.localStorage.setItem('CASUAL_SVELTE_DOC_DARK_MODE', $dark)
  }
</script>

<div text-6 cursor-pointer on:click={toggle} on:keypress={toggle} mx-2>
  {#if $dark === 'on'}
    <div transition:slide i-icon-park-solid-dark-mode />
  {:else}
    <div transition:slide i-line-md-sun-rising-loop />
  {/if}
</div>
