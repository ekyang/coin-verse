const BnusConverter = artifacts.require('BnusConverter.sol')
const BnusToken = artifacts.require('BnusToken.sol')
const CnusTokenMockUp = artifacts.require('CnusTokenMockUp.sol')
const TokenPool = artifacts.require('TokenPool.sol')
const assert = require('assert')

module.exports = function (deployer, network, accounts) {
  deployer.then(() => {
    return BnusConverter.deployed()
  }).then(async (bnusConverter) => {
    let cnusAddress
    if (network === 'mainnet') {
      cnusAddress = '0x722f2f3eac7e9597c73a593f7cf3de33fbfc3308'
    } else {
      cnusAddress = (await CnusTokenMockUp.deployed()).address
    }
    let cnus = await CnusTokenMockUp.at(cnusAddress)
    let bnus = await BnusToken.deployed()
    let tokenPool = await TokenPool.deployed()
    assert(bnus !== undefined, 'Not deployed')
    assert(cnus !== undefined, 'Not deployed')
    assert(bnusConverter !== undefined, 'Not deployed')

    await bnusConverter.setConversionFee(10000)
    await bnus.issue(tokenPool.address, 20000000)
    await bnus.transferOwnership(bnusConverter.address)
    await bnusConverter.acceptTokenOwnership()

    if (network !== 'mainnet') {
      await cnus.transfer(bnusConverter.address, 1000000)
      await cnus.transfer(accounts[1], 1000000)
    }
  })
}
