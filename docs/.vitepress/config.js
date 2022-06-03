const head = require("./config/head")
const nav =  require("./config/nav")
const sidebars =  require("./config/sidebars")
const mdPlugin = require("./config/plugins")

const buildTransformers = () => {
    const transformer = () => {
        return {
            props: [],
            needRuntime: true,
        }
    }

    const transformers = {}
    const directives = [
        'infinite-scroll',
        'loading',
        'popover',
        'click-outside',
        'repeat-click',
        'trap-focus',
        'mousewheel',
        'resize',
    ]
    directives.forEach((k) => {
        transformers[k] = transformer
    })

return transformers
}

module.exports={
    base:"/",
    title:"UI组件库",
    description:"描述信息",
    lang: "zh-CN",
    head,
    themeConfig:{
        repo:"element-plus/element-plus",
        docsBranch: "dev",
        docsDir:"docs",

        editLinks: true,
        editLinkText: "Edit this page on GitHub",
        lastUpdated: "Last Updated",

        logo: '/images/element-plus-logo.svg',
        logoSmall: '/images/element-plus-logo-small.svg',
        nav,
        sidebars,
        agolia: {
            apiKey: '377f2b647a96d9b1d62e4780f2344da2',
            appId: 'BH4D9OD16A',
        },
        features:{},
        langs:["zh-CN"]
    },
    locales:{
        "/zh-CN":{
            label:"zh-CN",
            lang:"lang"
        }
    },
    markdown: {
        config: (md) => mdPlugin(md),
    },
    vue: {
        template: {
            ssr: true,
            compilerOptions: {
                directiveTransforms: buildTransformers(),
            }
        }
    },
}