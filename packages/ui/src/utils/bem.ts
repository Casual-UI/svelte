import clsx from './clsx'

/**
 * Change camel case to kebab
 */
const camelToKebab = (str: string) =>
  str
    .split('')
    .map((letter, idx) => {
      return letter.toUpperCase() === letter
        ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
        : letter
    })
    .join('')

export default (base: string, condition: Record<string, any> = {}) =>
  clsx(
    `c-${base}`,
    ...(Object.entries(condition).map(
      ([k, v]) => v && `c-${base}--${camelToKebab(k)}`,
    ) as [any, any]),
  )
