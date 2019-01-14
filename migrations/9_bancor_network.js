const BancorNetwork = artifacts.require('BancorNetwork.sol')
const ContractRegistry = artifacts.require('ContractRegistry.sol')
const assert = require('assert')

module.exports = function (deployer) {
  deployer.then(() => {
    return ContractRegistry.deployed()
  }).then((registry) => {
    assert(registry !== undefined, 'Not deployed')
    return deployer.deploy(BancorNetwork, registry.address)
  })
}
