const BancorConverterUpgrader = artifacts.require('BancorConverterUpgrader.sol')
const ContractRegistry = artifacts.require('ContractRegistry.sol')
const assert = require('assert')

module.exports = function (deployer, network) {
  if (network === 'development') return
  deployer.then(() => {
    return ContractRegistry.deployed()
  }).then((registry) => {
    assert(registry !== undefined, 'Not deployed')
    return deployer.deploy(BancorConverterUpgrader, registry.address, { overwrite: false })
  })
}
