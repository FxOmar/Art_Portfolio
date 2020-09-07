import Vue from 'vue'
import Vuex from 'vuex'
import VueCookies from 'vue-cookies'
import Auth from './Auth/user'

Vue.use(Vuex)
Vue.use(VueCookies)

export default new Vuex.Store({
  modules: {
    Auth
  }
})
