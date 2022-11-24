// @ts-nocheck
import fs from 'fs'
import fg from 'fast-glob'
import type { LayoutServerLoad } from './$types'

function capitalizeFirstLetter(input: string) {
  return input.charAt(0).toUpperCase() + input.slice(1)
}

export const load = async ({ route }: Parameters<LayoutServerLoad>[0]) => {
  const dirName = import.meta.url.replace(/^file:\/\//, '').replace(/\/\+layout\.server\.ts$/, '')
  const demosDirectory = `${dirName}${route.id}/demos/**/+page.svelte`
  const demoEntries = await fg(demosDirectory)

  const routeIdArr = route.id?.split('/') || []
  routeIdArr.shift()
  const sidebarPathPrefix = routeIdArr.shift() || ''
  const sidebarEntries = await fg(`${dirName}/${sidebarPathPrefix}/*/+page.svelte`)

  const sidebars = sidebarEntries.map((entry) => {
    const to = entry.replace(new RegExp(dirName), '').replace(/\/\+page\.svelte/, '')
    return {
      to,
      label: capitalizeFirstLetter(to.replace(new RegExp(`/${sidebarPathPrefix}/`), '').replace(/\/$/, '')),
    }
  })
  sidebars.sort((s1, s2) => s1.label.charCodeAt(0) - s2.label.charCodeAt(0))
  return {
    // Current page demos
    demos: demoEntries.map((path) => {
      const pathArr = path.split('/')
      pathArr.pop()
      const demoRoutePath = pathArr.pop()
      return {
        code: fs.readFileSync(path, 'utf-8'),
        iframeUrl: `${route.id}/demos/${demoRoutePath}`,
        name: demoRoutePath?.split('-').map(capitalizeFirstLetter).join(' ') || '',
      }
    }),
    // Current sidebars
    sidebars,
  }
}
