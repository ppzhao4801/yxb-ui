<template>
  <main :class="{ 'page-content': true, 'has-sidebar': true }">
    <div class="doc-content-wrapper" style="position:relative;">
      <div class="doc-content-container">
        <div class="doc-content">
          <Content  />
          <PageNav v-bind="{ sidebarItems }" />
        </div>
      </div>
      <SidebarRight v-show="hasSidebar" />
    </div>
    
  </main>
</template>

<script>
import PageNav from '@vuepress/theme-default/components/PageNav.vue'
import SidebarRight from './SidebarRight.vue'
// import { resolveSidebarItems } from '@theme/utils/index'
import { groupHeaders } from '@theme/utils/index'
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
  computed:{
    hasSidebar(){
      if(!this.$page.headers){
        return false
      }
      const headers = groupHeaders(this.$page.headers)
      if(headers.length<1){
        return flase
      }
      return true
    }
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
