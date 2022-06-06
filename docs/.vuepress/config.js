const path = require("path")
const head = require("./config/head")
const nav =  require("./config/nav")
const sidebar =  require("./config/sidebars")
const mdPlugin = require("./config/plugins")
module.exports={
  lang: 'zh-CN',
  title: '用心保管理端UI',
  description: '用心保通用组件信息',
  base:"/docs/",
  dest:"dist",
  temp:".vuepress/.temp",
  host:"127.0.0.1",
  post:"8080",
  head,
  themeConfig:{
    logo: '/images/logo.svg',
    smoothScroll: true,
    nav,
    sidebar
  },
  alias: {
    '@src': path.resolve(__dirname, '../'),
    '@public': path.resolve(__dirname, 'public'),
    'yxb-ui': path.resolve(__dirname, '../../'),
  },
  enhanceAppFiles: path.resolve(__dirname, 'theme/client.js'),
  markdown:{
    extendMarkdown: (md) => {
      mdPlugin(md)
    }
  },
  plugins:[
  ]
}