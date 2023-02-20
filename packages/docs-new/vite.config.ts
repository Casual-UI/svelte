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
          {
            title: 'More',
            items: [
              {
                title: 'Casual UI - Vue',
                to: 'https://casual-ui-vue.donsen.site',
                external: true,
              },
              {
                title: 'Casual UI - React',
                to: 'https://casual-ui-react.donsen.site',
                external: true,
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
              collapsible: true,
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
            {
              title: 'Form',
              collapsible: true,
              items: [
                {
                  title: 'Input',
                  to: '/features/components/form/input/',
                },
                {
                  title: 'Select',
                  to: '/features/components/form/select/',
                },
                {
                  title: 'Radio',
                  to: '/features/components/form/radio/',
                },
                {
                  title: 'Radio Group',
                  to: '/features/components/form/radio-group/',
                },
                {
                  title: 'Checkbox',
                  to: '/features/components/form/checkbox/',
                },
                {
                  title: 'Checkbox Group',
                  to: '/features/components/form/checkbox-group/',
                },
                {
                  title: 'Toggle',
                  to: '/features/components/form/toggle/',
                },
                {
                  title: 'Date Picker',
                  to: '/features/components/form/date-picker/',
                },
                {
                  title: 'Form & Form Item',
                  to: '/features/components/form/form/',
                },
              ],
            },
            {
              title: 'Popups',
              items: [
                {
                  title: 'Dialog',
                  to: '/features/components/popups/dialog/',
                },
                {
                  title: 'Drawer',
                  to: '/features/components/popups/drawer/',
                },
                {
                  title: 'Notification',
                  to: '/features/components/popups/notification/',
                },
                {
                  title: 'Tooltip',
                  to: '/features/components/popups/tooltip/',
                },
              ],
            },
            {
              title: 'Interact',
              items: [
                {
                  title: 'Ajax Bar',
                  to: '/features/components/interact/ajax-bar/',
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
  optimizeDeps: {
    exclude: ['dayjs'],
  },
})

export default config
