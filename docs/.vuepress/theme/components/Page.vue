<template>
  <div>
    <Page :sidebarItems="sidebarItems"/>
  </div>
</template>

<script>
import Page from './page/index.vue'
export default {
  components:{Page},
  props: ['sidebarItems'],
  watch: {
    '$page' (val) {
     
    }
  },
  mounted(){
  },
  methods:{
  }
}
</script>
<style>
</style>
