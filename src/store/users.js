
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
    search_user (state, user) {
      console.log('search_user')
    },
    select_user (state) {
      console.log('select_user')
    },
    add_user (state) {
      console.log('add_user')
    }
  }
}
