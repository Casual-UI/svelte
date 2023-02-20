import { defineConfig } from 'vite'
import { sveltepress } from '@sveltepress/vite'
import { defaultTheme } from '@sveltepress/theme-default'

const config = defineConfig({
  plugins: [
    sveltepress({
      theme: defaultTheme({
        navbar: [
          {
            title: 'Guide',
            items: [
              {
                title: 'Quick Start',
                to: '/guide/quick-start/',
              },
              {
                title: 'Theme Customization',
                to: '/guide/theme-customization/',
              },
              {
                title: 'Dark Mode',
                to: '/guide/dark-mode/',
              },
            ],
          },
          {
            title: 'Features',
            items: [
              {
                title: 'Components',
                to: '/features/components/basic/button/',
              },
              {
                title: 'Global CSS Utils',
                to: '/features/global-css-utils/',
              },
            ],
          },
        ],
        sidebar: {
          '/guide/': [
            {
              title: 'Guide',
              items: [
                {
                  title: 'Quick Start',
                  to: '/guide/quick-start/',
                },
                {
                  title: 'Theme Customization',
                  to: '/guide/theme-customization/',
                },
                {
                  title: 'Dark Mode',
                  to: '/guide/dark-mode/',
                },
              ],
            },
          ],
          '/features/components/': [
            {
              title: 'Basic',
              items: [
                {
                  title: 'Button',
                  to: '/features/components/basic/button/',
                },
                {
                  title: 'Loading',
                  to: '/features/components/basic/loading/',
                },
                {
                  title: 'Tag',
                  to: '/features/components/basic/tag/',
                },
                {
                  title: 'Icon',
                  to: '/features/components/basic/icon/',
                },
              ],
            },
          ],
        },
        github: 'https://github.com/Casual-UI/casual-ui',
        logo: '/logo.png',
        themeColor: {
          light: '#fff',
          dark: '#000',
          gradient: {
            start: '#41D1FF',
            end: '#BD34FE',
          },
          primary: '#41D1FF',
          hover: '#618BFF',
        },
      }),
      siteConfig: {
        title: 'Casual UI - Svelte',
        description: 'A component library that supports Svelte3+',
      },
    }) as any,
  ],
})

export default config
