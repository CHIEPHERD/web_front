import Vue from 'vue'
import Router from 'vue-router'
import LeftSideBar from 'ç/LeftSideBar'
import MenuBar from 'ç/MenuBar'

import Auth from 'ç/Auth/Auth'
import Connexion from 'ç/Auth/Connexion'
import Inscription from 'ç/Auth/Inscription'

import Home from 'ç/SLW/Home'
import Kanban from 'ç/SLW/Kanban'
import GANTT from 'ç/SLW/GANTT'
import Project from 'ç/SLW/Project'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: MenuBar,
      children: [
        {
          path: '',
          component: LeftSideBar,
          children: [
            {
              path: '',
              name: 'Home',
              component: Home
            },
            {
              path: 'Kanban',
              name: 'Kanban',
              component: Kanban
            },
            {
              path: 'Project',
              name: 'Project',
              component: Project
            },
            {
              path: 'GANTT',
              name: 'GANTT',
              component: GANTT
            }
          ]
        },
        {
          path: 'Auth',
          component: Auth,
          children: [
            {
              path: '',
              components:
              {
                Connexion: Connexion,
                Inscription: Inscription
              }
            }
          ]
        }
      ]
    }
  ]
})
