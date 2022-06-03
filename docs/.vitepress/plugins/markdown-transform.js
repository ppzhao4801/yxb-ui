import fs from 'fs'
import path from 'path'

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
export function MarkdownTransform() {
  return {
    name: 'md-transform',
    enforce: 'pre',
    async transform(code, id) {
      if (!id.endsWith('.md')) return
      const componentId = path.basename(id, '.md')
      const append = {
        headers: [],
        footers: [],
        scriptSetups: [
          `const demos = import.meta.globEager('../../examples/${componentId}/*.vue')`,
        ],
      }
      const resMdCode=combineMarkdown(
        code,
        [combineScriptSetup(append.scriptSetups), ...append.headers],
        append.footers
      )
      return resMdCode
    },
  }
}