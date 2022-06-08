<template>
  <div class="page-content has-sidebar">
    <div class="doc-content-wrapper">
      <div class="doc-content-container">
        <div class="doc-content">
          <Page :sidebarItems="sidebarItems"></Page>
        </div>
      </div>
      <SidebarRight />
    </div>
  </div>
</template>

<script>
import Page from '@vuepress/theme-default/components/Page.vue'
import SidebarRight from './page/SidebarRight.vue'
import { resolveSidebarItems } from '../utils/index'
export default {
  components: { Page,SidebarRight },
  props: ['sidebarItems'],
  watch: {
    '$page' (val) {
     
    }
  },
  mounted(){
    console.log(this.$page)
    console.log(this.$page.regularPath)
    console.log(this.$site)
    console.log(this.$localePath)
    const a = resolveSidebarItems(this.$page,this.$page.regularPath,this.$site,this.$localePath)
    console.log(a)
    debugger
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
