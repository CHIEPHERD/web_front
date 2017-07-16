import Vue from 'vue'
import VueX from 'vuex'

import auth from './auth'
import project from './projects'

Vue.use(VueX)

export default new VueX.Store({
  modules: {
    auth: auth,
    project: project
  }
})
