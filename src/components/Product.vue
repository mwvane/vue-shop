<template>
  <div class="text-center">
    <div class="card card-hoverable" @click="goToDetails">
      <div class="card-header bg-white border-0">
        <img :src="imageUrl" style="width: 100%" :alt="`product-image-${product.name}`"/>
      </div>
      <div class="card-body">
        <p> {{ product.name }} </p>
        <p class="price"> ${{ product.price }} </p>
        <div class="quantity-editor">
          <button class="quantity-btn" @click="decrement">-</button>
          <span class="mx-2">{{ quantity }}</span>
          <button class="quantity-btn" @click="increment">+</button>
        </div>
        <div class="product-buttons position-absolute" style="left: calc(50% - 60px); bottom: 20px">
          <div class="inner-product-buttons">
            <button class="product-button">
              <font-awesome-icon icon="bars"/>
            </button>
            <button class="product-button mx-1">
              <font-awesome-icon @click="buyProduct" icon="cart-shopping"/>
            </button>
            <button class="product-button">
              <font-awesome-icon icon="heart"/>
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import {mapActions} from "vuex"

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Product",
  props: ['product'],
  data() {
    return {
      quantity: 1
    }
  }
  ,
  computed: {
    imageUrl() {
      return require('../assets/' + this.product.image)
    },
    productLink() {
      return '/product-detail/' + this.product.id
    }
  },
  methods: {
    ...mapActions(['addItem']),
    buyProduct(e) {
      e.stopImmediatePropagation()
      this.addItem({product: this.product, quantity: this.quantity})
    },
    decrement(e) {
      e.stopImmediatePropagation()
      if (this.quantity > 1) {
        this.quantity--
      }
    },
    increment(e) {
      e.stopImmediatePropagation()
      this.quantity++
    },
    goToDetails() {
      this.$router.push({
        name: "product-detail",
        params: {id: this.product.id}
      })
    }
  }
}
</script>

<style scoped>
.price {
  color: #82ae46;
  font-weight: 400;
  visibility: visible;
}

.card-hoverable:hover {
  border: 0 !important;
  box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15) !important;
  cursor: pointer;
  transition: .1s ease-in;
}

.product-button {
  color: #82ae46;
  border: 1px solid #82ae46 !important;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
}

.product-button:hover {
  background-color: #82ae46;
  color: #fff;
}

.product-button:active {
  background-color: #406311;
}

.inner-product-buttons {
  display: none;
}

.card-hoverable:hover .inner-product-buttons {
  display: block;
}

.card-hoverable:hover .price {
  visibility: hidden;
}

.card-hoverable:hover .quantity-editor {
  display: block;
}

.quantity-editor {
  position: absolute;
  top: 5px;
  right: 5px;
  display: none;
}

.quantity-btn {
  background: #82ae46;
  color: white;
  width: 25px;
  height: 25px;
  text-align: center;
  border: #82ae46 1px solid;
  border-radius: 3px;
}

.quantity-btn:hover {
  box-shadow: #82ae46 0 1px 4px 1px;

}
</style>