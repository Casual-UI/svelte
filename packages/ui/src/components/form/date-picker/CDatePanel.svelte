<script>
  import messages from '@casual-ui/i18n'
  import { createEventDispatcher } from 'svelte'
  import { cubicIn } from 'svelte/easing'
  import { scale } from 'svelte/transition'

  /**
   * @type {number}
   */
  export let year

  /**
   * @type {number}
   */
  export let month

  /**
   * @type {Date | null}
   */
  export let value

  /**
   * @type {[Date | null, Date | null]}
   */
  export let rangeValue = [null, null]

  /**
   * @type {[string, string]}
   */
  export let formattedRangeValue = ['', '']

  /**
   * @type {(d: Date | null) => string}
   */
  export let formatter

  /**
   * @type {boolean}
   */
  export let range

  const dispatch = createEventDispatcher()

  /**
   * @param {Date | null} d1
   * @param {Date | null} d2
   */
  const isSameDate = (d1, d2) => {
    return formatter(d1) === formatter(d2)
  }

  const getCurrentYearMonth = () => {
    const d = new Date()
    d.setDate(1)
    d.setFullYear(year)
    d.setMonth(month)
    return d
  }

  /**
   * @param date {number}
   */
  const setDate = date => {
    const d = getCurrentYearMonth()
    d.setDate(date)
    const target = formatter(d)
    if (range) {
      const [start, end] = rangeValue
      const [fStart] = formattedRangeValue
      if (!start) {
        rangeValue = [d, end]
        return
      }
      if (!end) {
        dispatch('date-set', d)
        rangeValue = fStart < target ? [start, d] : [d, start]
        return
      }
      rangeValue = [d, null]
      return
    }
    dispatch('date-set', d)
    value = d
  }

  /**
   * @type { {items: number[]; start: number; end: number } }
   */
  let dates = {
    items: [],
    start: 0,
    end: 0,
  }

  const recomputeDates = () => {
    const d = new Date()
    d.setFullYear(year)
    d.setMonth(month)
    d.setDate(1)
    const weekNum = d.getDay()
    const leftPads = Array(weekNum % 7)
      .fill('')
      .map((_, i) => -i)
      .reverse()
    d.setMonth(month + 1)
    d.setDate(0)

    const middle = Array(d.getDate())
      .fill(0)
      .map((_, i) => i + 1)

    // 右边补空位
    const rightPads = Array(42 - leftPads.length - middle.length)
      .fill('')
      .map((_, i) => middle.length + i + 1)

    const items = [...leftPads, ...middle, ...rightPads]
    dates = {
      items,
      start: leftPads.length,
      end: leftPads.length + middle.length,
    }
  }

  $: {
    year
    month
    recomputeDates()
  }

  let hoveringDate = rangeValue[1]
  $: formattedHoveringDate = formatter(hoveringDate)

  /**
   * @param {number} date
   */
  const setHoveringDate = date => {
    const d = getCurrentYearMonth()
    d.setDate(date)
    hoveringDate = d
  }

  /**
   * @param { number } date
   */
  const isStart = date => {
    const d = getCurrentYearMonth()
    d.setDate(date)
    const [start, end] = formattedRangeValue
    const target = formatter(d)
    if (!end) {
      return formattedHoveringDate <= start
        ? target === formattedHoveringDate
        : target === start
    }
    return start === target
  }

  /**
   * @param {number} date
   */
  const isDateInHoveringRange = date => {
    const [start, end] = formattedRangeValue
    if (!start) return false
    if (!end && !hoveringDate) return false
    const d = getCurrentYearMonth()
    d.setDate(date)
    const target = formatter(d)
    if (end) return target >= start && target <= end

    return (
      (target >= start && target <= formattedHoveringDate) ||
      (target >= formattedHoveringDate && target <= start)
    )
  }

  /**
   * @param {number} date
   */
  const isEnd = date => {
    const d = getCurrentYearMonth()
    d.setDate(date)
    const [start, end] = formattedRangeValue
    const target = formatter(d)
    if (!end) {
      return formattedHoveringDate < start
        ? target === start
        : target === formattedHoveringDate
    }
    return end === target
  }

  /**
   * @param {number} date
   */
  const isSelected = date => {
    const d = getCurrentYearMonth()
    d.setDate(date)
    if (range) return rangeValue.some(d2 => isSameDate(d, d2))

    return isSameDate(value, d)
  }

  /**
   * @param {number} date Notice that this value can be lower than 0 or larger than 31
   */
  const getDisplayDateNum = date => {
    const d = getCurrentYearMonth()
    d.setDate(date)
    return d.getDate()
  }

  const doLayout = () => {
    dates = dates
  }

  $: {
    value
    rangeValue
    hoveringDate
    doLayout()
  }
</script>

<div
  class="c-date-panel c-date-picker--panel"
  transition:scale="{{ duration: 300, easing: cubicIn }}"
>
  <div class="c-date-panel--body">
    {#each messages.en.weeks as w}
      <div class="c-date-panel--week-item">
        {w}
      </div>
    {/each}
    {#each dates.items as d, i}
      <div
        class="c-date-panel--date-item"
        class:c-date-panel--date-item--is-start="{isStart(d)}"
        class:c-date-panel--date-item--is-end="{isEnd(d)}"
        class:c-date-panel--date-item--in-range="{isDateInHoveringRange(d)}"
        on:click|stopPropagation="{() => setDate(d)}"
        on:keypress
        on:mouseenter="{() => setHoveringDate(d)}"
        role="button"
        tabindex="0"
      >
        <div
          class="c-date-panel--date-item--inner"
          class:c-date-panel--date-item--inner-selected="{isSelected(d)}"
          class:c-date-panel--date-item--inner-not-current-month="{i <
            dates.start || i >= dates.end}"
        >
          {getDisplayDateNum(d)}
        </div>
      </div>
    {/each}
  </div>
</div>
