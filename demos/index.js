import Vue from 'vue';
import App from './src/index.vue';
import {Button,Input} from 'yxb-ui';

Vue.use(Button);
Vue.use(Input);

new Vue({ // eslint-disable-line
  render: h => h(App)
}).$mount('#app');
