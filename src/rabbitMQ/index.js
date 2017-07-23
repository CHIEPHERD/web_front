// import config from './config'
// import { Paho } from 'mqttws31'
import axios from 'axios'

// impossible d'utiliser Rmq using amqplib on client side
export default {
  connect: function (road, payload) {
    return new Promise((resolve, reject) => {
      axios.post('http://192.168.56.103:3000' + '/admin/channel', {routing_key: road, payload: payload})
      .then((response) => {
        console.log(response)
        console.log(response.data)
        resolve(response.data)
      }).catch((err) => { reject(err) })
    })
  }
}
