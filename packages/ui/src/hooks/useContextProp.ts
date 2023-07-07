import { getContext, hasContext, setContext } from 'svelte'
import type { Writable } from 'svelte/store'
import { writable } from 'svelte/store'

type ContextKey = string | number | symbol

export default <T>(key: ContextKey, val: T, defaultVal: any, affectAncestor = false) => {
  const hasVal = val !== undefined
  if (hasContext(key)) {
    let contextVal = getContext<Writable<T>>(key)
    if (!hasVal)
      return contextVal

    if (affectAncestor) {
      contextVal.set(val)
      return contextVal
    }
    contextVal = writable(val)
    setContext(key, contextVal)

    return contextVal
  }
  const contextVal = writable(val || defaultVal)
  setContext(key, contextVal)
  return contextVal
}

export const useWithoutAffectAncestor = <T>(key: ContextKey, val: T, defaultVal: T) => {
  const hasVal = val !== undefined
  if (!hasContext(key)) {
    const contextVal = writable(hasVal ? val : defaultVal)
    setContext(key, contextVal)
    return contextVal
  }
  return writable(hasVal ? val : defaultVal)
}
