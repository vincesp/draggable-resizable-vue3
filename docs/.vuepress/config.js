const { defaultTheme } = require('@vuepress/theme-default')
const {
  registerComponentsPlugin,
} = require('@vuepress/plugin-register-components')
const { path } = require('@vuepress/utils')

module.exports = {
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],
  lang: 'en-US',
  title: 'draggable-resizable-vue3',
  description: 'This is my first VuePress site',
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
  ],
  theme: defaultTheme({
    repo: 'https://github.com/zavalen/draggable-resizable-vue3',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    navbar: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Examples',
        link: '/examples/no-props',
      },
    ],
    sidebar: {
      '/examples/': [
        {
          text: 'Examples',
          children: ['no-props', 'basic-props'],
        },
      ],
    },
  }),
}
