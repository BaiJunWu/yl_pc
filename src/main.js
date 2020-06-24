import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import './mock'

axios.defaults.baseURL = 'http://localhost:9999/api/v1'

Vue.prototype.$axios = axios

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import "./style/bass.css";

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
