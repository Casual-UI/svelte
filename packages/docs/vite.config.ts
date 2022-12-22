import { readFileSync } from 'fs'
import { sveltekit } from '@sveltejs/kit/vite'
import Unocss from 'unocss/vite'
import vitePluginDocParser from 'vite-plugin-doc-parser'
import { Mode, plugin } from 'vite-plugin-markdown'
import type { Plugin } from 'vite'
import unoConfig from './uno.config'
import parseComponentAPI from './src/plugins/api/parseComponentAPI'
import { md } from './src/plugins/md/parseMarkdown'

const virtualModuleId = 'virtual:casual-scss-theme-vars'
const resolvedVirtualModuleId = `\0${virtualModuleId}`

const vars = md.render(`\`\`\`scss
${readFileSync('../styles/src/variables/colors.scss')}
\`\`\``)

const loadScssPlugin: Plugin = {
  name: 'parse-casual-ui-scss-variables',
  resolveId(id: string) {
    if (id === virtualModuleId)
      return resolvedVirtualModuleId
  },
  load(id) {
    if (id === resolvedVirtualModuleId)
      return `export default \`${vars}\``
  },
}

const config = {
  plugins: [
    plugin({
      mode: [Mode.HTML],
      markdownIt: md,
    }),
    Unocss(unoConfig as any),
    sveltekit(),
    vitePluginDocParser({
      parser: parseComponentAPI,
      globPattern: '../ui/src/components/**/*.svelte',
    }),
    loadScssPlugin,
  ],
}

export default config
