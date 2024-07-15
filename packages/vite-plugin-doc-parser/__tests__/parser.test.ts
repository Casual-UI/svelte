import { resolve } from 'node:path'
import { cwd } from 'node:process'
import { describe, expect, it } from 'vitest'
import { parse } from 'sveltedoc-parser'
import fg from 'fast-glob'

describe('parser', async () => {
  const components = await fg(resolve(cwd(), '../ui/src/components/**/*.svelte'))

  components.forEach(path => {
    it(path, async () => {
      const api = await parse({
        filename: path,
        version: 3,
      })
      expect(api).toMatchSnapshot()
    })
  })
})
