import { resolve } from 'path'
import { defineConfig } from 'vite'
import { presetAttributify, presetIcons, presetUno } from 'unocss'
import Unocss from 'unocss/vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [
    svelte(),
    Unocss({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons(),
      ],
    })],
  build: {
    outDir: 'dist/style',
    lib: {
      name: 'CasualUISvelte',
      fileName: () => 'import-style.js',
      entry: resolve(process.cwd(), './src/import-style.ts'),
      formats: ['es'],
    },
  },
})
