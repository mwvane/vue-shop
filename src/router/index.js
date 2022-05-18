import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProductDetail from "@/views/ProductDetail";
import Items from "@/views/Items";
const routes = [
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/product-detail/:id',
    name: 'product-detail',
    component: ProductDetail
  },
  {
    path: '/items',
    name: 'items',
    component: Items
  }

]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
