const BnusConverter = artifacts.require('BnusConverter.sol')
const BnusToken = artifacts.require('BnusToken.sol')
const assert = require('assert')

module.exports = function (deployer) {
  deployer.then(() => {
    return BnusConverter.deployed()
  }).then(async (bnusConverter) => {
    let bnus = await BnusToken.deployed()
    assert(bnus !== undefined, 'Not deployed')
    assert(bnusConverter !== undefined, 'Not deployed')

    await bnusConverter.setConversionFee(50000)
    await bnus.transferOwnership(bnusConverter.address)
    await bnusConverter.acceptTokenOwnership()
  })
}
