/* eslint-disable no-console */
import { resolve } from 'path'
import { existsSync, mkdirSync, readFileSync, watchFile, writeFileSync } from 'fs'
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
const VIRTUAL_MAP = resolve(BASE_PATH, 'virtual-map.json')

const init = () => {
  if (!existsSync(BASE_PATH))
    mkdirSync(BASE_PATH)

  if (!existsSync(ENTRY_PATH))
    writeFileSync(ENTRY_PATH, '', 'utf-8')

  if (!existsSync(VIRTUAL_MAP))
    writeFileSync(VIRTUAL_MAP, '{}', 'utf-8')
}

const isFileContentEqual = (oldFileContent: string, newFileContent) => {
  return Buffer.from(oldFileContent).equals(Buffer.from(newFileContent))
}

const svelteKitDemoRoutesPlugin: (options: PluginOptions) => Plugin = ({ viteConfGenerator, pattern, entryFileGenerator }) => {
  const doBuild = async (fullPath: string) => {
    writeFileSync(ENTRY_PATH, entryFileGenerator(fullPath), 'utf-8')
    writeFileSync(VITE_CONFIG_PATH, viteConfGenerator(fullPath), 'utf-8')
    await build({
      root: BASE_PATH,
    })
  }

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

      const updateBar = () => {
        i++
        bar.update(i)
      }

      for (const entry of entries) {
        const fullPath = resolve(process.cwd(), entry)
        const newFileContent = readFileSync(fullPath, 'utf-8')
        const virtualMap = JSON.parse(readFileSync(VIRTUAL_MAP, 'utf-8'))

        let oldFilePath: string

        if (fullPath in virtualMap) {
          oldFilePath = resolve(BASE_PATH, `${virtualMap[fullPath]}.tmp`)

          if (existsSync(oldFilePath)) {
            const oldFileContent = readFileSync(oldFilePath, 'utf-8')
            // if the temp file exists and the content has no changes
            // skip it then mark as compiled by updating the progress bar
            if (isFileContentEqual(oldFileContent, newFileContent))
              console.log(colors.magenta('[Doc compared]'), fullPath, 'The content has no change, skip it.')

            updateBar()
          }
          else {
            writeFileSync(oldFilePath, newFileContent, 'utf-8')
            await doBuild(fullPath)
            updateBar()
          }
        }
        else {
          virtualMap[fullPath] = Object.keys(virtualMap).length + 1
          oldFilePath = resolve(BASE_PATH, `${virtualMap[fullPath]}.tmp`)
          writeFileSync(oldFilePath, newFileContent, 'utf-8')
          writeFileSync(VIRTUAL_MAP, JSON.stringify(virtualMap), 'utf-8')
          await doBuild(fullPath)
          updateBar()
        }

        watchFile(fullPath, () => {
          console.log(colors.magenta('[Demo change detected]'), fullPath)
          doBuild(fullPath).then(() => {
            console.log(colors.magenta('[Demo change applied]'), fullPath)
          })
        })
      }
      bar.stop()
    },
  }
}

export default svelteKitDemoRoutesPlugin
