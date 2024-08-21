import Vue from 'vue'
import App from './App.vue'
import TypeNav from './components/TypeNav'
import router from '@/router'
import store from '@/store'
import '@/mock/mockServe'
import 'swiper/css/swiper.css'
import Carousel from '@/components/Carousel'

Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  router,
  store,
}).$mount('#app')
