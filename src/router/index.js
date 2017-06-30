import Vue from 'vue'
import Router from 'vue-router'
import MainWindow from 'ç/MainWindow'
import SecondLevelWindows from 'ç/SecondLevelWindows'
import MenuBar from 'ç/MenuBar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        MenuBar: MenuBar,
        default: MainWindow,
        SLW: SecondLevelWindows
      }
    }
  ]
})
