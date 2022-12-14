import type { CFlexDirection, CSize, CUnit } from '@casual-ui/types'
import { getContext } from 'svelte'
import useContextProp from './useContextProp'
import useSize from './useSize'

const hasErrorKey = Symbol('hasError')
const validateCurrentKey = Symbol('validateCurrent')
const clearCurrentKey = Symbol('clearCurrent')
const labelAlignKey = Symbol('labelAlign')
const gutterSizeKey = Symbol('gutterSize')
const labelDirectionKey = Symbol('labelDirection')
const colKey = Symbol('col')
const labelWidthKey = Symbol('labelWidth')

const useFormProps = ({
  gutterSize,
  labelAlign,
  size,
  labelDirection,
  col,
  labelWidth,
}: {
  labelAlign?: 'left' | 'right' | 'center'
  size?: CSize
  gutterSize?: CSize
  labelWidth?: CUnit
  col?: number
  labelDirection?: CFlexDirection
} = {}) => {
  return {
    contextLabelWidth: useContextProp(labelWidthKey, labelWidth, '80px'),
    contextCol: useContextProp(colKey, col, 6),
    contextLabelDirection: useContextProp(
      labelDirectionKey,
      labelDirection,
      'row',
    ),
    contextGutterSize: useContextProp(gutterSizeKey, gutterSize, 'md'),
    contextSize: useSize(size),
    contextLabelAlign: useContextProp(labelAlignKey, labelAlign, 'left'),
  }
}

const useValidator = () => {
  /**
   * @type {() => void=}
   */
  const validateCurrent = getContext(validateCurrentKey)

  /**
   * @type {() => void=}
   */
  const clearCurrent = getContext(clearCurrentKey)

  /**
   * @type {import('svelte/types/runtime/store').Writable<string | false>=}
   */
  const hasError = getContext(hasErrorKey)
  return {
    validateCurrent,
    clearCurrent,
    hasError,
  }
}

export {
  useFormProps,
  useValidator,
  hasErrorKey,
  validateCurrentKey,
  clearCurrentKey,
}
