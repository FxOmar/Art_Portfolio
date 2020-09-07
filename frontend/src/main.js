import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookies from 'vue-cookies'
// Layout
import Default from './layout/Default.vue'
import UserDefault from './layout/UserDefault.vue'
import boradDefault from './layout/boradDefault.vue'

import 'swiper/dist/css/swiper.css'
import './assets/css/tailwind.css'

// define layout
Vue.component('default-layout', Default)
Vue.component('UserDefault-layout', UserDefault)
Vue.component('boradDefault-layout', boradDefault)

Vue.config.productionTip = false

Vue.use(VueCookies)
Vue.use(VueAxios, axios)
Vue.use(VueAwesomeSwiper)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
