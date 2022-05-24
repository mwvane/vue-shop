<template>
  <b-modal :title="title" v-model="productModal.show" ref="productModal"
           @ok="submit"
           @cancel="cancel">
    <b-form @keyup.enter="submit">
      <div class="container">
        <div>
          <div>
            <input type="file" class="d-none" @change="uploadImage" ref="product-image" />
            <b-button variant="outline-warning" class="position-absolute" @click="$refs['product-image'].click()">
              <b>change</b>
            </b-button>
          </div>
          <img class="modal-image" style="width: 100%" :src="imageUrl" alt="product-image">
        </div>
        <div class="modal-input">
          <div>
            <label>product name</label>
            <b-form-input class="my-2" v-model="product.name"/>
          </div>
          <div>
            <label>Price</label>
            <b-form-input class="my-2" v-model="product.price"/>
          </div>
          <div>
            <label>Details</label>
            <textarea type="text" class="form-control my-2" v-model="product.details"/>
          </div>
        </div>
      </div>
    </b-form>
  </b-modal>
</template>

<script>
import {mapState} from "vuex";
import mixin from "@/mixins";

export default {
  name: "ProductModal",
  props: {
    title: {
      type: String,
      default: "Update product"
    }
  },
  mixins: [mixin],
  computed: {
    imageUrl() {
      return this.getProductImage(this.product)
    },
    ...mapState(['productModal'])
  },
  data() {
    return {
      product: {}
    }
  },
  watch: {
    'productModal.data'(product) {
      this.product = {...product};
    }
  },
  methods: {
    submit() {
      this.$emit('modal-update', {...this.product})
    },
    cancel() {
      this.$emit('modal-cancel')
    },
    uploadImage(event) {
      const file = event.target.files[0]

      const reader = new FileReader();
      reader.addEventListener('load', e => {
        this.product.base64Image = e.target.result;
        this.product.image = "";
      })
      reader.readAsDataURL(file);

    }
  }
}
</script>

<style scoped>

</style>