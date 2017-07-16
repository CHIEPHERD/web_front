import amqp from 'amqplib/callback_api'
import kue from 'kue'

let Kue = function() {};

Kue.prototype.run = function () {
  createQueueFor('project.create');
}

function createQueueFor(resource, job) {
  let queue = kue.createQueue();
  amqp.connect('192.168.56.200', function(err, conn) {
    if(err) { console.log(err); return; }
    queue.process(resource, function(_job, done) {
      job(conn, done);
    });
    queue.create(resource).save();
  })
}

export default Kue
