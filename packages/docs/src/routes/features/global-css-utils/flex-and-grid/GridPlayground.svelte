<script lang="ts">
  import { CRadioGroup } from '@casual-ui/svelte'
  import { flip } from 'svelte/animate'
  import { crossfade } from 'svelte/transition'
  import { cubicInOut } from 'svelte/easing'

  const mapOptions = (options: any[]) =>
    options.map(label => ({
      label,
      value: label,
    }))

  const cols = [1, 2, 3, 4]
  const rows = [1, 2, 3, 4]
  const gaps = ['xs', 'sm', 'md', 'lg', 'xl']

  const itemNumArray = [2, 3, 4, 5, 6, 7, 8]

  let gap = 'md'
  let col = 2
  let row = 2
  let itemNum = 3

  const items = Array(16)
    .fill(0)
    .map((_, i) => `${Math.floor(i / 4)}-${i % 4}`)

  $: activeItems = items.slice(
    (col - 1) * (row - 1),
    (col - 1) * (row - 1) + itemNum
  )

  const [send, receive] = crossfade({
    fallback(node) {
      const style = getComputedStyle(node)
      const transform = style.transform === 'none' ? '' : style.transform

      return {
        duration: 300,
        easing: cubicInOut,
        css: t => `
          transform: ${transform};
          opacity: ${t};
        `,
      }
    },
  })
</script>

<div>
  <div class="font-700 leading-8">Grid columns:</div>
  <CRadioGroup options={mapOptions(cols)} bind:value={col} />

  <div class="font-700 leading-8">Grid rows:</div>
  <CRadioGroup options={mapOptions(rows)} bind:value={row} />

  <div class="font-700 leading-8">Grid gap:</div>
  <CRadioGroup options={mapOptions(gaps)} bind:value={gap} />

  <div class="font-700 leading-8">Item number:</div>
  <CRadioGroup options={mapOptions(itemNumArray)} bind:value={itemNum} />

  <div
    class={`c-grid c-grid-col-${col} c-grid-row-${row} c-grid-gap-${gap} c-pa-${gap}`}
  >
    {#each activeItems as item, i (item)}
      <div
        animate:flip={{
          duration: 500,
        }}
        class={`item c-col-${col}`}
        in:receive={{
          key: item,
        }}
        out:send={{
          key: item,
        }}
      >
        {i + 1}
      </div>
    {/each}
  </div>
</div>

<style>
  .item {
    --at-apply: 'bg-svp-primary h-[60px] text-white text-center flex items-center justify-center bg-clip-content transition-all transition-300';
  }
  .c-grid {
    --at-apply: 'b-1 b-svp-primary b-solid';
  }
</style>
