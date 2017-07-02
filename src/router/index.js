import Vue from 'vue'
import Router from 'vue-router'
import MainWindow from 'ç/MainWindow'
import Home from 'ç/Home'
import MenuBar from 'ç/MenuBar'

import Kanban from 'ç/SLW/Kanban'
import GANTT from 'ç/SLW/GANTT'
import Project from 'ç/SLW/Project'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        MenuBar: MenuBar,
        default: MainWindow,
        SLW: Home
      }
    },
    {
      path: '/Kanban',
      components: {
        MenuBar: MenuBar,
        default: MainWindow,
        SLW: Kanban
      }
    },
    {
      path: '/GANTT',
      components: {
        MenuBar: MenuBar,
        default: MainWindow,
        SLW: GANTT
      }
    },
    {
      path: '/Project',
      components: {
        MenuBar: MenuBar,
        default: MainWindow,
        SLW: Project
      }
    }
  ]
})
