const BnusConverter = artifacts.require('BnusConverter.sol')
const BnusToken = artifacts.require('BnusToken.sol')
const CnusTokenMockUp = artifacts.require('CnusTokenMockUp.sol')
const ContractRegistry = artifacts.require('ContractRegistry.sol')
const assert = require('assert')

module.exports = async function (deployer, network, accounts) {
  if(network === 'development') return
  deployer.then(() => {
    return ContractRegistry.deployed()
  }).then(async (registry) => {
    let cnusAddress
    if (network === 'mainnet') {
      cnusAddress = '0x722f2f3eac7e9597c73a593f7cf3de33fbfc3308'
    } else {
      cnusAddress = (await CnusTokenMockUp.deployed()).address
    }
    let bnus = await BnusToken.deployed()
    let cnus = await CnusTokenMockUp.at(cnusAddress)

    assert(bnus !== undefined, 'Not deployed')
    assert(cnus !== undefined, 'Not deployed')
    assert(registry !== undefined, 'Not deployed')

    return deployer.deploy(BnusConverter,
      bnus.address,
      registry.address,
      100000,
      cnus.address,
      50000
    )
  })
}
