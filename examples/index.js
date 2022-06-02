import Vue from 'vue';
import App from './src/index.vue';
import Button from 'yxb-ui/lib/components/button';
debugger
Vue.use(Button);

new Vue({ // eslint-disable-line
  render: h => h(App)
}).$mount('#app');
