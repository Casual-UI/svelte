export default {
  sandboxUrl:
    'https://stackblitz.com/edit/sveltejs-kit-template-default-krp2ie?file=src/routes/index.svelte',
  github: 'https://github.com/Casual-UI/svelte',
  // NOTICE: support for maximum 6 features
  features: [
    {
      label: 'Type friendly',
      desc: 'All the components has detail type explanation',
    },
    {
      label: 'Small size',
      desc: 'No extra large third-party lib',
    },
    {
      label: 'Supports dark mode',
      desc: 'All the components have dark mode UI styles',
    },
    {
      label: 'Strong and flexible form',
      desc: 'Provide a form interface for you to fully customize your app',
    },
  ],
  navbar: [
    {
      label: 'Guide',
      children: [
        {
          label: 'Install',
          to: '/guide/install/',
        },
        {
          label: 'Theme Customization',
          to: '/guide/theme-customization/',
        },
      ],
    },
    {
      label: 'Features',
      children: [
        {
          label: 'Components',
          to: '/components/button/',
        },
        {
          label: 'CSS Utils',
          to: '/css-utils/',
        },
      ],
    },
  ],
}
