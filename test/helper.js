module.exports = {
  deployContracts: async (artifacts, accounts) => {
    const BancorFormula = artifacts.require('BancorFormula.sol')
    const BancorNetwork = artifacts.require('BancorNetwork.sol')
    const BancorGasPriceLimit = artifacts.require('BancorGasPriceLimit.sol')
    const BancorConverterFactory = artifacts.require('BancorConverterFactory.sol')
    const BancorConverterUpgrader = artifacts.require('BancorConverterUpgrader.sol')
    const TokenPool = artifacts.require('TokenPool.sol')
    const CoinVerseContractIds = artifacts.require('CoinVerseContractIds.sol')
    const ContractFeatures = artifacts.require('ContractFeatures.sol')
    const ContractRegistry = artifacts.require('ContractRegistry.sol')
    let contractRegistry
    let contractIds
    let contractFeatures
    let upgrader
    let tokenPool
    contractRegistry = await ContractRegistry.new()
    contractIds = await CoinVerseContractIds.new()

    contractFeatures = await ContractFeatures.new()
    let contractFeaturesId = await contractIds.CONTRACT_FEATURES.call()
    await contractRegistry.registerAddress(contractFeaturesId, contractFeatures.address)

    let gasPriceLimit = await BancorGasPriceLimit.new(30000000000) // 30gwei
    let gasPriceLimitId = await contractIds.BANCOR_GAS_PRICE_LIMIT.call()
    await contractRegistry.registerAddress(gasPriceLimitId, gasPriceLimit.address)

    let formula = await BancorFormula.new()
    let formulaId = await contractIds.BANCOR_FORMULA.call()
    await contractRegistry.registerAddress(formulaId, formula.address)

    let bancorNetwork = await BancorNetwork.new(contractRegistry.address)
    let bancorNetworkId = await contractIds.BANCOR_NETWORK.call()
    await contractRegistry.registerAddress(bancorNetworkId, bancorNetwork.address)
    await bancorNetwork.setSignerAddress(accounts[3])

    let factory = await BancorConverterFactory.new()
    let bancorConverterFactoryId = await contractIds.BANCOR_CONVERTER_FACTORY.call()
    await contractRegistry.registerAddress(bancorConverterFactoryId, factory.address)

    upgrader = await BancorConverterUpgrader.new(contractRegistry.address)
    let bancorConverterUpgraderId = await contractIds.BANCOR_CONVERTER_UPGRADER.call()
    await contractRegistry.registerAddress(bancorConverterUpgraderId, upgrader.address)

    tokenPool = await TokenPool.new(contractRegistry.address)
    let tokenPoolId = await contractIds.TOKEN_POOL.call()
    await contractRegistry.registerAddress(tokenPoolId, tokenPool.address)

    return {
      contractRegistry,
      contractIds,
      contractFeatures,
      upgrader,
      tokenPool
    }
  },
  initConverter: async (artifacts, accounts, contracts) => {
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
}