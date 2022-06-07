import YXBUI from "yxb-ui/src"
import "yxb-ui/lib/styles/index.css"
import "./styles/css/app.scss"
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  console.log(options)
  console.log(router)
  console.log(siteData)
  Vue.use(YXBUI)
}