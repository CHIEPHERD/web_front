import config from './config'
import { Paho } from 'mqttws31'
// import kue from 'kue'

// impossible d'utiliser Rmq using amqplib on client side
export default {
  connect: function (road, payload) {
    return new Promise((resolve, reject) => {
      console.log('mqtt start')
      var client = new Paho.MQTT.Client(config.wsbroker, config.wsport, '/ws', 'myclientid_' + parseInt(Math.random() * 100, 10))

      var options = {
        userName: config.username,
        password: config.password,
        timeout: 10,
        cleanSession: false,
        onSuccess: () => {
          console.log('CONNECTION SUCCESS')

          client.subscribe(road, {
            qos: 1,
            onSuccess: () => { console.log('subscribe bottleneck success') },
            onFailure: () => { console.log('subscribe bottleneck failed') }
          })
          let message = new Paho.MQTT.Message(JSON.stringify(payload))
          message.destinationName = road
          client.send(message)
        },
        onFailure: (message) => {
          reject('CONNECTION FAILURE - ' + message.errorMessage)
        }
      }

      if (location.protocol === 'https:') {
        options.useSSL = true
      }

      client.onConnectionLost = (responseObject) => {
        reject('CONNECTION LOST - ' + responseObject.errorMessage)
      }
      client.onMessageArrived = (message) => {
        console.log('RECEIVE ON ' + message.destinationName + ' PAYLOAD ' + message.payloadString)
        let p = JSON.parse(message.payloadString)
        console.log(p)
        resolve(p)
        client.disconnect()
      }

      console.log('CONNECT TO ' + config.wsbroker + ':' + config.wsport)
      client.connect(options)
    })
  }
}
