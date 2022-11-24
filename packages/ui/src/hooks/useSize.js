import useContextProp from './useContextProp'

/**
 * The size context key
 */
export const key = Symbol('c-size')

/**
 * @param size {import('@casual-ui/types').CSize=}
 */
export default size => useContextProp(key, size, 'md')
