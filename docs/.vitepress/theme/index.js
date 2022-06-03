
import Layout from '../views/layout/index.vue'
import Demo from '../views/components/demo/index.vue'
import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'
import './style.css'
import '../views/styles/app.scss'
export default {
  NotFound:()=>'页面不存在',
  Layout: Layout,
  enhanceApp: ({ app,router,siteData }) => {
    app.use(ElementPlus)
    app.component("Demo",Demo)
  },
}
