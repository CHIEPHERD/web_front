export default {
  host: 'localhost',
  port: 5672,
  login: 'guest',
  password: 'guest',
  connectionTimeout: 10000,
  authMechanism: 'AMQPLAIN',
  noDelay: true,
  ssl: {
   enabled : false
  }
}
