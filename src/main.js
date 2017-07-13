// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueX from 'vuex'
import vueKanban from 'vue-kanban'
import App from './App'
import router from './router'
import 'materialize-css/dist/js/materialize.min.js'
import 'materialize-css/dist/css/materialize.min.css'

Vue.config.productionTip = false
Vue.use(VueX)
Vue.use(vueKanban)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

const store = new VueX.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
store.commit('increment')
console.log(store.state.count)
