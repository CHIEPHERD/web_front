export default {
  wsbroker: '192.168.56.200',
  wsport: 15675,
  bottleneck: 'chiepherd.main',
  username: 'root',
  password: 'root',
  connectionTimeout: 10000,
  authMechanism: 'AMQPLAIN',
  noDelay: true,
  ssl: {
    enabled: false
  }
}
