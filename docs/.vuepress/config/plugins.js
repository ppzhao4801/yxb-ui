const path = require("path")
const fs = require("fs")
const MarkdownIt = require("markdown-it")
const mdContainer = require("markdown-it-container")
const highlight = require("./highlight")

const localMd = MarkdownIt()
module.exports = function(md){
  md.use(mdContainer, 'demo', {
    validate(params) {
      return !!params.trim().match(/^demo\s*(.*)$/)
    },

    render(tokens, idx) {
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
      if (tokens[idx].nesting === 1 /* means the tag is opening */) {
        const description = m && m.length > 1 ? m[1] : ''
        const sourceFileToken = tokens[idx + 2]
        let source = ''
        const sourceFile = sourceFileToken.children?.[0].content ?? ''

        if (sourceFileToken.type === 'inline') {
          source = fs.readFileSync(
            path.resolve(__dirname ,"../../", 'examples', `${sourceFile}.vue`),
            'utf-8'
          )
        }
        const demos={
          "button/basic": () => import('../../examples/button/basic.vue'),
        }
        console.log("demos",demos)
        debugger
        if (!source) throw new Error(`Incorrect source file: ${sourceFile}`)
        return `<Demo :demos="demos" source="${encodeURIComponent(
          highlight(source, 'vue')
        )}" path="${sourceFile}" raw-source="${encodeURIComponent(
          source
        )}" description="${encodeURIComponent(localMd.render(description))}">`
      } else {
        return '</Demo>'
      }
    },
  })
}
