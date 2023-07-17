import { resolve } from 'node:path'
import process from 'node:process'
import { describe, expect, it } from 'vitest'
import { parse } from 'sveltedoc-parser'

describe('parser', async () => {
  it('CNotification.svelte', async () => {
    const api = await parse({
      filename: resolve(process.cwd(), '../ui/src/components/CNotification.svelte'),
      version: 3,
    })
    expect(api).toMatchSnapshot()
  })
})
