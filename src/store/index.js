import Vue from 'vue'
import VueX from 'vuex'

import auth from './auth'

Vue.use(VueX)

export default new VueX.Store({
  modules: {
    auth: auth
  }
})
