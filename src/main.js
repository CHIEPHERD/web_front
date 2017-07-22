// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueKanban from 'vue-kanban'
import vuelidate from 'vuelidate'

import MyStore from './store'
import App from './App'
import router from './router'
import 'materialize-css/dist/js/materialize.min.js'
import 'materialize-css/dist/css/materialize.min.css'

Vue.config.productionTip = false
Vue.use(vueKanban)
Vue.use(vuelidate)

const store = MyStore
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
