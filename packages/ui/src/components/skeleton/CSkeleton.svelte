<script>
  import bem from '../../utils/bem'

  const DEFAULT_DIMENSION = '48px'

  /**
   * The shape of skeleton
   * @type {import('./type').EShape}
   */
  export let shape = 'circle'

  export let width = shape === 'circle' ? DEFAULT_DIMENSION : '100%'

  export let height = DEFAULT_DIMENSION

  export let borderRadius = shape === 'circle' ? '50%' : '5px'
</script>

<div
  class="{bem('skeleton')} c-skeleton--shape-{shape}"
  style:width
  style:height
  style:border-radius={borderRadius}
/>
