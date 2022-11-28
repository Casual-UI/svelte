import { resolve } from 'path'
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'fs'
import type { Plugin } from 'vite'
import fg from 'fast-glob'

const DOC_BASE_PATH = resolve(process.cwd(), '.doc-parser')

const resolveDocPath = (path: string) => {
  const fullPath = resolve(DOC_BASE_PATH, path)
  return fullPath
}
const VIRTUAL_MAP_PATH = resolveDocPath('./virtual-map.json')

const getVirtualMap = () => {
  return JSON.parse(readFileSync(VIRTUAL_MAP_PATH, 'utf-8'))
}

const init = () => {
  rmSync(DOC_BASE_PATH, {
    recursive: true,
    force: true,
  })
  mkdirSync(resolveDocPath(''))
  writeFileSync(VIRTUAL_MAP_PATH, '{}', 'utf-8')
}

export interface PluginOptions {
  /**
   * A transformer to transform source file content to some custom content
   */
  parser: (file: string) => Promise<any>
  /**
   * use for fast-glob
   */
  globPattern: string
}

const vitePluginDocParser: (options: PluginOptions) => Plugin = ({ globPattern, parser }) => ({
  name: 'vite-plugin-doc-parser',
  async buildStart() {
    init()
    const virtualMap = getVirtualMap()
    const entries = await fg(globPattern)
    for (const entry of entries) {
      if (entry in virtualMap)
        continue
      const parsed = JSON.stringify(await parser(entry))

      const virtualId = Object.keys(virtualMap).length + 1
      const tempFileFullPath = resolveDocPath(`./${virtualId}.json`)
      writeFileSync(tempFileFullPath, parsed, 'utf-8')
      virtualMap[entry] = virtualId
    }
    writeFileSync(VIRTUAL_MAP_PATH, JSON.stringify(virtualMap))
  },
})

export const virtualResolver = (componentPath) => {
  const virtualMap = getVirtualMap()
  if (componentPath in virtualMap) {
    const id = virtualMap[componentPath]
    return JSON.parse(
      readFileSync(
        resolve(DOC_BASE_PATH, `./${id}.json`),
        'utf-8',
      ),
    )
  }
  return false
}

export default vitePluginDocParser
