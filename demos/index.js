import Vue from 'vue';
import App from './src/index.vue';
import 'yxb-ui/src/styles/index.scss';
import YXB from 'yxb-ui/src';

Vue.use(YXB);

new Vue({ // eslint-disable-line
  render: h => h(App)
}).$mount('#app');
