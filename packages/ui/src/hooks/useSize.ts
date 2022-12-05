import type { CSize } from '@casual-ui/types'
import useContextProp from './useContextProp'

/**
 * The size context key
 */
export const key = Symbol('c-size')

export default (size: CSize) => useContextProp(key, size, 'md')
