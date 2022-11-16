import { resolve } from 'path'
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { presetAttributify, presetIcons } from 'unocss'
import Unocss from 'unocss/vite'

export default defineConfig({
  plugins: [svelte(), Unocss({
    presets: [
      presetAttributify(),
      presetIcons(),
    ],
  })],
  build: {
    lib: {
      name: 'CasualUISvelte',
      fileName: () => 'index.js',
      entry: resolve(process.cwd(), './src/index.js'),
      formats: ['es'],
    },
    rollupOptions: {
      external: ['svelte'],
      output: {
        exports: 'named',
        globals: {
          svelte: 'Svelte',
        },
      },
    },
  },
})
