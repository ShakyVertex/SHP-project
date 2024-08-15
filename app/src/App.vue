<template lang="en">
  <div>
    <Header></Header>
    <router-view></router-view>
    <!-- 在Home、Search显示，在登录、注册隐藏 -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'app-default',
  components: {
    Header,
    Footer
  },
  mounted() {
    this.$store.dispatch("categoryList")
  },
}
</script>

<style>
  
</style>
