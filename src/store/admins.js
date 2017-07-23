import _ from 'lodash'
import rmq from '../rabbitMQ'

export default {
  state: {
    admins: [],
    filteredAdmins: [],
    selectedAdmin: { }
  },
  mutations: {
    search_admin (state, adminLastName) {
      state.filteredAdmins = _.filter(state.admins,
        function (u) { return _.startsWith(u.last_name, adminLastName) })
    },
    detail_admin (state, admin) {
      console.log('select_admin')
      state.selectedAdmin = admin
    },
    init_admins (state, admins) {
      state.admins = admins
      state.filteredAdmins = admins
    }
  },
  actions: {
    init_admins_from_rmq ({commit}) {
      let initRoad = 'chiepherd.admin.list'

      rmq.connect(initRoad, {}).then((response) => {
        commit('init_admins', response)
      }).catch((err) => { console.log(err) })
    },
    update_admin_from_rmq ({commit}, admin) {
      let updateUser = 'chiepherd.user.update'

      rmq.connect(updateUser, admin).then((response) => {
        commit('init_admins', response)
      }).catch((err) => { console.log(err) })
    }
  }
}
