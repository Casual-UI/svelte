import type { CPosition } from '@casual-ui/types'
import useContextProp from './useContextProp'

/**
 * The position horizontal context key
 */
export const hKey = Symbol('c-position')

/**
 * The position vertical context key
 */
export const vKey = Symbol('c-position')

/**
 * @param {'start' | 'center' | 'end'} [position]
 * This function determine whether to use the context position or the position prop
 *
 * The position prop will have a higher priority and will override the ancestors' position
 */
export const useHorizontal = (position: CPosition) =>
  useContextProp(hKey, position, 'center', true)

export const useVertical = (position: CPosition) =>
  useContextProp(vKey, position, 'center', true)
