
export default {
  state: {
    inscription_user: {
      last_name: '',
      first_name: '',
      nick_name: '',
      email: '',
      password: ''
    },
    connect_user: {
      email: '',
      password: ''
    }
  },
  mutations: {
    set_last_name (state, lastName) {
      state.inscription_user.last_name = lastName
    },
    set_first_name (state, firstName) {
      state.inscription_user.first_name = firstName
    },
    set_nick_name (state, nickName) {
      state.inscription_user.nick_name = nickName
    },
    set_email (state, email) {
      state.inscription_user.email = email
    },
    set_password (state, password) {
      state.inscription_user.password = password
    },
    set_connect_email (state, email) {
      state.connect_user.email = email
    },
    set_connect_password (state, password) {
      state.connect_user.password = password
    },
    connection (state) {
      console.log('connection')
    },
    inscription (state) {
      console.log('inscription')
    }
  }
}
