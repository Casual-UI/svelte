<script>
  import dayjs from 'dayjs'
  import { getContext } from 'svelte'
  import clickOutside from '../../../actions/clickOutside'
  import { validateCurrentKey } from '../../../hooks/useForm'
  import useSize from '../../../hooks/useSize'
  import CDropdown from '../../CDropdown.svelte'
  import CInput from '../CInput.svelte'
  import CDatePanel from './CDatePanel.svelte'
  import CDatePickerHeader from './CDatePickerHeader.svelte'
  import CMonthPanel from './CMonthPanel.svelte'
  import CYearPanel from './CYearPanel.svelte'

  /**
   * The select unit.
   * @type {'year' | 'month' | 'day'}
   */
  export let unit = 'day'

  /**
   * The selected date value. It is recommended to use `bind:value`.
   * @type {Date | null}
   */
  export let value = null

  /**
   * The formatted display value. It is recommended to use `bind:formattedValue`.
   * @type {string}
   */
  export let formattedValue = ''

  /**
   * The date range value. This prop is used when in range select mode.  It is recommended to use `bind:rangeValue`.
   * @type {[Date | null, Date | null]}
   */
  export let rangeValue = [null, null]

  /**
   * The formatted range value. It is recommended to use `bind:formattedRangeValue`.
   * @type {[string, string]}
   */
  export let formattedRangeValue = ['', '']

  /**
   * The display format. For more information visit [Dayjs](https://day.js.org/docs/en/display/format#list-of-all-available-formats)
   */
  export let format = 'YYYY-MM-DD'

  /**
   * Custom formatter function.
   * @type {(d: Date | null, format: string) => string=}
   */
  export let formatter = undefined

  /**
   * The size of date picker. Notice that the default is `'md'` instead of `undefined`
   * @type {'xs' | 'sm' | 'md' | 'lg' | 'xl'=}
   */
  export let size = undefined

  /**
   * The placeholder. Same as [CInput](/features/components/form/input/)
   * @type {string}
   */
  export let placeholder = ''

  /**
   * Determine whether the date picker is disabled or not.
   * @type {boolean}
   */
  export let disabled = false

  /**
   * Determine use a date range selector or not.
   * @type {boolean}
   */
  export let range = false

  /**
   * Hide the dropdown when date is selected.
   * @type {boolean}
   */
  export let hideOnSelect = true

  /**
   * Determine whether do current form item validation on click outside or not.
   * @type {boolean}
   */
  export let validateOnClickOutside = true

  const initialUnit = unit

  /**
   * Get the real formatter. If has `formattor` prop
   * @param {Date | null} d
   */
  const innerFormatter = d => {
    if (!d) return ''
    return formatter ? formatter(d, format) : dayjs(d).format(format)
  }

  const recomputeFormattedValue = () => {
    formattedValue = innerFormatter(value)
  }

  const recomputeFormattedRangeValue = () => {
    const [start, end] = rangeValue
    formattedRangeValue = [innerFormatter(start), innerFormatter(end)]
  }

  $: {
    value
    recomputeFormattedValue()
  }

  $: {
    rangeValue
    recomputeFormattedRangeValue()
  }

  let show = false

  $: displayValue = (() => {
    if (range) {
      const [start, end] = formattedRangeValue

      if (!start && !end) displayValue = ''
      return `${start} - ${end}`
    }
    return formattedValue
  })()

  let year = value ? value.getFullYear() : new Date().getFullYear()
  let month = value ? value.getMonth() : new Date().getMonth()

  /**
   * @type {[number, number]}
   */
  let yearRange = [year, year + 11]

  const onDateSet = () => {
    if (hideOnSelect) show = false
  }

  const contextSize = useSize(size)

  const onClear = () => {
    value = null
    rangeValue = [null, null]
  }

  /**
   * @param {Date} newDate
   */
  const onMonthChange = newDate => {
    month = newDate.getMonth()
    if (initialUnit === 'day') unit = 'day'
    else onDateSet()
  }

  /**
   * @param {Date} newDate
   */
  const onYearChange = newDate => {
    year = newDate.getFullYear()
    if (initialUnit === 'year') onDateSet()
    else unit = 'month'
  }

  const validateCurrent = getContext(validateCurrentKey)

  /**
   * @type {import('../../../actions/clickOutside').ClickOutsideParams}
   */
  const clickOutsideParams = {
    cbInside: () => {
      if (disabled) return
      show = true
    },
    cbOutside: async () => {
      if (disabled || show === false) return
      if (validateOnClickOutside && validateCurrent) validateCurrent()
      show = false
    },
  }
</script>

<div
  class="c-date-picker c-font-{$contextSize} c-date-picker--size-{$contextSize}"
  class:c-date-picker--disabled="{disabled}"
  use:clickOutside="{clickOutsideParams}"
>
  <CDropdown bind:show widthWithinParent="{false}" {disabled} manual>
    <CInput
      value="{displayValue}"
      {disabled}
      readonly
      {placeholder}
      clearable
      validateTrigger="manual"
      suffixDivider="{false}"
      on:clear="{onClear}"
    >
      <div slot="suffix" i-mdi-calendar-edit></div>
    </CInput>
    <svelte:fragment slot="drop-content">
      <CDatePickerHeader
        bind:year
        bind:month
        bind:yearRange
        bind:unit
        unitSwitchable="{!range}"
        on:unit-change="{e => (unit = e.detail)}"
      />
      <div
        class="c-date-picker--panel-wrapper c-px-{$contextSize} c-pb-{$contextSize}"
      >
        {#if unit === 'day'}
          <CDatePanel
            bind:value
            bind:rangeValue
            {formattedRangeValue}
            {range}
            {year}
            {month}
            formatter="{innerFormatter}"
            on:date-set="{onDateSet}"
          />
        {:else if unit === 'month'}
          <CMonthPanel
            bind:value
            {year}
            on:month-change="{e => onMonthChange(e.detail)}"
          />
        {:else}
          <CYearPanel
            bind:value
            {yearRange}
            on:year-change="{e => onYearChange(e.detail)}"
          />
        {/if}
      </div>
    </svelte:fragment>
  </CDropdown>
</div>
