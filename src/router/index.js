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
import Users from 'ç/Modules/Users'

import ListProject from 'ç/ProjectPart/ListProject'
import ReadShortProject from 'ç/ProjectPart/ReadShortProject'
import AddProjectButton from 'ç/ProjectPart/AddProjectButton'
import SearchProject from 'ç/ProjectPart/SearchProject'
import ReadDetailsProject from 'ç/ProjectPart/ReadDetailProject'

import NewTask from 'ç/Task/NewTask'
import ReadTask from 'ç/Task/ReadTask'
import DeleteTask from 'ç/Task/DeleteTask'

import AddUserButton from 'ç/Users/AddUserButton'
import SearchUser from 'ç/Users/SearchUser'
import CreateUser from 'ç/Users/CreateUser'
import ReadShortUsers from 'ç/Users/ReadShortUsers'

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
              name: 'Users',
              component: Users,
              children: [
                {
                  path: '',
                  components:
                  {
                    default: ReadShortUsers,
                    add: AddUserButton,
                    search: SearchUser,
                    new: CreateUser
                  }
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
                  component: ListProject,
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
                  path: 'details',
                  name: 'DetailProject',
                  component: ReadDetailsProject
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
