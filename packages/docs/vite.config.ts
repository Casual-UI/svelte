import { resolve } from 'node:path'
import { cwd } from 'node:process'
import { defineConfig } from 'vite'
import { mdToSvelte, sveltepress } from '@sveltepress/vite'
import { defaultTheme } from '@sveltepress/theme-default'
import { parse } from 'sveltedoc-parser'
import type { Plugin } from 'unified'
import AutoImport from 'unplugin-svelte-components/vite'
import { vitePluginDocParser } from '../vite-plugin-doc-parser/src/index.js'
import navbar from './config/navbar.js'
import sidebar from './config/sidebar.js'
import componentApi from './src/remark-plugins/component-api.js'
import links from './src/remark-plugins/links.js'

const defaultThemeResolved = defaultTheme({
  navbar,
  sidebar,
  github: 'https://github.com/Casual-UI/svelte',
  editLink: 'https://github.com/Casual-UI/svelte/edit/main/packages/docs/src/routes/:route',
  logo: '/logo.png',
  docsearch: {
    appId: '3P3WWINCDI',
    apiKey: '13665d1ac089426e8964e37d7c05670f',
    indexName: 'svelte',
  },
  themeColor: {
    light: '#fff',
    dark: '#000',
    gradient: {
      start: '#41D1FF',
      end: '#BD34FE',
    },
    primary: '#8952fd',
    hover: '#618BFF',
  },
  preBuildIconifyIcons: {
    logos: ['typescript-icon'],
    solar: ['moon-sleep-outline', 'dumbbell-small-line-duotone'],
  },
  ga: 'G-SLFJJENX54',
})

async function svelteDocParser(filename: string) {
  const api = await parse({
    filename,
    version: 3,
  })

  const remarkPlugins: Plugin[] = [links]

  const admonitionPlugin = defaultThemeResolved.remarkPlugins?.[1]
  if (admonitionPlugin)
    remarkPlugins.push(admonitionPlugin)

  const converter = async <T extends Record<string, any>>(d: T) => {
    return {
      ...d,
      description: (await mdToSvelte({
        mdContent: d.description,
        filename: `${filename}.md`,
        highlighter: defaultThemeResolved.highlighter,
        remarkPlugins,
      })).code,
    }
  }
  if (api.data)
    api.data = await Promise.all(api.data.filter(d => d?.description).map(converter))

  if (api.events)
    api.events = (await Promise.all(api.events.filter(d => d?.description).map(converter))).filter(d => !!d)

  if (api.slots) {
    api.slots = await Promise.all(api.slots?.filter(d => d?.description).map(async item => {
      const newItem = await converter(item)
      if (newItem?.params) {
        newItem.params = await Promise.all(newItem.params.filter(item => item?.description && item.name !== 'slot')
          .map(converter))
      }

      return newItem
    }))
  }

  return api as any
}

export default defineConfig({
  plugins: [
    vitePluginDocParser({
      parser: svelteDocParser,
      extension: '.svelte',
      baseDir: resolve(cwd(), '../ui/src/components/'),
    }),
    AutoImport({
      dts: true,
      external: [
        {
          from: '@casual-ui/svelte',
          names: [
            'CButton',
            'CLoading',
            'CLoadingAudio',
            'CLoadingBar',
            'CLoadingBars',
            'CLoadingCircleBars',
            'CLoadingClock',
            'CLoadingComment',
            'CLoadingCube',
            'CLoadingDot',
            'CLoadingDots',
            'CLoadingGear',
            'CLoadingHeart',
            'CLoadingHourglass',
            'CLoadingInfinity',
            'CLoadingLattice',
            'CLoadingOrbit',
            'CLoadingOval',
            'CLoadingPie',
            'CLoadingPuff',
            'CLoadingRings',
            'CLoadingSpinBox',
            'CLoadingTail',
            'CLoadingWifi',
            'CTag',
            'openNotification',
            'CInput',
            'CSelect',
            'CRadio',
            'CRadioGroup',
            'CCheckbox',
            'CCheckboxGroup',
            'CDatePicker',
            'CToggle',
            'CForm',
            'CFormItem',
            'CPopup',
            'CDialog',
            'CDrawer',
            'CTooltip',
            'CAjaxBar',
            'CDropdown',
            'CExpansion',
            'CCarousel',
            'CCarouselSlider',
            'CParallax',
            'CSkeleton',
            'CList',
            'CListItem',
            'CInfoItem',
            'CTable',
            'CTree',
            'CPagination',
            'CTabs',
            'CTabItem',
            'CImage',
          ],
          defaultImport: false,
        },
      ],
    }),
    sveltepress({
      theme: defaultThemeResolved,
      siteConfig: {
        title: 'Casual UI - Svelte',
        description: 'A component library that supports Svelte3+',
      },
      remarkPlugins: [componentApi],
    }),
  ],
  optimizeDeps: {
    exclude: ['dayjs/esm'],
  },
  ssr: {
    noExternal: ['@casual-ui/utils', '@casual-ui/styles', '@casual-ui/svelte'],
  },
})
