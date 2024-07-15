import type { Action, ActionReturn } from 'svelte/action'

export interface ClickOutsideParams {
  /**
   * The callback function that will be applied when clicked inside
   */
  cbInside?: (...params: any) => any
  /**
   * The callback function that will be applied when clicked outside
   */
  cbOutside?: (...params: any) => any
}

const clickOutside: Action = <T extends HTMLElement>(node: T, {
  cbInside,
  cbOutside,
}: ClickOutsideParams) => {
  const clickHandler = (e: MouseEvent) => {
    if (!e.target || !node)
      return
    if (node.contains(e.target as HTMLElement))
      cbInside?.(e)

    else
      cbOutside?.(e)
  }

  window.addEventListener('click', clickHandler)

  const actionReturn: ActionReturn = {
    destroy() {
      window.removeEventListener('click', clickHandler)
    },
  }

  return actionReturn
}

export default clickOutside
