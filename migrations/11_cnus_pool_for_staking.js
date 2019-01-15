const CnusPoolForStaking = artifacts.require('CnusPoolForStaking.sol')
const ContractRegistry = artifacts.require('ContractRegistry.sol')
const assert = require('assert')

module.exports = function (deployer) {
  deployer.deploy(CnusPoolForStaking).then(async cnusPoolForStaking => {
    let registry = await ContractRegistry.deployed()
    assert(registry !== undefined, 'Not deployed')
    assert(cnusPoolForStaking !== undefined, 'Not deployed')
    await cnusPoolForStaking.setRegistry(registry.address)
  })
}