import svelte from 'rollup-plugin-svelte'
import commonjs from '@rollup/plugin-commonjs'
import resolve, { nodeResolve } from '@rollup/plugin-node-resolve'
const formats = ['umd', 'es']

export default {
  input: 'src/index.js',
  output: formats.map(f => ({
    file: `dist/index.${f}.js`,
    format: f,
    name: 'CasualUI',
  })),
  plugins: [
    svelte({
      compilerOptions: {
        dev: false,
        generate: 'ssr',
        hydratable: true,
        customElement: false,
      },
    }),
    resolve({
      browser: true,
      exportConditions: ['svelte'],
      extensions: ['.svelte'],
    }),
    nodeResolve(),
    commonjs(),
  ],
}
