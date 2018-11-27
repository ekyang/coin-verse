module.exports = {
  migrations_directory: './migrations',
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*'
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 500
    }
  }
}
