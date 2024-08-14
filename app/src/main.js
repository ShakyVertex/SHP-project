import Vue from 'vue'
import App from './App.vue'
import TypeNav from './components/TypeNav'
import router from '@/router'
import store from '@/store'

Vue.component(TypeNav.name, TypeNav)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
