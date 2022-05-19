import {createStore} from "vuex";
import ProductsService from "@/service/ProductsService";

const store = createStore({
    state: {
        items: [],
        products: [],
    },
    getters: {},
    mutations: {
        addItem(state, {id, quantity}) {
            const item = state.items.find(item => item.id === id);
            if (!item) {
                state.items.push({
                    id,
                    quantity: quantity
                })
            } else {
                item.quantity = quantity
            }

        },
        setProducts(state, products) {
            state.products = products
        },
        updateItemQuantity(state, {itemID, quantity}) {
            const item = state.items.find(item => item.id === itemID)
            item.quantity = quantity
        },
        removeItem(state, {itemID}) {
            this.state.items = this.state.items.filter(item => item.id !== itemID)
        },
        addProduct(state, product) {
            this.state.products.push(product)
        },
        updateProduct(state, {productID,newProduct}) {
            let product = this.state.products.find(item => item.id === productID )
            product = newProduct
            console.log(product)
        },
        removeProduct(state, productID) {
            this.state.products = this.state.products.filter(item => item.id !== productID)
        },
    },
    actions: {
        addItem({commit}, {id, quantity}) {
            commit('addItem', {id, quantity})
        },
        updateItemQuantity({commit}, {itemID, quantity}) {
            commit('updateItemQuantity', {itemID, quantity})
        },
        removeItem({commit}, {itemID}) {
            commit('removeItem', {itemID})
        },
        async getProducts({commit}) {
            const products = await ProductsService.getProducts()
            commit('setProducts', products)
        },
        addProduct({commit}, product) {
            commit('addProduct', product)
        },
        updateProduct({commit}, {productID, newProduct}) {
            commit('updateProduct', {productID, newProduct})
        },
        removeProduct({commit}, productID) {
            commit('removeProduct', productID)
        },
    }
})

export default store
