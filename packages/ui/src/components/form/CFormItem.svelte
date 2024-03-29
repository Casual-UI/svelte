<script>
  import { writable } from 'svelte/store'
  import { getContext, setContext } from 'svelte'
  import {
    clearCurrentKey,
    hasErrorKey,
    useFormProps,
    validateCurrentKey,
  } from '../../hooks/useForm'
  import clsx from '../../utils/clsx'
  import {
    clearSomeFieldKey,
    errorStatusKey,
    rulesKey,
    validateSomeFieldKey,
  } from './CForm.svelte'

  /**
   * The field of whole form data
   * @type {string=}
   */
  export let field = undefined

  /**
   * The label of each form item
   */
  export let label = ''

  /**
   * The label width of this form item. Notice that this prop will override the CForm's `labelWidth` prop
   * @type {string=}
   */
  export let labelWidth = undefined

  /**
   * This form item col span
   * @type {number=}
   */
  export let col = undefined

  /**
   * The label and form component arrangement direction of this form item
   * @type {'row' | 'row-reverse' | 'column' | 'column-reverse'=}
   */
  export let labelDirection = undefined

  /**
   * The label align of this form item
   * @type {'left' | 'center' | 'right'=}
   */
  export let labelAlign = undefined

  /**
   * The size of component in this form item. Notice that the default value is `'md'` instead of `undefined`
   * @type {'xs' | 'sm' | 'md' | 'lg' | 'xl'=}
   */
  export let size = undefined

  /**
   * The gutter size of this form item.
   * @type {'xs' | 'sm' | 'md' | 'lg' | 'xl'=}
   */
  export let gutterSize = undefined

  /**
   * Determine current form item has error or not.
   * If has any error, the value is the error message.
   * @type {import('svelte/types/runtime/store').Writable<string | false>}
   */
  const hasError = writable(false)

  /**
   * @type {(f: string) => Promise<void>=}
   */
  const validateSomeField = getContext(validateSomeFieldKey)

  /**
   * @type {(f: string) => void=}
   */
  const clearSomeField = getContext(clearSomeFieldKey)

  const validateCurrent = () =>
    validateSomeField && field && validateSomeField(field)

  const clearCurrent = () => clearSomeField && field && clearSomeField(field)

  const allRules = getContext(rulesKey)
  const currentRules = allRules[field]

  setContext(validateCurrentKey, validateCurrent)
  setContext(hasErrorKey, hasError)
  setContext(clearCurrentKey, clearCurrent)

  const getLabelMarginPosition = direction =>
    new Map([
      ['row', 'r'],
      ['row-reverse', 'l'],
      ['column', 'b'],
      ['column-reverse', 't'],
    ]).get(direction)

  /**
   * @type {import('svelte/types/runtime/store').Writable<Record<string, false | string>>}
   */
  const errorStatus = getContext(errorStatusKey)
  if (errorStatus) {
    errorStatus.subscribe(err => {
      if (field) $hasError = err[field]
    })
  }

  const {
    contextSize,
    contextCol,
    contextLabelAlign,
    contextLabelWidth,
    contextLabelDirection,
    contextGutterSize,
  } = useFormProps({
    size,
    gutterSize,
    labelAlign,
    labelDirection,
    labelWidth,
    col,
  })

  $: isLabelVertical =
    $contextLabelDirection === 'column' ||
    $contextLabelDirection === 'column-reverse'

  /**
   * @param {*} node
   * @param {*} params
   */
  const errorTip = () => ({
    duration: 300,
  })

  /**
   * @param {*} e
   */
  const onInStart = e => {
    e.target.classList.add('c-form-item--error-tip-enter-active')
  }

  /**
   * @param {*} e
   */
  const onInEnd = e => {
    e.target.classList.remove('c-form-item--error-tip-enter-active')
  }

  /**
   * @param {*} e
   */
  const onOutStart = e => {
    e.target.classList.add('c-form-item--error-tip-leave-active')
    e.target.classList.add('c-form-item--error-tip--hidden')
  }

  /**
   * @param {*} e
   */
  const onOutEnd = e => {
    e.target.classList.remove('c-form-item--error-tip-leave-active')
  }
</script>

<div
  class="{clsx(
    'c-form-item',
    `c-col-${$contextCol}`,
    `c-${$contextLabelDirection}`,
    isLabelVertical ? 'c-items-start' : 'c-items-center',
    $hasError && 'c-form-item--has-error',
    currentRules && 'c-form-item--maybe-error',
  )}"
>
  <div
    class="{clsx(
      'c-form-item--label',
      `c-font-${$contextSize}`,
      `c-m${getLabelMarginPosition(
        $contextLabelDirection,
      )}-${$contextGutterSize}`,
      `c-text-${$contextLabelAlign}`,
    )}"
    style="{`width: ${$contextLabelWidth}`}"
  >
    {label}
  </div>
  <div class="c-form-item--content-wrapper c-flex c-items-center">
    <!--
      The content of this form item. You can use built-in form components like CInput
     -->
    <slot />

    {#if $hasError}
      <div
        class="c-form-item--error-tip"
        transition:errorTip
        on:introstart="{onInStart}"
        on:introend="{onInEnd}"
        on:outrostart="{onOutStart}"
        on:outroend="{onOutEnd}"
      >
        {$hasError}
      </div>
    {/if}
  </div>
</div>
