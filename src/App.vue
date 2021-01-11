<template>
  <div id="app">
    <router-view/>
   <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Navigation/Footer";

export default {
  components:{
    Footer
  }
}
</script>

<style lang="scss">



</style>
