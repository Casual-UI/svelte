import { sveltekit } from '@sveltejs/kit/vite'
import Unocss from 'unocss/vite'
import vitePluginDocParser from 'vite-plugin-doc-parser'
import { Mode, plugin } from 'vite-plugin-markdown'
import unoConfig from './uno.config'
import parseComponentAPI from './src/routes/parseComponentAPI'
import { md } from './src/routes/parseMarkdown'

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
  ],
}

export default config
