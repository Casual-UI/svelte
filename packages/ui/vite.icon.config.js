import { defineConfig } from 'vite'
import { presetAttributify, presetIcons, presetUno } from 'unocss'
import Unocss from 'unocss/vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [
    Unocss({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons(),
      ],
    }),
    svelte(),
  ],
  build: {
    outDir: 'dist/icon',
    lib: {
      name: 'CasualUISvelte',
      fileName: () => 'import-icon.js',
      entry: 'import-icon.ts',
      formats: ['es'],
    },
  },
})
