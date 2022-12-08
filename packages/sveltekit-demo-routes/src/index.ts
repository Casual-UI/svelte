import { resolve } from 'path'
import { mkdirSync, rmSync, writeFileSync } from 'fs'
import type { Plugin } from 'vite'
import { build } from 'vite'
import fg from 'fast-glob'
import cliProgress from 'cli-progress'
import colors from 'colors'

export interface PluginOptions {
  pattern: string
  entryFileGenerator: (fullPath: string) => string
  viteConfGenerator: (fullPath: string) => string
}

const BASE_PATH = resolve(process.cwd(), '.demo-routes')
const ENTRY_PATH = resolve(BASE_PATH, 'main.js')
const VITE_CONFIG_PATH = resolve(BASE_PATH, 'vite.config.js')

const init = () => {
  rmSync(BASE_PATH, {
    recursive: true,
    force: true,
  })
  mkdirSync(BASE_PATH)
  writeFileSync(ENTRY_PATH, '', 'utf-8')
}
const svelteKitDemoRoutesPlugin: (options: PluginOptions) => Plugin = ({ viteConfGenerator, pattern, entryFileGenerator }) => {
  return {
    name: 'sveltekit-demo-routes',
    async buildStart() {
      init()
      const bar = new cliProgress.SingleBar({
        format: `${colors.magenta('[Demo parsing]')} ${colors.cyan('{bar}')} | {percentage}% || {value}/{total} Chunks || Speed: {speed}`,
        barCompleteChar: '\u2588',
        barIncompleteChar: '\u2591',
        hideCursor: true,
      }, cliProgress.Presets.shades_classic)
      const entries = await fg(pattern)
      let i = 0
      bar.start(entries.length, i)
      for (const entry of entries) {
        const fullPath = resolve(process.cwd(), entry)
        writeFileSync(ENTRY_PATH, entryFileGenerator(fullPath), 'utf-8')
        writeFileSync(VITE_CONFIG_PATH, viteConfGenerator(fullPath), 'utf-8')
        await build({
          root: BASE_PATH,
        })
        i++
        bar.update(i)
      }
      bar.stop()
    },
  }
}

export default svelteKitDemoRoutesPlugin
