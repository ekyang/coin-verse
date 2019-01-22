const TokenPool = artifacts.require('TokenPool.sol')
const ContractRegistry = artifacts.require('ContractRegistry.sol')
const assert = require('assert')

module.exports = function (deployer, network) {
  if (network === 'development') return
  deployer.deploy(TokenPool, { overwrite: false }).then(async tokenPool => {
    let registry = await ContractRegistry.deployed()
    assert(registry !== undefined, 'Not deployed')
    assert(tokenPool !== undefined, 'Not deployed')
    await tokenPool.setRegistry(registry.address)
  })
}
