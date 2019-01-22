const CnusPoolForStaking = artifacts.require('CnusPoolForStaking.sol')
const ContractRegistry = artifacts.require('ContractRegistry.sol')
const assert = require('assert')
const SAMPLE_COINUS_WALLET = '0x081a83d772284f881d41ac3d3258c32164d0872d' // seed: coinus

module.exports = function (deployer, network) {
  if (network === 'development') return
  deployer.deploy(CnusPoolForStaking, { overwrite: false }).then(async cnusPoolForStaking => {
    let registry = await ContractRegistry.deployed()
    assert(registry !== undefined, 'Not deployed')
    assert(cnusPoolForStaking !== undefined, 'Not deployed')
    await cnusPoolForStaking.setRegistry(registry.address)
    await cnusPoolForStaking.setCoinUsAccount(SAMPLE_COINUS_WALLET)
  })
}
