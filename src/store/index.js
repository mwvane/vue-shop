import {createStore} from "vuex";
import ProductsService from "@/service/ProductsService";

const store = createStore({
    state: {
        items: [],
        products: [],
    },
    getters: {},
    mutations: {
        addItem(state, product) {
            const id = product.id;
            const item = state.items.find(item => item.id === id);
            if (!item) {
                state.items.push({
                    id,
                    quantity: 1
                })
            } else {
                item.quantity++
            }
        },
        setProducts(state, products) {
            state.products = products
        }
    },
    actions: {
        addItem({commit}, product) {
            commit('addItem', product)
        },
        async getProducts({commit}) {
            const products = await ProductsService.getProducts()
            commit('setProducts', products)
        },
    }
})

export default store
