<template>
 <div class="item" v-if="product">
   <div class="row">
     <div class="col-4">
       <div>
         <img class="img" :src="imageUrl" alt="item-image">
       </div>
     </div>
     <div class="col-4">
       <div class="details my-5">
         <p><span>Name: </span>{{product.name}}</p>
         <p><span>Total price: </span>${{totalPrice}}</p>
         <QuantityEditor :quantity="item.quantity" @pickValue="updateQuantity"></QuantityEditor>
       </div>
     </div>
     <div class="col-4">
        <div class="actions my-5">
          <button @click="buyProduct" class="btn btn-success btn-sm d-block px-5 py-2" style="width: 159px">
            <font-awesome-icon icon="coins"></font-awesome-icon>
            buy
          </button>
          <button @click="deleteItem" class="btn btn-danger btn-sm px-5 py-2 mt-1" style="width: 159px">
            <font-awesome-icon icon="trash"></font-awesome-icon>
            delete
          </button>
        </div>
     </div>
   </div>
 </div>
</template>

<script>
import QuantityEditor from "@/components/QuantityEditor";
import {mapState} from "vuex";
import {mapActions} from "vuex";

export default {
name: "ChartItem",
  props:{
    item: Object,
  },
  data (){
    return{
      product: null
    }
  },
  computed:{
    ...mapState(["products"]),
    imageUrl() {
      return require('../assets/' + this.product.image)
    },
    totalPrice(){
      return Math.round(this.product.price * this.item.quantity *100)/100
    }
  },
  components:{
    QuantityEditor
  },
  mounted() {
      this.product = this.products.find(item => item.id === this.item.id)
  },
  methods:{
    ...mapActions(['updateItemQuantity']),
    ...mapActions(['removeItem']),
    updateQuantity(val){
      this.updateItemQuantity({itemID: this.item.id, quantity:val})
    },
    deleteItem(){
      this.removeItem({itemID: this.item.id})
    },
    buyProduct(){
      alert("are you sure?")
    },
  }
}
</script>

<style scoped>
.actions{
  display: block;
}
.img{
  width: 200px;
}
.item{
  margin-top: 5px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #b1acac;
}
.item:hover{
  box-shadow: gray 0 2px 4px 1px;
}
.details{
  font-family: "Poppins", Arial, sans-serif;
}
span{
  color: #548711;
}
</style>
