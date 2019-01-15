const BancorFormula = artifacts.require('BancorFormula.sol')
const BancorNetwork = artifacts.require('BancorNetwork.sol')
const BancorGasPriceLimit = artifacts.require('BancorGasPriceLimit.sol')
const BancorConverterFactory = artifacts.require('BancorConverterFactory.sol')
const BancorConverterUpgrader = artifacts.require('BancorConverterUpgrader.sol')
const TokenPool = artifacts.require('TokenPool.sol')
const CoinVerseContractIds = artifacts.require('CoinVerseContractIds.sol')
const ContractIds = artifacts.require('ContractIds.sol')
const ContractFeatures = artifacts.require('ContractFeatures.sol')
const ContractRegistry = artifacts.require('ContractRegistry.sol')
const BnusToken = artifacts.require('BnusToken.sol')
const CnusTokenMockUp = artifacts.require('CnusTokenMockUp.sol')
const CnusPoolForStaking = artifacts.require('CnusPoolForStaking.sol')

module.exports = async function (deployer, network, accounts) {
  if(network === 'development') return
  deployer.then(() => {
    return ContractRegistry.deployed()
  }).then(async (registry) => {
    let tokenPool = await TokenPool.deployed()
    let cnusPoolForStaking = await CnusPoolForStaking.deployed()
    let contractFeatures = await ContractFeatures.deployed()
    let contractIds = await ContractIds.deployed()
    let coinVerseContractIds = await CoinVerseContractIds.deployed()
    let bancorGasLimit = await BancorGasPriceLimit.deployed()
    let bancorFormula = await BancorFormula.deployed()
    let bancorNetwork = await BancorNetwork.deployed()
    let converterFactory = await BancorConverterFactory.deployed()
    let converterUpgrader = await BancorConverterUpgrader.deployed()
    let cnusAddress
    if (network === 'mainnet') {
      cnusAddress = '0x722f2f3eac7e9597c73a593f7cf3de33fbfc3308'
    } else {
      cnusAddress = (await CnusTokenMockUp.deployed()).address
    }
    let bnus = await BnusToken.deployed()
    let cnus = await CnusTokenMockUp.at(cnusAddress)

    await registry.registerAddress(await contractIds.CONTRACT_FEATURES.call(), contractFeatures.address)
    await registry.registerAddress(await contractIds.BANCOR_GAS_PRICE_LIMIT.call(), bancorGasLimit.address)
    await registry.registerAddress(await contractIds.BANCOR_FORMULA.call(), bancorFormula.address)
    await registry.registerAddress(await contractIds.BANCOR_NETWORK.call(), bancorNetwork.address)
    await registry.registerAddress(await contractIds.BANCOR_CONVERTER_FACTORY.call(), converterFactory.address)
    await registry.registerAddress(await contractIds.BANCOR_CONVERTER_UPGRADER.call(), converterUpgrader.address)
    await registry.registerAddress(await coinVerseContractIds.TOKEN_POOL.call(), tokenPool.address)
    await registry.registerAddress(await coinVerseContractIds.BNUS_TOKEN.call(), bnus.address)
    await registry.registerAddress(await coinVerseContractIds.CNUS_TOKEN.call(), cnus.address)
    await registry.registerAddress(await coinVerseContractIds.CNUS_POOL_FOR_STAKING.call(), cnus.address)
  })
}
