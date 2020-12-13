import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';
import Router from './router';

Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  router: Router,
  render: h => h(App),
}).$mount('#app')
