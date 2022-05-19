<template>
  <div class="product" v-for="product in products" :key="product.id">
    <div class="row">
      <div class="col-3">
        <div class="img">
          <img class="modal-image" :src="imageUrl(product)" alt="product-image">
        </div>
      </div>
      <div class="col-4">
        <p><span>name: </span>{{product.name}}</p>
        <p><span>Price: </span>${{product.price}}</p>
        <p><span>Details: </span>${{product.details}}</p>
      </div>
      <div class="col-4">
        <div class="actions">
           <div class="btn btn-warning" v-b-modal.update-modal>
             <font-awesome-icon icon="pen"></font-awesome-icon>
             <b-modal id="update-modal" title="Update products">
               <div class="container">
                 <div>
                    <img  class="modal-image" :src="imageUrl(product)" alt="product-image">
                 </div>
                 <div class="modal-input">
                   <label>product name</label>
                   <input type="text" class="form-control my-2" v-model="product.name"/>
                   <label>Price</label>
                   <input type="text" class="form-control my-2" v-model="product.price"/>
                   <label>Details</label>
                   <textarea type="text" class="form-control my-2" v-model="product.details"/>
                 </div>
               </div>
             </b-modal>
           </div>
          <div class="btn btn-danger" @click= "deleteProduct(product.id)" >
            <font-awesome-icon icon="trash"></font-awesome-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  name: "ProductView",
  computed:{
    ...mapState(["products"]),

  },
  methods:{
    ...mapActions(['updateProduct', 'removeProduct', 'addProduct']),
    update(id){
      this.updateProduct({productID:id, newProduct: {}})
    },
    deleteProduct(productID){
      console.log(productID)
      this.removeProduct(productID)
    },
    add(){
      this.addProduct({})
    },
    imageUrl(product) {
      return require('../assets/' + product.image)
    },
  }
}
</script>

<style scoped>
  .product{
    border: gray 1px solid;
    border-radius: 4px;
    margin-bottom: 4px;
    box-shadow: gray 0 1px 1px 0;
  }
  .product:hover{
    background-color: #fafafa;
  }
  span{
    color: #406311;
  }
  .modal-image{
    width: 100%;
  }
</style>