<template>
  <div style="margin: 20px;">
    <yxb-button type="primary">主要按钮</yxb-button>
    <yxb-button type="success">成功按钮</yxb-button>
    <yxb-button type="info">信息按钮</yxb-button>
    <yxb-button type="warning">警告按钮</yxb-button>
    <yxb-button type="danger">危险按钮</yxb-button>
    <yxb-input/>
    <YxbInput/>
    <ElInput/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input: 'Hello Element UI!'
      };
    }
  };
</script>
