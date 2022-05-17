import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

import router from './router'
app.use(router)

import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
app.use(BootstrapVue3)

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone, faPlus, faBars, faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
library.add(faPhone, faPlus, faBars, faCartShopping, faHeart);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
app.component("font-awesome-icon", FontAwesomeIcon)

import store from "@/store";
app.use(store)

// Don't forget to have this line at the end
app.mount('#app')
