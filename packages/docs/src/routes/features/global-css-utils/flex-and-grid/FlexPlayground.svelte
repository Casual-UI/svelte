<script>
  import { CRadioGroup } from '@casual-ui/svelte'

  const mapOptions = options =>
    options.map(label => ({
      label,
      value: label,
    }))

  const flexDirections = [
    'flex',
    'row',
    'row-reverse',
    'column',
    'column-reverse',
  ]
  const justifies = ['start', 'center', 'end', 'between', 'evenly', 'around']
  const aligns = ['start', 'center', 'end', 'stretch', 'baseline']
  const cols = [4, 6, 12]
  const gutters = ['xs', 'sm', 'md', 'lg', 'xl']

  let direction = 'flex'
  let justify = 'start'
  let align = 'start'
  let col = 6
  let gutter = 'md'

  $: finalClasses = `c-wrap c-gutter-${gutter} c-${direction} c-justify-${justify} c-items-${align}`
</script>

<div>
  <div class="font-700 leading-8">Flex direction:</div>
  <CRadioGroup
    options="{mapOptions(flexDirections)}"
    bind:value="{direction}"
  />

  <div class="font-700 leading-8">Justify content:</div>
  <CRadioGroup options="{mapOptions(justifies)}" bind:value="{justify}" />

  <div class="font-700 leading-8">Align items:</div>
  <CRadioGroup options="{mapOptions(aligns)}" bind:value="{align}" />

  <div class="font-700 leading-8">Cols:</div>
  <CRadioGroup options="{mapOptions(cols)}" bind:value="{col}" />

  <div class="font-700 leading-8">Gutters:</div>
  <CRadioGroup options="{mapOptions(gutters)}" bind:value="{gutter}" />

  <div class="{`${finalClasses} c-row`}">
    <div class="item c-col-{col} h-15">1</div>
    <div class="item c-col-{col} h-30">2</div>
    <div class="item c-col-{col} h-23">3</div>
  </div>
</div>

<style>
  .item {
    --at-apply: 'bg-svp-primary text-white text-center flex items-center justify-center bg-clip-content';
  }
</style>
