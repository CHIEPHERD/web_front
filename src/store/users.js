import _ from 'lodash'
import rmq from '../rabbitMQ'

export default {
  state: {
    users: [
      {
        id: 0,
        first_name: 'Yohan',
        last_name: 'Fairfort',
        nick_name: 'Y.F',
        email: '',
        role: 'Admin'
      }
    ],
    filteredUsers: [
      {
        id: 0,
        first_name: 'Yohan',
        last_name: 'Fairfort',
        nick_name: 'Y.F',
        email: '',
        role: 'Admin'
      }
    ],
    selectedUser: { }
  },
  mutations: {
    search_user (state, userLastName, project) {
      state.filteredUsers = _.filter(state.users,
        function (u) { return _.startsWith(u.last_name, userLastName) })
    },
    detail_user (state, user) {
      state.selectedUser = user
    },
    add_user (state) {
      console.log('add_user')
    },
    init_users (state, users) {
      state.users = users
      state.filteredUsers = users
    }
  },
  actions: {
    init_users_from_rmq ({commit}) {
      let initRoad = 'chiepherd.user.list'

      rmq.connect(initRoad, {}).then((response) => {
        commit('init_users', response)
      }).catch((err) => { console.log(err) })
    },
    get_details_of_user_from_rmq ({commit}, user) {
      // get projects -> get tasks
    }
  }
}
