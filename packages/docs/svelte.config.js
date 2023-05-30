import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/kit/vite'

/**
 * @type {import('@sveltejs/kit').Config}
 */
const config = {
  extensions: ['.svelte', '.md'],
  preprocess: [vitePreprocess()],
  kit: {
    adapter: adapter({
      pages: 'dist',
    }),
    typescript: {
      config: tsconfig => {
        const {
          importsNotUsedAsValues: _,
          preserveValueImports: __,
          ...compilerOptions
        } = tsconfig.compilerOptions

        return {
          ...tsconfig,
          compilerOptions: {
            ...compilerOptions,
          },
        }
      },
    },
  },
}

export default config
