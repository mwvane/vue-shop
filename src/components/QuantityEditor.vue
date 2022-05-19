<template>
  <div class="quantity-editor">
    <button class="quantity-btn" @click="decrement">-</button>
    <span class="mx-2">{{ localQuantity }}</span>
    <button class="quantity-btn" @click="increment">+</button>
  </div>
</template>

<script>
export default {
  name: "QuantityEditor",
  data() {
    return {
      localQuantity: 0
    }
  },
  props:{
    quantity: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    decrement() {
      if (this.localQuantity > 1){
        this.localQuantity--
        this.$emit('pickValue',this.localQuantity)
      }
    },
    increment() {
      this.localQuantity++
      this.$emit('pickValue',this.localQuantity)
    }
  },
  mounted() {
    this.localQuantity = this.quantity
  }
}
</script>

<style scoped>
.quantity-editor {
  margin: 0;
  padding: 0;
  position: relative;
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