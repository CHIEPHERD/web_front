import config from './config'
import { Paho } from 'mqttws31'
// import kue from 'kue'

// impossible d'utiliser Rmq using amqplib on client side
export default {
  connect: function () {
    return new Promise((resolve, reject) => {
      console.log('mqtt start')
      var client = new Paho.MQTT.Client(config.wsbroker, config.wsport, '/ws', 'myclientid_' + parseInt(Math.random() * 100, 10))

      client.onConnectionLost = (responseObject) => {
        reject('CONNECTION LOST - ' + responseObject.errorMessage)
      }
      client.onMessageArrived = (message) => {
        resolve('RECEIVE ON ' + message.destinationName + ' PAYLOAD ' + message.payloadString)
        let p = JSON.parse(message.payloadString)
        console.log(p)
      }

      var options = {
        userName: config.username,
        password: config.password,
        timeout: 3,
        onSuccess: () => {
          console.log('CONNECTION SUCCESS')
          client.subscribe('/topic/' + config.bottleneck, {
            qos: 1,
            onSuccess: () => { console.log('subscribe success') },
            onFailure: () => { console.log('subscribe failed') }
          })
          resolve(client)
        },
        onFailure: (message) => {
          reject('CONNECTION FAILURE - ' + message.errorMessage)
        }
      }

      if (location.protocol === 'https:') {
        options.useSSL = true
      }

      console.log('CONNECT TO ' + config.wsbroker + ':' + config.wsport)
      client.connect(options)
    })
  },
  send: function (client, road, payload) {
    return new Promise((resolve, reject) => {
      let message = new Paho.MQTT.Message(JSON.stringify(payload))

      message.destinationName = road
      console.log('SEND ON ' + message.destinationName + ' PAYLOAD ' + payload)
      client.send(message)
    })
  }
}
