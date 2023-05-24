import { existsSync, mkdirSync } from 'node:fs'
import { dirname } from 'node:path'

const ensureDirectoryExistence = (filePath: string) => {
  const dir = dirname(filePath)
  if (existsSync(dir))
    return true

  ensureDirectoryExistence(dir)
  mkdirSync(dir)
}

export default ensureDirectoryExistence
