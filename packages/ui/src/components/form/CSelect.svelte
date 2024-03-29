<script>
  import { onMount, tick } from 'svelte'

  import { useValidator } from '../../hooks/useForm'
  import useSize from '../../hooks/useSize'
  import bem from '../../utils/bem'
  import clsx from '../../utils/clsx'
  import CDropdown from '../CDropdown.svelte'
  import CList from '../CList.svelte'
  import CTag from '../CTag.svelte'
  import CInput from './CInput.svelte'

  /**
   * The placeholder text. Same as [CInput](/features/components/form/input/)
   * @type {string}
   */
  export let placeholder = ''

  /**
   * The size of select. Notice that default value is `'md'` instead of `undefined`
   * @type {'xs' | 'sm' | 'md' | 'lg' | 'xl'=}
   */
  export let size = undefined

  /**
   * The selected value(s).
   * @type {number | string | Array<string | number>}
   */
  export let value = ''

  /**
   * The select options
   * @type {{ label: string; value: string | number; [key: string]: any }[]}
   */
  export let options = []

  /**
   * Determine the select can select muliple choices
   */
  export let multiple = false

  /**
   * Determine whether the select has a clear icon when selected selection is not empty
   * @type {boolean}
   */
  export let clearable = false

  /**
   * Determine whether the select is diabled or not.
   * @type {boolean}
   */
  export let disabled = false

  /**
   * Determine whether the select has a rounded border or not.
   * @type {boolean}
   */
  export let rounded = false

  /**
   * Determine whether validate current form item on dropdown fold.
   * @type {boolean}
   */
  export let validateOnFold = true

  /**
   * @type {HTMLDivElement}
   */
  let selectDom

  /**
   * @type {HTMLDivElement}
   */
  let tagsContainer

  /**
   * @type {import('../CDropdown.svelte')}
   */
  let dropdown

  if (multiple && !Array.isArray(value)) value = []

  let inputValue = value

  let focused = false

  let selectDomHeight = -1

  let initialSelectDomHeight = -1

  $: contextSize = useSize(size)

  $: realPlaceholder = multiple
    ? value.length > 0
      ? ''
      : placeholder
    : placeholder

  $: selectDomStyle = selectDomHeight < 0 ? '' : `height:${selectDomHeight}px`

  $: selectedMultipleOptions = !multiple
    ? []
    : options.filter(op => value.includes(op.value))

  const { hasError, validateCurrent } = useValidator()

  const onSelectClick = () => {
    if (disabled) return
    if (multiple) focused = !focused
  }

  const onClear = () => {
    if (multiple) {
      value = []
      return
    }
    value = ''
  }

  const onArrowClick = () => {
    if (disabled) return
    if (!multiple) focused = !focused
  }

  /**
   *
   * @param {object} item
   * @param {string} item.label
   * @param {string | number} item.value
   */
  const onItemClick = item => {
    if (multiple && Array.isArray(value)) {
      const idx = value.findIndex((/** @type {any} */ v) => v === item.value)
      if (idx === -1) {
        value = [...value, item.value]
      } else {
        value.splice(idx, 1)
        value = value
      }
      return
    }
    value = item.value
    focused = false
    if (dropdown) dropdown.toggleManually(false)
  }

  $: isItemActive = (/** @type {{ value: any; }} */ item) => {
    if (multiple && Array.isArray(value)) return value.includes(item.value)

    return item.value === value
  }

  const recomputedSelectHeight = async () => {
    if (multiple && tagsContainer) {
      await tick()
      const newHeight = tagsContainer.clientHeight
      if (newHeight > initialSelectDomHeight) {
        selectDomHeight = newHeight
        return
      }
      selectDomHeight = initialSelectDomHeight
      return
    }
    const target = options.find(item => item.value === value)
    inputValue = target ? target.label : ''
  }

  $: {
    value
    recomputedSelectHeight()
  }

  const maybeValidate = show => {
    const oldFocused = focused
    focused = show.detail
    if (!oldFocused) return
    if (validateOnFold && validateCurrent) validateCurrent()
  }

  onMount(() => {
    initialSelectDomHeight = selectDom.clientHeight
  })
</script>

<CDropdown bind:this="{dropdown}" {disabled} on:toggle="{maybeValidate}">
  <div
    bind:this="{selectDom}"
    class="{clsx(
      bem('select', {
        disabled,
        focused,
        rounded,
        hasError: $hasError,
      }),
      rounded && `c-rounded-${$contextSize}`,
    )}"
  >
    <div
      class="c-select--input-wrapper"
      style="{selectDomStyle}"
      on:click="{onSelectClick}"
      on:keypress="{onSelectClick}"
      role="none"
    >
      {#if multiple}
        <div
          class="c-select--placeholder c-font-{$contextSize} c-h-{$contextSize} c-px-{$contextSize}"
        >
          {realPlaceholder}
        </div>
      {:else}
        <CInput
          {focused}
          value="{inputValue}"
          {disabled}
          {clearable}
          placeholder="{realPlaceholder}"
          suffixDivider="{false}"
          customColor
          validateTrigger="manual"
          autoBlur="{false}"
          readonly
          on:clear="{onClear}"
        />
      {/if}
      <div
        class="c-select--arrow c-mr-{$contextSize} c-font-{$contextSize}"
        class:c-select--arrow-show-options="{focused}"
        on:click|stopPropagation="{onArrowClick}"
        on:keypress|stopPropagation="{onArrowClick}"
        role="button"
        tabindex="0"
      >
        <div i-ph-caret-down-light class="c-icon"></div>
      </div>
      {#if multiple}
        <div
          bind:this="{tagsContainer}"
          class="c-select--multiple-tags c-px-sm"
        >
          {#each selectedMultipleOptions as { label, value }}
            <div>
              <CTag
                {label}
                size="xs"
                rounded
                closeable
                on:close="{() => onItemClick({ label, value })}"
              />
            </div>
          {/each}
        </div>
      {/if}
    </div>
  </div>

  <div slot="drop-content" class="{`c-py-${$contextSize}`}">
    <CList
      items="{options}"
      activeFn="{isItemActive}"
      clickable
      on:item-click="{e => onItemClick(e.detail)}"
    />
  </div>
</CDropdown>
