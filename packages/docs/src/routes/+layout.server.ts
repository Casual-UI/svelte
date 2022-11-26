import fs from 'fs'
import { resolve } from 'path'
import fg from 'fast-glob'
import { getHighlighter } from 'shiki'
import type { LayoutServerLoad } from './$types'
import nightOwlTheme from './night-owl.json'
import componentMap from './componentMap'
import parseComponentAPI from './parseComponentAPI'
// import parseComponentAPI from './parseComponentAPI'

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

  const demos = demoEntries.map((path) => {
    const pathArr = path.split('/')
    pathArr.pop()

    // /components/xxx/demos/xxx
    const demoRoutePath = pathArr.pop()

    return {
      code: fs.readFileSync(path, 'utf-8'),
      iframeUrl: `${route.id}/demos/${demoRoutePath}`,
      slug: demoRoutePath || '',
      name: demoRoutePath?.split('-').map(capitalizeFirstLetter).join(' ') || '',
    }
  })

  // parse svelte code to HTML
  for (let i = 0; i < demos.length; i++) {
    const demo = demos[i]
    demo.code = await codeToHTML(demo.code)
  }

  let componentPath = ''

  if (route.id && route.id in componentMap) {
    const componentName = componentMap[route.id as keyof typeof componentMap] as string
    componentPath = resolve(process.cwd(), `../ui/src/components/${componentName}.svelte`)
  }

  return {
    // Current page demos
    demos,
    // Current sidebars
    sidebars,

    api: componentPath && await parseComponentAPI(componentPath),
  }
}
