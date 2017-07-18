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
    }
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
    }
  },
  actions: {
    connection ({state}) {
      axios.post(chiepherdFullPath + '/admin/login',
        state.connect_user)
      .then((response) => {
        console.log('do what i need with response')
        console.log(response)
      }).catch((err) => {
        console.log(err)
      })
    },
    inscription ({state}) {
      axios.post(chiepherdFullPath + '/admin/register',
        state.inscription_user)
      .then((response) => {
        console.log('do what i need with response')
        console.log(response)
      }).catch((err) => {
        console.log(err)
      })
    },
    deconnection ({state}) {
      axios.get(chiepherdFullPath + '/admin/logout')
      .then((response) => {
        console.log('do what i need with response')
        console.log(response)
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
