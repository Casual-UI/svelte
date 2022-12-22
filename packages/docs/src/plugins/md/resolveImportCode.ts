import fs from 'fs'
import path from 'path'

export const resolveImportCode = (
  { importPath, lineStart, lineEnd }: any,
  { filePath }: any,
): {
  importFilePath: string | null
  importCode: string
} => {
  let importFilePath = importPath
  if (!path.isAbsolute(importPath)) {
    // if the importPath is relative path, we need to resolve it
    // according to the markdown filePath
    if (!filePath) {
      return {
        importFilePath: null,
        importCode: 'Error when resolving path',
      }
    }
    importFilePath = path.resolve(filePath, '..', importPath)
  }

  // check file existence
  if (!fs.existsSync(importFilePath)) {
    return {
      importFilePath,
      importCode: 'File not found',
    }
  }

  // read file content
  const fileContent = fs.readFileSync(importFilePath).toString()

  // resolve partial import
  return {
    importFilePath,
    importCode: fileContent
      .split('\n')
      .slice(lineStart ? lineStart - 1 : lineStart, lineEnd)
      .join('\n')
      .replace(/\n?$/, '\n'),
  }
}
