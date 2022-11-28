import { sveltekit } from '@sveltejs/kit/vite'
import Unocss from 'unocss/vite'
import vitePluginDocParser from 'vite-plugin-doc-parser'
import unoConfig from './uno.config'
import parseComponentAPI from './src/routes/parseComponentAPI'

const config = {
  plugins: [
    Unocss(unoConfig as any),
    sveltekit(),
    vitePluginDocParser({
      parser: parseComponentAPI,
      globPattern: '../ui/src/components/**/*.svelte',
    }),
  ],
}

export default config
