<template>
  <div class="example-source-wrapper">
    <div class="example-source language-vue" v-html="decodeURIComponent(source)" />
  </div>
</template>
<script>
export default {
    name: 'SourceCode',
    props:{
        source: {
            type: String,
            required: true,
        }
    }
}
</script>
<style lang="scss" scoped>
.language-vue {
  margin: 0;
  border-radius: 0;
}
</style>