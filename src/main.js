import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

import {request} from './network/request.js'

createApp(App).use(store).use(router).use(VueAxios, axios).mount('#app')

request({
	url: 'home/multidata'
}).then(res => {
	console.log(res);
}).catch(err => {
	console.log(err);
})
