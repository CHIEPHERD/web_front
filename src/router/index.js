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
import Task from 'ç/Modules/Task'
import User from 'ç/Modules/User'

import ReadShortProject from 'ç/ProjectPart/ReadShortProject'
import AddProjectButton from 'ç/ProjectPart/AddProjectButton'
import SearchProject from 'ç/ProjectPart/SearchProject'

import NewTask from 'ç/Task/NewTask'
import ReadTask from 'ç/Task/ReadTask'
import DeleteTask from 'ç/Task/DeleteTask'

import CreateUser from 'ç/Users/CreateUser'
import ReadUser from 'ç/Users/ReadUser'

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
              path: 'kanban',
              name: 'Kanban',
              component: Kanban
            },
            {
              path: 'tasks',
              name: 'Task',
              component: Task,
              children: [
                {
                  path: 'new',
                  name: 'NewTask',
                  component: NewTask
                },
                {
                  path: 'read',
                  name: 'ReadTask',
                  component: ReadTask
                },
                {
                  path: 'delete',
                  name: 'DeleteTask',
                  component: DeleteTask
                }
              ]
            },
            {
              path: 'users',
              name: 'User',
              component: User,
              children: [
                {
                  path: 'read',
                  name: 'ReadUser',
                  component: ReadUser
                },
                {
                  path: 'create',
                  name: 'CreateUser',
                  component: CreateUser
                }
              ]
            },
            {
              path: 'projects',
              name: 'Project',
              component: Project,
              children: [
                {
                  path: '',
                  components:
                  {
                    default: ReadShortProject,
                    add: AddProjectButton,
                    search: SearchProject
                  }
                }
              ]
            },
            {
              path: 'GANTT',
              name: 'GANTT',
              component: GANTT
            },
            {
              path: 'auth',
              name: 'Auth',
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
    }
  ]
})
