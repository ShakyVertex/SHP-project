import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 引入路由
import router from '@/router'

new Vue({
  render: h => h(App),
  // 注册路由
  // 注册路由信息：在这里书写router的时候，组件身上都拥有$route, $router属性
  router
}).$mount('#app')
