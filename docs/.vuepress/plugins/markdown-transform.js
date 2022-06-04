const { join } = require('path')
const path = require('path')

const combineScriptSetup = (codes) =>{
  return `\n<script setup>
  ${codes.join('\n')}
  </script>`
}
const combineMarkdown = (code, headers, footers) => {
  const frontmatterEnds = code.indexOf('---\n\n') + 4
  const firstSubheader = code.search(/\n## \w/)
  const sliceIndex = firstSubheader < 0 ? frontmatterEnds : firstSubheader
  if (headers.length > 0){
    code =code.slice(0, sliceIndex) + headers.join('\n') + code.slice(sliceIndex)
  }
  code += footers.join('\n')
  return `${code}\n`
}
module.exports= (options, ctx) => {
  console.log(options,ctx)
  debugger
  return {
    name: 'md-transform',
    enforce: 'pre',
    updated(a,b,c){
      debugger
    },
    generated(a,b,c){
      debugger
    },
    async ready(code, id) {
      debugger
    },
  }
}