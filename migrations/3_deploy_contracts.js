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
  let contractRegistry = await ContractRegistry.deployed()
  await deployer.deploy([
    CoinVerseContractIds,
    ContractFeatures,
    BancorFormula,
    [BancorGasPriceLimit, 30000000000],
    [BancorNetwork, contractRegistry.address],
    [BancorConverterUpgrader, contractRegistry.address],
    BancorConverterFactory,
    TokenPool
  ])
  // deployer.deploy(CoinVerseContractIds)
  // deployer.deploy(ContractFeatures)
  // deployer.deploy(BancorFormula)
  // deployer.deploy(BancorGasPriceLimit, 30000000000) // 30gwei
  // deployer.deploy(BancorNetwork, contractRegistry.address)
  // deployer.deploy(BancorConverterUpgrader, contractRegistry.address)
  // deployer.deploy(BancorConverterFactory)
  // deployer.deploy(TokenPool)
}
