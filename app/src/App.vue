<template lang="en">
  <div>
    <Header></Header>
    I am the root component
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: "app-default",
  components: {
    Header,
    Footer
  }
}
</script>

<style>
  
</style>
