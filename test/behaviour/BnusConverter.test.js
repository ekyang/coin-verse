const chai = require('chai')
const assert = chai.assert
const BigNumber = web3.BigNumber
const should = chai.use(require('chai-bignumber')(BigNumber)).should()
const { Contract, Protocol } = require('../protocol/Bancor')

const BnusToken = artifacts.require('BnusToken.sol')
const BnusConverter = artifacts.require('BnusConverter.sol')
const BancorFormula = artifacts.require('BancorFormula.sol')
const BancorNetwork = artifacts.require('BancorNetwork.sol')
const BancorGasPriceLimit = artifacts.require('BancorGasPriceLimit.sol')
const BancorConverterFactory = artifacts.require('BancorConverterFactory.sol')
const BancorConverterUpgrader = artifacts.require('BancorConverterUpgrader.sol')
const BnusPoolForNetworkReward = artifacts.require('BnusPoolForNetworkReward.sol')
const CnusPoolForMarketing = artifacts.require('CnusPoolForMarketing.sol')
const CnusTokenMockup = artifacts.require('CnusTokenMockup.sol')
const CoinVerseContractIds = artifacts.require('CoinVerseContractIds.sol')
const ContractFeatures = artifacts.require('ContractFeatures.sol')
const ContractRegistry = artifacts.require('ContractRegistry.sol')

