
const mixin = {
    methods: {
        getProductImage(product) {
            if (product.image) {
                return require('./assets/' + product.image)
            } else if (product.base64Image) {
                return product.base64Image
            }
            return ""
        }
    }
}

export default mixin