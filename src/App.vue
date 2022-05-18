<template>
  <div>
    <Navbar></Navbar>
    <router-view></router-view>

  </div>
</template>
<script>
import Navbar from "@/components/Navbar";
import {mapActions} from "vuex";

export default {
  components: {
    Navbar,
  },
  methods: {
    ...mapActions(['getProducts'])
  },
  async mounted() {
    await this.getProducts()
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
