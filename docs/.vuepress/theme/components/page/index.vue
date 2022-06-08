<template>
  <main class="page-content has-sidebar">
    <div class="doc-content-wrapper">
      <div class="doc-content-container">
        <div style="position:relative;" class="doc-content">
          <Content  />
          <PageNav v-bind="{ sidebarItems }" />
        </div>
      </div>
      <SidebarRight />
    </div>
    
  </main>
</template>

<script>
import PageNav from '@vuepress/theme-default/components/PageNav.vue'
import SidebarRight from './SidebarRight.vue'
import { resolveSidebarItems } from '@theme/utils/index'
export default {
  components: { PageNav,SidebarRight },
  props: ['sidebarItems'],
  mounted(){
    // console.log(this.$page)
    // console.log(this.$page.regularPath)
    // console.log(this.$site)
    // console.log(this.$localePath)
    // const a = resolveSidebarItems(this.$page,this.$page.regularPath,this.$site,this.$localePath)
    // console.log(a)
  },
  methods:{
    header(){
      console.log("page",this.$page)
    }
  }
}
</script>
<style>
</style>
