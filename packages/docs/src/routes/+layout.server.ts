import fs from 'fs'
import { resolve } from 'path'
import fg from 'fast-glob'
import { getHighlighter } from 'shiki'
import { virtualResolver } from 'vite-plugin-doc-parser'
import type { LayoutServerLoad } from './$types'
import nightOwlTheme from './night-owl.json'
import componentMap from './componentMap'

export const prerender = true

export const trailingSlash = 'always'

function capitalizeFirstLetter(input: string) {
  return input.charAt(0).toUpperCase() + input.slice(1)
}
const codeToHTML = async (code: string, lang = 'svelte') =>
  (await getHighlighter({ theme: nightOwlTheme as any })).codeToHtml(
    code,
    { lang },
  )

export const load: LayoutServerLoad = async ({ route }) => {
  const dirName = resolve(process.cwd(), './src/routes')
  const demosDirectory = `${dirName}${route.id}/demos/**/doc.svelte`
  const demoEntries = await fg(demosDirectory)

  const routeIdArr = route.id?.split('/') || []
  routeIdArr.shift()
  const sidebarPathPrefix = routeIdArr.shift() || ''
  const sidebarEntries = await fg(`${dirName}/${sidebarPathPrefix}/*/+page.svelte`)

  const sidebars = sidebarEntries.map((entry) => {
    const to = entry.replace(new RegExp(dirName), '').replace(/\/\+page\.svelte/, '')

    // /components/foo-bar => foo-bar
    const componentRoute = to.replace(new RegExp(`/${sidebarPathPrefix}/`), '').replace(/\/$/, '')

    return {
      to,
      // foo-bar => FooBar
      label: componentRoute.split('-').map(capitalizeFirstLetter).join(' '),
    }
  })
  sidebars.sort((s1, s2) => s1.label < s2.label ? -1 : 1)

  const demos = demoEntries.map((path) => {
    const pathArr = path.split('/')
    pathArr.pop()

    // /components/xxx/demos/xxx
    const demoRoutePath = pathArr.pop()

    return {
      code: fs.readFileSync(path, 'utf-8'),
      slug: demoRoutePath || '',
      name: demoRoutePath?.split('-').map(capitalizeFirstLetter).join(' ') || '',
    }
  })

  demos.sort((d1, d2) => d1.slug > d2.slug ? 1 : -1)

  // parse svelte code to HTML
  for (let i = 0; i < demos.length; i++) {
    const demo = demos[i]
    demo.code = await codeToHTML(demo.code)
  }

  let componentName = ''

  if (route.id && route.id in componentMap)
    componentName = componentMap[route.id as keyof typeof componentMap] as string

  return {
    // Current page demos
    demos,
    // Current sidebars
    sidebars,

    api: virtualResolver(componentName),
  }
}
