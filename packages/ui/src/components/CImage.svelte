<script>
  import { onMount } from 'svelte'
  import CLoading from './CLoading.svelte'

  /**
   * The image src
   * @type {string}
   */
  export let src

  /**
   * The default image src
   * @type
   */
  export let placeholderSrc =
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxnIGZpbGw9ImN1cnJlbnRDb2xvciI+PHBhdGggZD0iTTYuMDAyIDUuNWExLjUgMS41IDAgMSAxLTMgMGExLjUgMS41IDAgMCAxIDMgMHoiLz48cGF0aCBkPSJNMi4wMDIgMWEyIDIgMCAwIDAtMiAydjEwYTIgMiAwIDAgMCAyIDJoMTJhMiAyIDAgMCAwIDItMlYzYTIgMiAwIDAgMC0yLTJoLTEyem0xMiAxYTEgMSAwIDAgMSAxIDF2Ni41bC0zLjc3Ny0xLjk0N2EuNS41IDAgMCAwLS41NzcuMDkzbC0zLjcxIDMuNzFsLTIuNjYtMS43NzJhLjUuNSAwIDAgMC0uNjMuMDYyTDEuMDAyIDEyVjNhMSAxIDAgMCAxIDEtMWgxMnoiLz48L2c+PC9zdmc+'

  /**
   * The image width
   * @type {string}
   */
  export let width = '100%'

  /**
   * The image height
   * @type {string}
   */
  export let height = '300px'

  /**
   * The alt prop
   * @type {string}
   */
  export let alt = ''

  /**
   * The class that apply to img tag
   * @type {string}
   */
  export let imgClass = ''

  /**
   * Custom image request headers
   * @type {object}
   */
  export let customHeaders = {}

  /**
   * The last successfully loaded image src
   */
  let lastSrc = placeholderSrc
  let mounted = false

  const fetchImage = () => {
    if (!mounted) return
    return fetch(src, {
      method: 'GET',
      headers: customHeaders,
    })
      .then(r => r.blob())
      .then(blob => {
        lastSrc = URL.createObjectURL(blob)
        return lastSrc
      })
  }
  let imagePromise

  onMount(() => {
    mounted = true
    imagePromise = fetchImage()
  })

  $: {
    src
    imagePromise = fetchImage()
  }
</script>

<div
  class="c-image"
  style:width
  style:height
  style:background-image="url({lastSrc})"
>
  {#if imagePromise}
    {#await imagePromise}
      <div class="c-image--loading">
        <slot name="loading">
          <CLoading />
        </slot>
      </div>
    {:then src}
      <img {src} {alt} {width} class="{imgClass}" {...$$restProps} />
    {:catch err}
      <slot name="err" {err}>
        <div>
          {err}
        </div>
      </slot>
    {/await}
  {/if}
</div>
