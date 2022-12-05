import type { CTheme } from '@casual-ui/types'
import useContextProp from './useContextProp'

/**
 * The theme context key
 */
export const key = Symbol('c-theme')

export default (theme: CTheme) => useContextProp(key, theme, 'primary')
