import { resolve } from 'node:path'
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
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
  if (existsSync(DOC_BASE_PATH)) {
    rmSync(DOC_BASE_PATH, {
      recursive: true,
    })
  }
  mkdirSync(DOC_BASE_PATH)
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
  extension: string
  /**
   * The base dir for load json file
   */
  baseDir: string
}

const VIRTUAL_COMPONENT_API_PREFIX = 'virtual:doc-parse/'

const vitePluginDocParser: (options: PluginOptions) => Plugin = ({
  extension,
  parser,
  baseDir,
}) => {
  const globPattern = `${baseDir}**/*${extension}`
  const getVirtualId = (id: string) => {
    if (id.startsWith(VIRTUAL_COMPONENT_API_PREFIX)) {
      const componentName = id.slice(VIRTUAL_COMPONENT_API_PREFIX.length)
      const virtualMap = getVirtualMap()
      const key = baseDir + componentName + extension
      return virtualMap[key]
    }
  }
  return {
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
    resolveId(id) {
      const virtualId = getVirtualId(id)
      if (virtualId)
        return `virtual:doc-parse/${virtualId}`
    },
    load(id) {
      if (id.startsWith(VIRTUAL_COMPONENT_API_PREFIX)) {
        const virtualId = id.slice(VIRTUAL_COMPONENT_API_PREFIX.length)
        const realDocJsonPath = resolveDocPath(`./${virtualId}.json`)
        if (existsSync(realDocJsonPath))
          return `export default ${readFileSync(realDocJsonPath, 'utf-8')}`
      }
    },
  }
}

export const virtualResolver = componentPath => {
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

export {
  vitePluginDocParser,
}
