import Vue from 'vue'
import VueX from 'vuex'

import kanban from './kanban'
import auth from './auth'
import project from './projects'
import users from './users'
import admins from './admins'
import tasks from './tasks'
import tasksAssignment from './tasks_assignment'

Vue.use(VueX)

export default new VueX.Store({
  modules: {
    auth: auth,
    project: project,
    kanban: kanban,
    users: users,
    tasks: tasks,
    admins: admins,
    tasksAssignment: tasksAssignment
  }
})
