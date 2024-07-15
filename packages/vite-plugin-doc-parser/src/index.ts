import { resolve } from 'node:path'
import fg from 'fast-glob'
import type { Plugin } from 'vite'

const virtualMap = {}

export interface DocParserOptions {
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

const vitePluginDocParser = async ({
  extension,
  parser,
  baseDir,
}: DocParserOptions): Promise<Plugin> => {
  const globPattern = `${baseDir.endsWith('/') ? baseDir : `${baseDir}/`}**/*${extension}`
  const getAPIJson = (id: string) => {
    if (id.startsWith(VIRTUAL_COMPONENT_API_PREFIX)) {
      const componentName = id.slice(VIRTUAL_COMPONENT_API_PREFIX.length)
      const key = resolve(baseDir, `${componentName}${extension}`)
      return virtualMap[key]
    }
    return false
  }
  const entries = await fg(globPattern)
  for (const entry of entries) {
    if (entry in virtualMap)
      continue
    const parsed = JSON.stringify(await parser(entry))
    virtualMap[entry] = parsed
  }

  return {
    name: 'vite-plugin-doc-parser',
    resolveId(id) {
      if (id.startsWith(VIRTUAL_COMPONENT_API_PREFIX))
        return id
    },
    load(id) {
      if (id.startsWith(VIRTUAL_COMPONENT_API_PREFIX)) {
        const json = getAPIJson(id)
        if (json)
          return `export default ${json}`
      }
    },
  }
}

export {
  vitePluginDocParser,
}
