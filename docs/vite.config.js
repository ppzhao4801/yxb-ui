import Inspect from 'vite-plugin-inspect'
import mkcert from 'vite-plugin-mkcert'

import { defineConfig,loadEnv } from 'vite'
import { MarkdownTransform } from './.vitepress/plugins/markdown-transform'

export default defineConfig(async ({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '')
    return {
      server:{
        host:true,
        port:8000,
        https:false
      },
      plugins: [
        MarkdownTransform(),
        Inspect(),
        mkcert()
      ],
      optimizeDeps: {
        include: ["element-plus"],
      }
    }
})