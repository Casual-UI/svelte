<script lang="ts">
  import CButton from '@casual-ui/svelte/dist/standalone/components/CButton.svelte'
  import { cubicInOut } from 'svelte/easing'
  import { slide } from 'svelte/transition'
  import { attributeAtom } from './utils/attributeAtom'

  export let code = ''

  let copyDone = false

  function onCopy() {
    navigator.clipboard.writeText(code)
    copyDone = true
    setTimeout(() => {
      copyDone = false
    }, 3000)
  }
</script>

<div relative {...attributeAtom($$restProps)}>
  <slot />
  <div absolute top-2 right-2>
    {#if copyDone}
      <div transition:slide={{ duration: 300, easing: cubicInOut }}>
        <CButton
          theme="secondary"
          icon
          style="font-size: 14px;"
          on:click={onCopy}
          outlined
        >
          <div i-material-symbols-done />
        </CButton>
      </div>
    {:else}
      <div transition:slide={{ duration: 300, easing: cubicInOut }}>
        <CButton icon style="font-size: 14px;" on:click={onCopy} outlined>
          <div i-material-symbols-content-copy />
        </CButton>
      </div>
    {/if}
  </div>
</div>
