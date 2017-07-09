import Vue from 'vue'
import Router from 'vue-router'
import LeftSideBar from 'ç/LeftSideBar'
import MenuBar from 'ç/MenuBar'

import Auth from 'ç/Auth/Auth'
import Connexion from 'ç/Auth/Connexion'
import Inscription from 'ç/Auth/Inscription'

import Home from 'ç/Modules/Home'
import Kanban from 'ç/Modules/Kanban'
import GANTT from 'ç/Modules/GANTT'
import Project from 'ç/Modules/Project'

import ReadProject from 'ç/ProjectPart/ReadProject'
import AddProject from 'ç/ProjectPart/AddProject'
import SearchProject from 'ç/ProjectPart/SearchProject'

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
              component: Project,
              children: [
                {
                  path: '',
                  components:
                  {
                    default: ReadProject,
                    add: AddProject,
                    search: SearchProject
                  }
                }
              ]
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
