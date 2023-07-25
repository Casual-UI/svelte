<script>
  import { onMount } from 'svelte'
  import bem from '../utils/bem'

  /**
   * The background image
   * @type {string}
   */
  export let src

  /**
   * The height of container.
   * @type {string}
   */
  export let height = '400px'

  /**
   * The background scroll speed. Value between 0 and 1
   * @type {number}
   */
  export let speed = 1

  /**
   * @type {HTMLDivElement}
   */
  let container

  /**
   * @type {HTMLDivElement}
   */
  let imageContainer

  let top = '0'

  const classPrefix = bem('parallax')

  onMount(() => {
    if (!container || !imageContainer) return
    let isIntersecting = false
    const observer = new IntersectionObserver(
      entires => {
        const [target] = entires
        isIntersecting = target.isIntersecting
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: [0, 1],
      }
    )

    observer.observe(container)

    const scrollHandler = () => {
      if (!isIntersecting) return
      const imageHeight = imageContainer.offsetHeight
      const containerHeight = container.offsetHeight
      const total = imageHeight - containerHeight
      const next = (speed * document.documentElement.scrollTop) / total
      top = `-${next > 1 ? total : next * total}px`
    }

    window.addEventListener('scroll', scrollHandler)

    return () => {
      window.removeEventListener('scroll', scrollHandler)
      observer.unobserve(container)
      observer.disconnect()
    }
  })
</script>

<div
  class={classPrefix}
  style:height
  bind:this={container}
  style:--c-parallax-top={top}
>
  <div bind:this={imageContainer} class={`${classPrefix}--image`}>
    <!-- Customize the bg content -->
    <slot name="bg">
      <img {src} alt="" />
    </slot>
  </div>
  <div class={`${classPrefix}--front`}>
    <slot />
  </div>
</div>
