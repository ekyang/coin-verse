const BnusToken = artifacts.require('BnusToken.sol')
const CnusTokenMockUp = artifacts.require('CnusTokenMockUp.sol')

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(BnusToken, 'CoinUs', 'BNUS', 18)
  let cnusAddress
  if (network == 'mainnet') {
    cnusAddress = '0x722f2f3eac7e9597c73a593f7cf3de33fbfc3308'
  } else {
    await deployer.deploy(CnusTokenMockUp)
    cnusAddress = (await CnusTokenMockUp.deployed()).address
  }
  let bnus = await BnusToken.deployed()
  let cnus = await CnusTokenMockUp.at(cnusAddress)
  await deployer.deploy(BnusConverter,
    bnus.address,
    (await CoinVerseContractIds.deployed()).address,
    100000,
    cnus.address,
    50000
  )
  let bnusConverter = await BnusConverter.deployed()
  await bnusConverter.setConversionFee(50000)
  // await bnus.issue(accounts[1], 20000)
  // await cnus.transfer(bnusConverter.address, 5000)
  // await cnus.transfer(accounts[1], 1000000)
  await bnus.transferOwnership(bnusConverter.address)
  await bnusConverter.acceptTokenOwnership()
}
