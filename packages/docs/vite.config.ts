// import { resolve } from 'path'
import { sveltekit } from '@sveltejs/kit/vite'
import Unocss from 'unocss/vite'
import vitePluginDocParser from 'vite-plugin-doc-parser'
// import svelteKitDemoRoutes from 'sveltekit-demo-routes'
import unoConfig from './uno.config'
import parseComponentAPI from './src/routes/parseComponentAPI'

// const idResolver = (fullPath: string) => {
//   const pathArr = fullPath.split('/')
//   pathArr.pop()
//   return `${pathArr.pop()}`
// }

const config = {
  plugins: [
    Unocss(unoConfig as any),
    sveltekit(),
    vitePluginDocParser({
      parser: parseComponentAPI,
      globPattern: '../ui/src/components/**/*.svelte',
    }),
    //     svelteKitDemoRoutes({
    //       pattern: './src/routes/components/*/demos/*/doc.svelte',
    //       entryFileGenerator: (fullPath) => {
    //         const id = idResolver(fullPath)

    //         return `import App from '${fullPath}'
    // import 'uno.css'
    // new App({
    //   target: document.querySelector('#${id}')
    // })`
    //       },
    //       viteConfGenerator: (fullPath) => {
    //         const outDir = resolve(process.cwd(), `./static/demos/${fullPath.replace(/(^\S+\/routes)|(doc\.svelte$)/g, '')}`)
    //         return `import { svelte } from '@sveltejs/vite-plugin-svelte'
    // import sveltePreprocess from 'svelte-preprocess'
    // import Unocss from 'unocss/vite'
    // import unoConfig from '../uno.config'

    // export default {
    //   plugins: [
    //     Unocss(unoConfig),
    //     svelte({ preprocess: sveltePreprocess() })
    //   ],
    //   logLevel: 'silent',
    //   build: {
    //     outDir: '${outDir}',
    //     lib: {
    //       entry: '${resolve(process.cwd(), './.demo-routes/main.js')}',
    //       name: 'DemoRoutes',
    //       formats: ['iife'],
    //       fileName: f => 'main.js'
    //     },
    //   },
    // }`
    //       },
    //     }),
  ],
}

export default config
