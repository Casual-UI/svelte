import { resolve } from 'path'
import MarkdownIt from 'markdown-it'
import markdownItContainer from 'markdown-it-container'
import Shiki from 'markdown-it-shiki'
import nightOwl from '../../routes/night-owl.json'
import { importCodePlugin } from './importCodePlugin'

const md = MarkdownIt({ html: true })
md.use(markdownItContainer, 'tip', {
  validate(params: string) {
    return params.trim().match(/^tip\s+(.*)$/)
  },
  render(tokens: any, idx: number) {
    const m = tokens[idx].info.trim().match(/^tip\s+(.*)$/)

    if (tokens[idx].nesting === 1) {
      return `<div class="my-2 mr-4" bg-opacity-10="" border-l-6="" rounded-l-2="" box-border="" bg-primary="" border-primary="" pt-4="" pb-2="" pl-4="" fs-14="" mr-4>
        <div font-bold="">
          <div leading-6="">
            ${md.utils.escapeHtml(m[1])}
          </div>
        </div>`
    }
    else {
      return '</div>\n'
    }
  },
})
md.use(Shiki, {
  theme: nightOwl,
})

md.use(importCodePlugin, {
  handleImportPath: str => {
    return resolve(process.cwd(), `./src/routes/${str}`)
  },
})

export {
  md,
}
export default (mdContent?: string) => md.render(mdContent || '')