contract('BnusConverter', async (accounts) => {
  // Basically, it should pass all test cases of the bancor protocol.
  context('It follows the bancor protocol', async () => {
    it('should pass the bancor protocol test cases', async () => {
      Contract(BnusConverter).follows(Protocol.BancorConverter)
    })
  })

  context('It has customized features', async () => {
    let contractRegistry
    let contractIds
    let contractFeatures
    let converter
    let upgrader
    let bnusToken
    let cnusToken
    let bnusPoolForNetworkReward
    let cnusPoolForMarketing

    let deployContracts = async () => {
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

      bnusPoolForNetworkReward = await BnusPoolForNetworkReward.new()
      let bnusPoolForNetworkRewardId = await contractIds.BNUS_POOL_FOR_NETWORK_REWARD.call()
      await contractRegistry.registerAddress(bnusPoolForNetworkRewardId, bnusPoolForNetworkReward.address)

      cnusPoolForMarketing = await CnusPoolForMarketing.new()
      let cnusPoolForMarketingId = await contractIds.CNUS_POOL_FOR_MARKETING.call()
      await contractRegistry.registerAddress(cnusPoolForMarketingId, cnusPoolForMarketing.address)
    }

    let initConverter = async () => {
      bnusToken = await BnusToken.new()
      cnusToken = await CnusTokenMockup.new()

      let bnusTokenId = await contractIds.BNUS_TOKEN.call()
      let cnusTokenId = await contractIds.CNUS_TOKEN.call()
      await contractRegistry.registerAddress(bnusTokenId, bnusToken.address)
      await contractRegistry.registerAddress(cnusTokenId, cnusToken.address)

      let bnusConverter = await BnusConverter.new(
        bnusToken.address,
        contractRegistry.address,
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

      return bnusConverter
    }

    before(async () => {
      await deployContracts()
    })

    beforeEach(async () => {
      converter = await initConverter()
    })

    describe('Getters', async () => {
      describe('getCnusBalance()', async () => {
        it('should return 5000 as its initial value', async () => {
          let converter = await initConverter()
          let balance = await converter.getCnusBalance()
          balance.toNumber().should.equal(5000)
        })
        it('should return 15000 after a user bought Bnus using 10000 of Cnus', async () => {
          let converter = await initConverter()
          await cnusToken.approve(converter.address, 10000, { from: accounts[1] })
          await converter.buyBnus(10000, 1, { from: accounts[1] })
          let balance = await converter.getCnusBalance()
          balance.toNumber().should.equal(15000)
        })
      })
    })

    describe('TxFunctions', async () => {
      describe('buyBnus()', async () => {
        it('should increase cnus balance of the converter', async () => {
          // Get initial balance
          let initialBalance = await converter.getCnusBalance()

          // Buy Bnus
          let buyAmount = 10000
          let minReturn = 1
          await cnusToken.approve(converter.address, buyAmount, { from: accounts[1] })
          await converter.buyBnus(buyAmount, minReturn, { from: accounts[1] })

          // Check updated balance
          let updatedBalance = await converter.getCnusBalance()
          updatedBalance.toNumber().should.equal(initialBalance.toNumber() + buyAmount)
        })
        it('should send the conversion fee to the CnusPoolForNetworkReward instead of burning them', async () => {
          // Get initial balance
          let initialBalance = await converter.getCnusBalance()

          // Buy Bnus
          let buyAmount = 10000
          let [expectedBnus, fee] = await converter.getPurchaseReturn(cnusToken.address, buyAmount)
          await cnusToken.approve(converter.address, buyAmount, { from: accounts[1] })
          await converter.buyBnus(buyAmount, expectedBnus, { from: accounts[1] })

          // Check that bnus tokens are sent to the reward pool successfully
          let receivedConversionFee = await bnusToken.balanceOf(bnusPoolForNetworkReward.address)
          receivedConversionFee.toNumber().should.equal(fee.toNumber())
        })
      })
      describe('sellBnus()', async () => {
        it('should decrease cnus balance of the converter', async () => {
          let initialBalance = await converter.getCnusBalance()

          // Sell Bnus
          let sellAmount = 1000
          let [expectedCnus, fee] = await converter.getSaleReturn(cnusToken.address, sellAmount)
          await bnusToken.approve(converter.address, sellAmount, { from: accounts[1] })
          await converter.sellBnus(sellAmount, expectedCnus, { from: accounts[1] })

          // Check updated balance
          let updatedBalance = await converter.getCnusBalance()
          updatedBalance.toNumber().should.equal(initialBalance.toNumber() - (expectedCnus.toNumber() + fee.toNumber()))
        })
        it('should send the conversion fee to the CnusPoolForNetworkReward instead of burning them', async () => {
          // Sell Bnus
          let sellAmount = 1000
          let [expectedCnus, fee] = await converter.getSaleReturn(cnusToken.address, sellAmount)
          await bnusToken.approve(converter.address, sellAmount, { from: accounts[1] })
          await converter.sellBnus(sellAmount, expectedCnus, { from: accounts[1] })

          // Check that bnus tokens are sent to the reward pool successfully
          let receivedConversionFee = await cnusToken.balanceOf(cnusPoolForMarketing.address)
          receivedConversionFee.toNumber().should.equal(fee.toNumber())
        })
      })
    })

    describe('Events', async () => {
      it('should emit Conversion event & PriceDataUpdate event when people buy Bnus', async () => {
        // Get initial balance
        let initialBalance = await converter.getCnusBalance()

        // Buy Bnus
        let buyAmount = 10000
        let [expectedBnus, fee] = await converter.getPurchaseReturn(cnusToken.address, buyAmount)
        await cnusToken.approve(converter.address, buyAmount, { from: accounts[1] })
        let receipt = await converter.buyBnus(buyAmount, expectedBnus, { from: accounts[1] })

        // Check emitted events
        let conversionEvent
        let priceDataUpdateEvent
        receipt.logs.forEach(log => {
            if (log.event === 'Conversion') {
              should.not.exist(conversionEvent)
              conversionEvent = log
            } else if (log.event === 'PriceDataUpdate') {
              should.not.exist(priceDataUpdateEvent)
              priceDataUpdateEvent = log
            }
          }
        )
        should.exist(conversionEvent)
        conversionEvent.args._fromToken.should.equal(cnusToken.address)
        conversionEvent.args._toToken.should.equal(bnusToken.address)
        conversionEvent.args._trader.should.equal(accounts[1])
        conversionEvent.args._amount.toNumber().should.equal(buyAmount)
        conversionEvent.args._return.toNumber().should.equal(expectedBnus.toNumber())
        conversionEvent.args._conversionFee.toNumber().should.equal(fee.toNumber())

        should.exist(priceDataUpdateEvent)
        priceDataUpdateEvent.args._connectorToken.should.equal(cnusToken.address)
        priceDataUpdateEvent.args._tokenSupply.toNumber().should.be.a('number')
        priceDataUpdateEvent.args._connectorBalance.toNumber().should.be.a('number')
        priceDataUpdateEvent.args._connectorWeight.toNumber().should.be.a('number')
      })

      it('should emit Conversion event and PriceDataUpdate event when people sell Bnus', async () => {
        let initialBalance = await converter.getCnusBalance()

        // Sell Bnus
        let sellAmount = 1000
        let [expectedCnus, fee] = await converter.getSaleReturn(cnusToken.address, sellAmount)
        await bnusToken.approve(converter.address, sellAmount, { from: accounts[1] })
        let receipt = await converter.sellBnus(sellAmount, expectedCnus, { from: accounts[1] })

        // Check emitted events
        let conversionEvent
        let priceDataUpdateEvent
        receipt.logs.forEach(log => {
            if (log.event === 'Conversion') {
              should.not.exist(conversionEvent)
              conversionEvent = log
            } else if (log.event === 'PriceDataUpdate') {
              should.not.exist(priceDataUpdateEvent)
              priceDataUpdateEvent = log
            }
          }
        )
        should.exist(conversionEvent)
        conversionEvent.args._fromToken.should.equal(bnusToken.address)
        conversionEvent.args._toToken.should.equal(cnusToken.address)
        conversionEvent.args._trader.should.equal(accounts[1])
        conversionEvent.args._amount.toNumber().should.equal(sellAmount)
        conversionEvent.args._return.toNumber().should.equal(expectedCnus.toNumber())
        conversionEvent.args._conversionFee.toNumber().should.equal(fee.toNumber())

        should.exist(priceDataUpdateEvent)
        priceDataUpdateEvent.args._connectorToken.should.equal(cnusToken.address)
        priceDataUpdateEvent.args._tokenSupply.toNumber().should.be.a('number')
        priceDataUpdateEvent.args._connectorBalance.toNumber().should.be.a('number')
        priceDataUpdateEvent.args._connectorWeight.toNumber().should.be.a('number')
      })
    })
  })
})