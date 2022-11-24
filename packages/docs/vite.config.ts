import { sveltekit } from '@sveltejs/kit/vite'
import Unocss from 'unocss/vite'
import unoConfig from './uno.config'

const config = {
  plugins: [
    Unocss(unoConfig as any),
    sveltekit(),
  ],
}

export default config
