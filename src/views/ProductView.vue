<template>
  <div class="position-relative">

    <div class="position-absolute" style="top: 20px; right: 20px">
      <b-button variant="outline-primary" @click="createNewProduct">
        <font-awesome-icon icon="plus"></font-awesome-icon>
        New product
      </b-button>
    </div>

    <div class="product" v-for="product in products" :key="product.id">
      <div class="row">
        <div class="col-3">
          <div class="img">
            <img class="modal-image" :src="imageUrl(product)" alt="product-image">
          </div>
        </div>
        <div class="col-4">
          <div class="m-5">
            <p><span>name: </span>{{product.name}}</p>
            <p><span>Price: </span>${{product.price}}</p>
            <p><span>Details: </span>${{product.details}}</p>
          </div>
        </div>
        <div class="col-4">
          <div class="actions my-5">
            <div class="btn btn-warning" @click="editProduct(product)">
              <font-awesome-icon icon="pen"></font-awesome-icon>
            </div>
            <div class="btn btn-danger" @click= "deleteProduct(product.id)" >
              <font-awesome-icon icon="trash"></font-awesome-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ProductModal @modalUpdate="modalUpdate"></ProductModal>
  </div>

</template>

<script>
import {mapActions, mapState} from "vuex";
import ProductModal from "@/components/ProductModal";
import mixin from "@/mixins";

export default {
  name: "ProductView",
  components: {ProductModal},
  computed:{
    ...mapState(["products", "items"]),
  },
  mixins: [mixin],
  methods:{
    ...mapActions(['updateProduct', 'removeProduct', 'addProduct', 'toggleProductModal']),
    update(id){
      this.updateProduct({productID:id, newProduct: {}})
    },
    deleteProduct(productID){
      if (this.items.some(item => item.id === productID)) {
        alert("You can't delete this product")
      } else {
        this.removeProduct(productID)
      }
    },
    add(){
      this.addProduct({})
    },
    imageUrl(product) {
      return this.getProductImage(product)
    },
    editProduct(product) {
      this.toggleProductModal({flag: true, data: product})
    },
    modalUpdate(product) {
      if (product.id) {
        this.updateProduct({productID: product.id, newProduct: product})
      } else {
        this.addProduct(product)
      }
      this.toggleProductModal({flag: false})
    },
    createNewProduct() {
      this.editProduct({image: "no-image.png", name: "", price: 0, details: ""})
    }
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