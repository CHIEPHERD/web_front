import config from './config'
import amqp from 'amqplib'
import kue from 'kue'

export default function (routing_key) {
  amqp.connect(config.host, (err, conn) => {
    if(err) { console.log(err); return; }

    return conn
  }).then((conn) => {
    conn.createChannel((err, channel) => {
      // bottleneck
      const ex = 'chiepherd.main'
      // q with all my answers
      let response_q = routing_key + '.reply'
      // my arguments
      let payload = {}

      // attraper le bottleneck
      channel.assertExchange(ex, 'topic', {durable: true})
      // publier à la bonne route sous-jacente
      channel.publish(ex, routing_key, new Buffer.from(payload))

      return channel.assertQueue(response_q)
    }).then((err,q) => {
      channel.bindQueue(q.queue, ex)
      return channel.consume(q.queue)
    }).then((data) => {
      console.log('My answer data are here')
      console.log(data)
    })
  })

}
