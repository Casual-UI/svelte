import adapter from '@sveltejs/adapter-auto'
import sveltePreprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: sveltePreprocess(),
  kit: {
    adapter: adapter(),
  },
  package: {
    dir: 'dist',
  },
}

export default config
