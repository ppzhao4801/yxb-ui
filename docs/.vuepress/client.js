
import demos from "@src/examples"
import YXBUI from "yxb-ui"
import "yxb-ui/lib/styles/index.css"
import Demo from './components/demo/index.vue'
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  Vue.use(YXBUI)
  Vue.component("Demo",Demo)
  console.log(demos)
  Vue.prototype.$demos=demos
}