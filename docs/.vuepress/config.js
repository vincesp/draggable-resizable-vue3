const { defaultTheme } = require('@vuepress/theme-default')
const {
  registerComponentsPlugin,
} = require('@vuepress/plugin-register-components')
const { path } = require('@vuepress/utils')
const { mediumZoomPlugin } = require('@vuepress/plugin-medium-zoom')

module.exports = {
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
    mediumZoomPlugin({
      selector: 'zoom',
    }),
  ],
  lang: 'en-US',
  title: 'draggable-resizable-vue3',
  description: 'This is my first VuePress site',
  head: [
    [
      'meta',
      {
        name: 'theme-color',
        content: '#3eaf7c',
      },
    ],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes',
      },
    ],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black',
      },
    ],
  ],
  theme: defaultTheme({
    repo: 'https://github.com/zavalen/draggable-resizable-vue3',
    editLink: false,
    lastUpdated: false,
    contributors: false,
    navbar: [
      {
        text: 'Guide',
        link: '/docs/',
      },
      {
        text: 'Examples',
        link: '/docs/examples/no-props',
      },
      {
        text: 'Live playground',
        link: 'https://codesandbox.io/s/github/zavalen/draggable-resizable-vue3?file=/src/App.vue',
      },
    ],
    sidebarDepth: 4,
    sidebar: {
      '/docs/': [
        {
          text: 'Guide',
          collapsible: true,
          children: [
            { text: 'Get started', link: '/docs/' },
            { text: 'Props', link: '/docs/props/' },
            { text: 'Container props', link: '/docs/container-props/' },
            { text: 'Events', link: '/docs/events/' },
            { text: 'Slots', link: '/docs/slots/' },
            { text: 'Styling', link: '/docs/styling/' },
            { text: 'Contributing', link: '/docs/contributing/' },
            { text: 'License', link: '/docs/license/' },
          ],
        },
        {
          collapsible: true,
          text: 'Examples',
          children: [
            '/docs/examples/no-props',
            '/docs/examples/basic-props',
            '/docs/examples/min-max',
            '/docs/examples/not-draggable',
            '/docs/examples/not-resizable',
            '/docs/examples/width-height-auto',
            '/docs/examples/resize-image',
            '/docs/examples/resize-image-aspect-ratio',
            '/docs/examples/z-index',
            '/docs/examples/drag-handle',
            '/docs/examples/drag-cancel',
            '/docs/examples/axis',
            '/docs/examples/basic-parent',
            '/docs/examples/parent-selector',
            '/docs/examples/basic-grid',
            '/docs/examples/show-grid',
            '/docs/examples/parent-component',
            '/docs/examples/parent-component-custom-grid',
            '/docs/examples/custom-handles',
            '/docs/examples/border-handles',
          ],
        },
      ],
    },
  }),
}
