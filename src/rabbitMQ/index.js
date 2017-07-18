import config from './config'
import amqp from 'amqplib'
import kue from 'kue'

export default function () {
  amqp.connect(config.host, (err, conn) => {
    if(err) { console.log(err); return; }

    conn.createChannel((err, channel) => {
      // bottleneck
      const ex = 'chiepherd.main'
      // key for registering
      let routing_key = 'admin.register'
      // q with all my answers
      let response_q = routing_key + '.reply'
      // my arguments
      let payload = {}

      // attraper le bottleneck
      channel.assertExchange(ex, 'topic', {durable: true})
      // publier à la bonne route sous-jacente
      channel.publish(ex, routing_key, new Buffer.from(payload))

      channel.assertQueue(response_q).then(function(err,q) {
          channel.bindQueue(q.queue, ex)
          channel.consume(q.queue).then(
            console.log('My answer data are here')
          )
        }
      )
    })
  })
}
