import Vue from 'vue'
import VueX from 'vuex'

import auth from './auth'
import project from './projects'
import users from './users'
import admins from './admins'
import tasks from './tasks'

Vue.use(VueX)

export default new VueX.Store({
  modules: {
    auth: auth,
    project: project,
    users: users,
    tasks: tasks,
    admins: admins
  }
})
