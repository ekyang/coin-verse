const HDWalletProvider = require('truffle-hdwallet-provider')
require('dotenv').config()  // Store environment-specific variable from '.env' to process.env

module.exports = {
  migrations_directory: './migrations',
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*',
      gasPrice: 1000
    },
    testnet: {
      host: 'localhost',
      port: 8545,
      network_id: '*',
      gasPrice: 1001
    },
    ropsten: {
      provider: () => new HDWalletProvider(process.env.MNENOMIC, 'https://ropsten.infura.io/v3/' + process.env.INFURA_API_KEY),
      network_id: 3,
      gasPrice: 1000000000
    },
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 500
    }
  }
}
