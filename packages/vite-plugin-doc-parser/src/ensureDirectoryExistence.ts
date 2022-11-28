import { existsSync, mkdirSync } from 'fs'
import { dirname } from 'path'

const ensureDirectoryExistence = (filePath: string) => {
  const dir = dirname(filePath)
  if (existsSync(dir))
    return true

  ensureDirectoryExistence(dir)
  mkdirSync(dir)
}

export default ensureDirectoryExistence
