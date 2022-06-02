import Vue from 'vue';
import App from './src/index.vue';
import YXB from 'yxb-ui';
Vue.use(YXB);

new Vue({ // eslint-disable-line
  render: h => h(App)
}).$mount('#app');
