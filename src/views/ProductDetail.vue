<template>
    <div v-if="!loading">
      <div class="row">
        <div class="col-6 text-center shadow-sm">
          <img  :src="imageUrl" alt="item-image" class="detail-img">
          <QuantityEditor @pickValue="updateQuantity"  class="my-2">
          </QuantityEditor>
        </div>
        <div class="col-6">
          <h1 class="text-center my-3 mb-4">{{item.name}}</h1>
          <p><span class="detail">Description: </span> {{item.details}}</p>
          <p><span class="detail">Price: </span>${{totalPrice}}</p>
        </div>
      </div>
      <div class="submit">
        <div class="btn btn-primary" @click="addToChart">
          <font-awesome-icon icon="cart-shopping"></font-awesome-icon>
          &nbsp;
          add to chart
        </div>
      </div>
    </div>
</template>

<script>
import QuantityEditor from "@/components/QuantityEditor";
import {mapActions, mapState} from "vuex";

export default {
  name: "ProductDetail",
  components:{
    QuantityEditor
  },
  computed: {
    ...mapState(['products']),
    imageUrl() {
      return require('../assets/' + this.item.image)
    },
  },
  data() {
    return {
      loading: true,
      item: {},
      quantity:1,
      totalPrice: 0
    }
  },
  mounted() {
    this.item = this.products.find(product => product.id === Number(this.$route.params.id))
    this.loading = false;
    this.totalPrice = this.item.price
  },
  methods:{
    ...mapActions(["addItem"]),
    updateQuantity(val){
      this.quantity = val
      this.totalPrice = this.item.price * this.quantity
    },
    addToChart(){
      this.addItem({id: this.item.id, quantity:this.quantity})
    }
  }
}
</script>

<style scoped>
.detail-img{
  width: 100%;
}
.detail{
  color: #82ae46;
}
.submit{
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
</style>