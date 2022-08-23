const {
  defaultTheme
} = require('@vuepress/theme-default')
const {
  registerComponentsPlugin,
} = require('@vuepress/plugin-register-components')
const {
  path
} = require('@vuepress/utils')
const {
  mediumZoomPlugin
} = require('@vuepress/plugin-medium-zoom')

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
    ['meta', {
      name: 'theme-color',
      content: '#3eaf7c'
    }],
    ['meta', {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    }],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black'
      },
    ],
  ],
  theme: defaultTheme({
    repo: 'https://github.com/zavalen/draggable-resizable-vue3',
    editLink: false,
    lastUpdated: false,
    contributors: false,
    navbar: [{
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Examples',
        link: '/examples/no-props',
      },
      {
        text: 'Live playground',
        link: 'https://codesandbox.io/s/github/zavalen/draggable-resizable-vue3?file=/src/App.vue',
      },
    ],
    sidebar: {
      '/guide/': [{
        text: 'Guide',
        children: ['props']
      }],
      '/examples/': [{
        text: 'Examples',
        children: [
          'no-props',
          'basic-props',
          'min-max',
          'not-draggable',
          'not-resizable',
          'width-height-auto',
          'resize-image',
          'resize-image-aspect-ratio',
          'z-index',
          'drag-handle',
          'drag-cancel',
          'axis',
          'basic-parent',
          'parent-selector',
          'basic-grid',
          'show-grid',
          'parent-component',
          'parent-component-custom-grid',
        ],
      }, ],
    },
  }),
}