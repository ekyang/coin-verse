const BnusToken = artifacts.require('BnusToken.sol')
const CnusTokenMockUp = artifacts.require('CnusTokenMockUp.sol')

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(BnusToken, 'CoinUs', 'BNUS', 18)
  if (network != 'mainnet') {
    await deployer.deploy(CnusTokenMockUp)
  }
}

const BancorFormula = artifacts.require('BancorFormula.sol')
const BancorNetwork = artifacts.require('BancorNetwork.sol')
const BancorGasPriceLimit = artifacts.require('BancorGasPriceLimit.sol')
const BancorConverterFactory = artifacts.require('BancorConverterFactory.sol')
const BancorConverterUpgrader = artifacts.require('BancorConverterUpgrader.sol')
const TokenPool = artifacts.require('TokenPool.sol')
const CoinVerseContractIds = artifacts.require('CoinVerseContractIds.sol')
const ContractFeatures = artifacts.require('ContractFeatures.sol')
const ContractRegistry = artifacts.require('ContractRegistry.sol')

module.exports = async function (deployer, network, accounts) {
  const BnusToken = artifacts.require('BnusToken.sol')
  const CnusTokenMockup = artifacts.require('CnusTokenMockup.sol')
  const BnusConverter = artifacts.require('BnusConverter.sol')

  let bnusToken = await BnusToken.new('CoinUs', 'BNUS', 18)
  let cnusToken = await CnusTokenMockup.new()

  let bnusTokenId = await contracts.contractIds.BNUS_TOKEN.call()
  let cnusTokenId = await contracts.contractIds.CNUS_TOKEN.call()
  await contracts.contractRegistry.registerAddress(bnusTokenId, bnusToken.address)
  await contracts.contractRegistry.registerAddress(cnusTokenId, cnusToken.address)

  let bnusConverter = await BnusConverter.new(
    bnusToken.address,
    contracts.contractRegistry.address,
    100000,
    cnusToken.address,
    50000
  )
  await bnusConverter.setConversionFee(50000)
  await bnusToken.issue(accounts[1], 20000)
  await cnusToken.transfer(bnusConverter.address, 5000)
  await cnusToken.transfer(accounts[1], 1000000)

  await bnusToken.transferOwnership(bnusConverter.address)
  await bnusConverter.acceptTokenOwnership()

  return [bnusConverter, bnusToken, cnusToken, contracts.tokenPool]
}
