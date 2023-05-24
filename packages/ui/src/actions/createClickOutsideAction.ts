import type { Action } from 'svelte/types/runtime/action'

export default ({ cbInside, cbOutside }: {
  cbInside: () => void
  cbOutside: () => void
}) => {
  const action: Action = <T extends HTMLElement>(node: T) => {
    const clickHandler = (e: MouseEvent) => {
      if (!e.target || !node)
        return
      if (node.contains(e.target as HTMLElement))
        cbInside?.()

      else
        cbOutside?.()
    }

    window.addEventListener('click', clickHandler)

    /**
     * @type {import('svelte/types/runtime/action').ActionReturn}
     */
    return {
      destroy() {
        window.removeEventListener('click', clickHandler)
      },
    }
  }

  return action
}
