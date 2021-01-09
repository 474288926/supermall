import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

import FastClick from 'fastclick'

// import VueLazyLoad from 'vue-lazyload'

import toast from './components/common/toast'

import 'normalize.css/normalize.css'

import {request} from './network/request.js'

FastClick.attach(document.body)


createApp(App).use(store).use(router).use(VueAxios, axios).use(toast).mount('#app')

