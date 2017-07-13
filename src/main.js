// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueX from 'vuex'
import MyStoreObject from './store'
import vueKanban from 'vue-kanban'
import App from './App'
import router from './router'
import 'materialize-css/dist/js/materialize.min.js'
import 'materialize-css/dist/css/materialize.min.css'

Vue.config.productionTip = false
Vue.use(VueX)
Vue.use(vueKanban)

const store = new VueX.Store(MyStoreObject)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
