const BnusConverter = artifacts.require('BnusConverter.sol')
const BnusToken = artifacts.require('BnusToken.sol')
const CnusTokenMockUp = artifacts.require('CnusTokenMockUp.sol')
const TokenPool = artifacts.require('TokenPool.sol')
const assert = require('assert')
const SAMPLE_COINUS_WALLET = '0x081a83d772284f881d41ac3d3258c32164d0872d' // seed: coinus

module.exports = function (deployer, network) {
  if (network === 'development') return
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
    await bnus.issue(bnusConverter.address, web3.toWei(20000000))
    await bnus.transferOwnership(bnusConverter.address)
    await bnusConverter.acceptTokenOwnership()
    await bnusConverter.setCoinUsAccount(SAMPLE_COINUS_WALLET)

    if (network !== 'mainnet') {
      await cnus.transfer(bnusConverter.address, web3.toWei(1000000))
    } else {
      console.log('Please transfer 1,000,000 CNUS to BnusConverter contract at ', BnusConverter.address)
    }
  })
}
