const path = require("path")
const head = require("./config/head")
const nav =  require("./config/nav")
const sidebars =  require("./config/sidebars")
const mdPlugin = require("./config/plugins")
module.exports={
  lang: 'zh-CN',
  title: '用心保管理端UI',
  description: '用心保通用组件信息',
  base:"/docs/",
  host:"127.0.0.1",
  post:"8080",
  head,
  themeConfig:{
    logo: '/images/logo.svg',
    nav,
    sidebars,
  },
  alias: {
    '@public': path.resolve(__dirname, 'public'),
  },
  enhanceAppFiles: path.resolve(__dirname, 'client.js'),
  markdown:{
    extendMarkdown: (md) => {
      //mdPlugin(md)
    }
  } 
}