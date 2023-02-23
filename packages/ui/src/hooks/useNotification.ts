import type { CPosition, CTheme, PositionGroup } from '@casual-ui/types'
import { get, writable } from 'svelte/store'

interface NotificationItem {
  title: string
  message: string
  timeout: number
  theme: CTheme
  alignX: CPosition
  alignY: CPosition
  closeIcon: boolean
  id: number
}

const notifications = writable<{
  [key in PositionGroup]: {
    x: CPosition
    y: CPosition
    items: NotificationItem[]
  }
}>({
  'start start': {
    x: 'start',
    y: 'start',
    items: [],
  },
  'start center': {
    x: 'start',
    y: 'center',
    items: [],
  },
  'start end': {
    x: 'start',
    y: 'end',
    items: [],
  },
  'center start': {
    x: 'center',
    y: 'start',
    items: [],
  },
  'center center': {
    x: 'center',
    y: 'center',
    items: [],
  },
  'center end': {
    x: 'center',
    y: 'end',
    items: [],
  },
  'end start': {
    x: 'end',
    y: 'start',
    items: [],
  },
  'end center': {
    x: 'end',
    y: 'center',
    items: [],
  },
  'end end': {
    x: 'end',
    y: 'end',
    items: [],
  },
})

let notificationCounter = 0

const closeByPositionGroupAndID = (positionGroup: PositionGroup, id: number) => {
  const idx = get(notifications)[positionGroup].items.findIndex(
    noItem => noItem.id === id,
  )
  if (idx !== -1) {
    notifications.update(group => {
      group[positionGroup].items.splice(idx, 1)
      return group
    })
  }
}

const changeContentByPositionGroupAndID = (positionGroup: PositionGroup, id: number, newContent: Pick<NotificationItem, 'message' | 'theme' | 'title'>) => {
  const idx = get(notifications)[positionGroup].items.findIndex(
    noItem => noItem.id === id,
  )
  if (idx !== -1) {
    notifications.update(group => {
      group[positionGroup].items.splice(idx, 1, {
        ...group[positionGroup].items[idx],
        ...newContent,
      })
      return group
    })
  }
}

const open = (
  {
    title = '',
    message = '',
    timeout = 3000,
    theme = 'primary',
    alignX = 'end',
    alignY = 'start',
    closeIcon = true,
  }: Partial<NotificationItem> = {
    timeout: 3000,
    theme: 'primary',
    alignX: 'end',
    alignY: 'start',
    closeIcon: true,
  },
) => {
  const id = notificationCounter++

  /**
   * @type {*}
   */
  const positionKey: PositionGroup = `${alignX} ${alignY}`
  const newItem = {
    title,
    message,
    timeout,
    id,
    theme,
    alignX,
    alignY,
    closeIcon,
  }

  notifications.update(group => {
    if (positionKey.startsWith('end'))
      group[positionKey].items.unshift(newItem)

    else
      group[positionKey].items.push(newItem)

    return group
  })

  const close = () => closeByPositionGroupAndID(positionKey, id)

  let flag

  if (timeout && timeout > 0)
    flag = setTimeout(close, timeout)

  /**
   *
   * @param {object} content
   * @param {string} [content.title]
   * @param {string} [content.message]
   * @param {number} [content.timeout]
   * @param {'primary' | 'secondary' | 'warning' | 'negative'} [content.theme]
   */
  const changeContent = content => {
    changeContentByPositionGroupAndID(positionKey, id, content)
    const { timeout } = content
    if (timeout && timeout > 0) {
      if (flag) {
        clearTimeout(flag)
        flag = setTimeout(close, timeout)
      }
    }
  }

  return { close, changeContent }
}

export {
  open,
  closeByPositionGroupAndID,
  notifications,
  changeContentByPositionGroupAndID,
}
