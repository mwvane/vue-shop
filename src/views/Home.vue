<template>
  <div class="home">
    <div style="height: 600px; overflow: hidden">
      <img src="../assets/home-image.webp" style="width: 100%" alt="home-image"/>
    </div>
    <div class="text-center my-5">
      <span class="featured-products"> Featured Products </span>
      <h2 class="our-products"> Our Products </h2>
      <span
          class="text-muted"> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia </span>
    </div>
    <div class="products m-5">
      <div class="row justify-content-center">
        <div class="col-3 my-3" v-for="product in products" :key="product.id">
          <product :product="product"></product>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Product from "@/components/Product";
import {mapState, mapActions} from "vuex";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: {
    Product
  },
  computed: {
    ...mapState(['products'])
  },
  methods: {
    ...mapActions(['getProducts'])
  },
  async mounted() {
    await this.getProducts()
  }
}
</script>

<style scoped>
.featured-products {
  font-size: 18px;
  display: block;
  margin-bottom: 10px;
  font-family: "Lora", Georgia, serif;
  font-style: italic;
  color: #82ae46;
}

.our-products {
  position: relative;
  font-size: 40px;
  font-weight: 600;
  color: #000;
  font-family: "Poppins", Arial, sans-serif;
}
</style>