import { defineConfig } from 'vite'
import { sveltepress } from '@sveltepress/vite'
import { defaultTheme } from '@sveltepress/theme-default'

const config = defineConfig({
  plugins: [
    sveltepress({
      theme: defaultTheme({
        navbar: [
          // Add your navbar configs here
        ],
        sidebar: {
          // Add your sidebar configs here
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
