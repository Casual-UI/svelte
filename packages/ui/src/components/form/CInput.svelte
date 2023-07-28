<script>
  import { createEventDispatcher } from 'svelte'
  import { useValidator } from '../../hooks/useForm'
  import useSize from '../../hooks/useSize'
  import bem from '../../utils/bem'
  import clsx from '../../utils/clsx'
  import CLoading from '../CLoading.svelte'

  const dispatch = createEventDispatcher()

  /**
   * The input value. It is recommended to use `bind:value`.
   * @type {string | number}
   */
  export let value = ''

  /**
   * Determine the input disabled status.
   * @type {boolean}
   */
  export let disabled = false

  /**
   * The size of input. Notice that the default value is `md` not `undefined`.
   * @type {'xs' | 'sm' | 'md' | 'lg' | 'xl'=}
   */
  export let size = undefined

  /**
   * The placeholder of input dom.
   * @type {string=}
   */
  export let placeholder = ''

  /**
   * Determine whether the input has a rounded border or not.
   * :::tip[TIP]
   * Notice that rounded border size will be along with input `size` prop.
   * :::
   * @type {boolean}
   */
  export let rounded = false

  /**
   * Determien whether the input is in loading status or not.
   */
  export let loading = false

  /**
   * Determine the input has a clear icon which can be clicked to clear the input value.
   * @type {boolean}
   */
  export let clearable = false

  /**
   * Determine whether the input is readonly or not.
   */
  export let readonly = false

  /**
   * Determine whether the input has a divider between prefix content and value or not.
   * @type {boolean}
   */
  export let prefixDivider = true

  /**
   * Determine whether the input has a divider between suffix content and value or not.
   * @type {boolean}
   */
  export let suffixDivider = true

  /**
   * Determine whethter the input is focused or not. It is recommended to use `bind:focus`
   * * @type {boolean}
   */
  export let focused = false

  /**
   * Dose input auto blur.
   * @type {boolean}
   */
  export let autoBlur = true

  /**
   * The type of input.
   * @type {'text' | 'password'}
   */
  export let type = 'text'

  /**
   * If set to `true`. The input will not change its' border, background, text color when focused , hover or blur. <br /> It is useful when you want to customize the input color style.
   * @type {boolean}
   */
  export let customColor = false

  /**
   * The validate timing of input. It is only used when CInput is used in CForm and CFormItem context.
   * @type {'change' | 'blur' | 'focus' | 'manual'}
   */
  export let validateTrigger = 'blur'

  /**
   * Determine whether the input would clear validate status when focused or not.
   * @type {boolean}
   */
  export let clearValidateOnFocus = true

  const { hasError, clearCurrent, validateCurrent } = useValidator()

  const contextSize = useSize(size)

  /**
   * @type {HTMLInputElement}
   */
  let inputDom

  const focusInput = () => {
    inputDom && inputDom.focus()
  }

  const onFocus = () => {
    if (clearValidateOnFocus) clearCurrent && clearCurrent()

    focused = true
  }

  const onBlur = () => {
    if (autoBlur) focused = false

    if (validateTrigger === 'blur') validateCurrent && validateCurrent()
  }

  const onClearIconClick = () => {
    value = ''
    /**
     * Clear icon click emit.
     */
    dispatch('clear')
  }
</script>

<div
  class="{clsx(
    bem('input', {
      customColor,
      focused,
      disabled,
      readonly,
      loading,
      hasError: $hasError,
    }),
    `c-font-${$contextSize}`,
    rounded && `c-rounded-${$contextSize}`,
    `c-h-${$contextSize}`,
    `c-px-${$contextSize}`,
  )}"
>
  <div class="c-input--content-wrapper">
    <div
      class="c-input--prefix"
      class:c-input--prefix-with-divider="{prefixDivider}"
      class:c-pr-sm="{$$slots.prefix}"
      class:c-input--prefix-with-content="{$$slots.prefix}"
      on:click="{focusInput}"
      on:keypress="{focusInput}"
      role="none"
    >
      <!-- Customize prefix content -->
      <slot name="prefix" />
    </div>
    <div class="c-input--input-wrapper">
      {#if type === 'text'}
        <input
          bind:this="{inputDom}"
          bind:value
          type="text"
          class:c-pl-sm="{$$slots.prefix}"
          class:c-pr-sm="{$$slots.suffix}"
          {placeholder}
          {disabled}
          readonly="{readonly || loading}"
          on:focus="{onFocus}"
          on:blur="{onBlur}"
        />
      {/if}
    </div>
    {#if clearable}
      <div
        class="c-input--clear-icon"
        class:c-input--clear-icon-show="{value}"
        class:c-mr-sm="{$$slots.suffix || loading}"
        on:click|stopPropagation="{onClearIconClick}"
        on:keypress="{onClearIconClick}"
        role="button"
        tabindex="0"
      >
        <div i-mdi-close-circle-outline></div>
      </div>
    {/if}

    <div
      class="c-input--suffix"
      class:c-input--suffix-with-divider="{suffixDivider}"
      class:c-pl-sm="{$$slots.suffix}"
      class:c-input--suffix-with-content="{$$slots.suffix}"
      on:click="{focusInput}"
      on:keypress="{focusInput}"
      role="none"
    >
      <div class:c-mr-sm="{loading}">
        <!-- Customize suffix content -->
        <slot name="suffix" />
      </div>
      <!-- Customize loading content -->
      <slot name="loading">
        {#if loading}
          <CLoading />
        {/if}
      </slot>
    </div>
  </div>
</div>
