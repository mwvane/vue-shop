import {createStore} from "vuex";
import ProductsService from "@/service/ProductsService";

const store = createStore({
    state: {
        items: [],
        products: [],
    },
    getters: {},
    mutations: {
        addItem(state, {product, quantity}) {
            const id = product.id;
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
        }
    },
    actions: {
        addItem({commit}, {product, quantity}) {
            commit('addItem', {product, quantity})
        },
        async getProducts({commit}) {
            const products = await ProductsService.getProducts()
            commit('setProducts', products)
        },
    }
})

export default store
