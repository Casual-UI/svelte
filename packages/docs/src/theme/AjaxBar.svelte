<script lang="ts">
  import { onDestroy } from 'svelte'

  let barWidth = 0

  let startedFlag: ReturnType<typeof setInterval>

  onDestroy(() => {
    if (startedFlag)
      clearInterval(startedFlag)
  })

  export const start = () => {
    barWidth = 0
    startedFlag = setInterval(() => {
      barWidth += 2
    }, 100)
  }

  export const end = () => {
    barWidth = 100
    if (startedFlag)
      clearInterval(startedFlag)
    setTimeout(() => {
      barWidth = 0
    }, 100)
  }
</script>

<div class="ajax-bar">
  <div 
    class="progress bg-primary transition-width-100" 
    style={`--cui-ajax-bar-width: ${barWidth}%;`}
  >
  </div>
</div>

<style>
  .ajax-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    z-index: 9999999;
  }
  .progress {
    height: 100%;
    width: var(--cui-ajax-bar-width);
  }
</style>