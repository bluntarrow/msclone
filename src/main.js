import { createApp } from 'vue'
import VueLazyLoad from 'vue3-lazyload'

import App from "./App.vue";
import router from './router.js'
import store from './store/store';

import './index.css'


createApp(App).use(router).use(store).use(VueLazyLoad).mount('#app')
