<template>
  <div class="text-center bg-light p-4">
    <div class="row">
      <div class="col-6 mt-2">
        <p class="logo-title"> VUE SHOP </p>
      </div>
      <div class="col-6 mt-2">
        <router-link :to="'/home'" class="text-decoration-none navbar-link mx-3"> Home </router-link>
        <router-link :to="'/products'" class="text-decoration-none navbar-link mx-3"> Products </router-link>
        <router-link to="/items" class="text-decoration-none navbar-link mx-3">
          Items &nbsp;
          <font-awesome-icon icon="cart-shopping"></font-awesome-icon>
          [{{ items.length }}]
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

// eslint-disable-next-line no-unused-vars
import {mapState} from "vuex"

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar",
  computed: {
    ...mapState(['items']),
  },
  methods: {
  }
}
</script>

<style scoped>
.logo-title{
  color: #82ae46;
  font-weight: 800;
  font-size: 20px;
  text-transform: uppercase;
}
.navbar-link {
  font-size: 11px;
  font-weight: 400;
  color: #000;
  text-transform: uppercase;
  letter-spacing: 2px;
  opacity: 1!important;
}
</style>