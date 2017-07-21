import axios from 'axios'

const chiepherdApiUrl = '192.168.56.103'
const chiepherdApiPort = 3000
const chiepherdFullPath = 'http://' + chiepherdApiUrl + ':' + chiepherdApiPort

export default {
  state: {
    inscription_user: {
      lastname: '',
      firstname: '',
      nickname: '',
      email: '',
      password: '',
      password_confirmation: ''
    },
    connect_user: {
      email: '',
      password: ''
    },
    admin: {},
    is_connected: false
  },
  mutations: {
    set_last_name (state, lastName) {
      state.inscription_user.lastname = lastName
    },
    set_first_name (state, firstName) {
      state.inscription_user.firstname = firstName
    },
    set_nick_name (state, nickName) {
      state.inscription_user.nickname = nickName
    },
    set_email (state, email) {
      state.inscription_user.email = email
    },
    set_password (state, password) {
      state.inscription_user.password = password
    },
    set_cpassword (state, cPassword) {
      state.inscription_user.password_confirmation = cPassword
    },
    set_connect_email (state, email) {
      state.connect_user.email = email
    },
    set_connect_password (state, password) {
      state.connect_user.password = password
    },
    set_admin (state, admin) {
      state.admin = admin
    },
    inverse_connected_status (state) {
      state.is_connected = !state.is_connected
    }
  },
  actions: {
    connection ({state, commit}) {
      return new Promise((resolve, reject) => {
        axios.post(chiepherdFullPath + '/admin/login',
          state.connect_user)
        .then((response) => {
          commit('set_connect_email', '')
          commit('set_connect_password', '')
          commit('inverse_connected_status')
          commit('set_admin', response)
          resolve(response)
        }).catch((err) => {
          reject(err)
        })
      })
    },
    inscription ({state, commit}) {
      return new Promise((resolve, reject) => {
        axios.post(chiepherdFullPath + '/admin/register',
          state.inscription_user)
        .then((response) => {
          console.log('do what i need with response')
          console.log(response)
          commit('set_last_name', '')
          commit('set_first_name', '')
          commit('set_nick_name', '')
          commit('set_email', '')
          commit('set_password', '')
          commit('set_cpassword', '')
          resolve(response)
        }).catch((err) => {
          reject(err)
        })
      })
    },
    deconnection ({state, commit}) {
      return new Promise((resolve, reject) => {
        axios.get(chiepherdFullPath + '/admin/logout')
        .then((response) => {
          commit('inverse_connected_status')
          commit('set_admin', {})
          console.log(response)
        }).catch((err) => {
          console.log(err)
        })
      })
    }
  }
}
