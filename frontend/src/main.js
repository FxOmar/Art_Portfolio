import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'swiper/dist/css/swiper.css'
import './assets/css/tailwind.css'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
