export const attributeAtom = (attrs: Record<string, boolean | string | number>) =>
  Object.entries(attrs).reduce(
    (attrsNeeded, [name, exist]) => ({
      ...attrsNeeded,
      [name]: exist ? '' : null,
    }),
    {},
  )
