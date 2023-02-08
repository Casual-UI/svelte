<script>
  import { onDestroy } from 'svelte'
  import useTheme from '../hooks/useTheme'
  import bem from '../utils/bem'
  import clsx from '../utils/clsx'

  /**
   * The theme of ajax bar. Determine the color.
   * @type {import('@casual-ui/types').CTheme}
   */
  export let theme = undefined

  $: injectedTheme = useTheme(theme)

  let barWidth = 0

  let startedFlag

  onDestroy(() => {
    if (startedFlag) clearInterval(startedFlag)
  })

  /**
   * Start the ajax bar
   */
  export const start = () => {
    barWidth = 0
    if (startedFlag) clearInterval(startedFlag)

    startedFlag = setInterval(() => {
      barWidth += 1
    }, 200)
  }

  /**
   * End the ajax bar
   */
  export const end = () => {
    if (barWidth > 0) barWidth = 100

    if (startedFlag) clearInterval(startedFlag)

    setTimeout(() => {
      barWidth = 0
    }, 100)
  }
</script>

<div
  class={clsx(bem('ajax-bar'), `c-ajax-bar--theme-${$injectedTheme}`)}
  style={`--casual-ajax-bar-width: ${barWidth}%;`}
>
  <div class="c-ajax-bar--progress" />
</div>
