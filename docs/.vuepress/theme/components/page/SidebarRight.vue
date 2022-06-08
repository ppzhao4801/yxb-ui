<template>
  <aside ref="container" class="toc-wrapper">
    <nav class="toc-content">
      <h3 class="toc-content__heading">Contents</h3>
      <ul class="toc-items">
        <li v-for="{ slug, title, children } in headers" :key="slug" class="toc-item">
          <a class="toc-link" :href="`#${slug}`" :title="title">{{ title }}</a>
          <ul v-if="children">
            <li v-for="{ slug: childLink, title: childText } in children" :key="childLink" class="toc-item">
              <a class="toc-link subitem" :href="`#${childLink}`" :title="childText">{{childText}}</a>
            </li>
          </ul>
        </li>
      </ul>
      <div ref="marker" class="toc-marker" />
    </nav>
  </aside>
</template>
<script>
import { groupHeaders } from '@theme/utils/index'
import { useActiveSidebarLinks } from '@theme/utils/active-bar'
export default {
    name: 'SidebarRight',
    data(){
      return {
        headers:[]
      }
    },
    watch: {
      '$page' (page) {
        this.initHeaders(page)
      }
    },
    mounted(){
      this.initHeaders(this.$page)
      const container=this.$refs.container
      const marker=this.$refs.marker
      useActiveSidebarLinks(container, marker)
    },
    methods:{
      initHeaders(page){
        console.log("page",page)
        if(!page.headers){
          this.headers=[]
          return false
        }
        const headers = groupHeaders(page.headers)
        if(headers.length<1){
          this.headers=[]
          return false
        }
        this.headers=headers
        console.log("headers",headers)
      }
    }
}
</script>
<style lang="scss" scoped>
.example-showcase {
  padding: 1.5rem;
  margin: 0.5px;
  background-color: #ffffff;
}
</style>