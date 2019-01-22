const chai = require('chai')
const assert = chai.assert
const BigNumber = web3.BigNumber
const should = chai.use(require('chai-bignumber')(BigNumber)).should()
const { Contract, Protocol } = require('../protocol/Bancor')
const { deployContracts, initConverter } = require('../helper')
const BnusConverter = artifacts.require('BnusConverter.sol')

contract('BnusConverter', async (accounts) => {
  // Basically, it should pass all test cases of the bancor protocol.
  context('It follows the bancor protocol', async () => {
    it('should pass the bancor protocol test cases', async () => {
      Contract(BnusConverter).follows(Protocol.BancorConverter)
    })
  })

  context('It has customized features', async () => {
    let contracts
    before(async () => {
      contracts = await deployContracts(artifacts, accounts)
    })

    let converter
    let bnusToken
    let cnusToken
    let tokenPool
    beforeEach(async () => {
      [converter, bnusToken, cnusToken, tokenPool] = await initConverter(artifacts, accounts, contracts)
    })

    describe('Getters', async () => {
      describe('getCnusBalance()', async () => {
        it('should return 1000000 as its initial value', async () => {
          let balance = await converter.getCnusBalance()
          balance.toPrecision().should.equal(web3.toWei(1000000))
        })
        it('should return 1010000 after a user bought Bnus using 10000 of Cnus', async () => {
          await cnusToken.approve(converter.address, web3.toWei(10000), { from: accounts[1] })
          await converter.buyBnus(web3.toWei(10000), 1, { from: accounts[1] })
          let balance = await converter.getCnusBalance()
          balance.toPrecision().should.equal(web3.toWei(1010000))
        })
      })
    })

    describe('TxFunctions', async () => {
      describe('buyBnus()', async () => {
        it('should increase cnus balance of the converter', async () => {
          // Get initial balance
          let initialBalance = await converter.getCnusBalance()

          // Buy Bnus
          let buyAmount = web3.toWei(10000)
          let minReturn = 1
          await cnusToken.approve(converter.address, buyAmount, { from: accounts[1] })
          await converter.buyBnus(buyAmount, minReturn, { from: accounts[1] })

          // Check updated balance
          let updatedBalance = await converter.getCnusBalance()
          initialBalance.add(buyAmount).equals(updatedBalance).should.equal(true)
        })
        it('should send the conversion fee to the token pool instead of burning them', async () => {
          // Get initial balance
          let initialBalance = await bnusToken.balanceOf(tokenPool.address)
          // Buy Bnus
          let buyAmount = web3.toWei(10000)
          let [expectedBnus, fee] = await converter.getPurchaseReturn(cnusToken.address, buyAmount)
          await cnusToken.approve(converter.address, buyAmount, { from: accounts[1] })
          await converter.buyBnus(buyAmount, expectedBnus, { from: accounts[1] })

          // Get updated balance
          let updatedBalance = await bnusToken.balanceOf(tokenPool.address)
          let receivedConversionFee = updatedBalance.sub(initialBalance)
          // Check that bnus tokens are sent to the reward pool successfully
          receivedConversionFee.equals(fee).should.equal(true)
        })
        it('should increase bnus balance of the message sender', async () => {
          // Get initial balance
          let initialBalance = await bnusToken.balanceOf(accounts[1])
          initialBalance.equals(0).should.equal(true)

          // Buy Bnus
          let buyAmount = web3.toWei(10000)
          let [expectedBnus, fee] = await converter.getPurchaseReturn(cnusToken.address, buyAmount)
          await cnusToken.approve(converter.address, buyAmount, { from: accounts[1] })
          await converter.buyBnus(buyAmount, expectedBnus, { from: accounts[1] })

          // Check that bnus tokens are sent to the reward pool successfully
          let updatedBalance = await bnusToken.balanceOf(accounts[1])
          initialBalance.add(expectedBnus).equals(updatedBalance).should.equal(true)
        })
        it('should be executable multiple times', async () => {
          let buyBnus = async () => {
            // Get initial balance
            let initialBalance = await bnusToken.balanceOf(accounts[1])

            // Buy Bnus
            let buyAmount = web3.toWei(10000)
            let [expectedBnus, fee] = await converter.getPurchaseReturn(cnusToken.address, buyAmount)
            await cnusToken.approve(converter.address, buyAmount, { from: accounts[1] })
            await converter.buyBnus(buyAmount, expectedBnus, { from: accounts[1] })
            let updatedBalance = await bnusToken.balanceOf(accounts[1])
            initialBalance.add(expectedBnus).equals(updatedBalance).should.equal(true)
          }
          for (let i = 0; i < 5; i++) {
            await buyBnus()
          }
        })
      })
      describe('sellBnus()', async () => {
        beforeEach(async () => {
          await converter.withdrawTokens(bnusToken.address, tokenPool.address, web3.toWei(100000))
          await tokenPool.airdropBnus(accounts[1], web3.toWei(10000))
        })
        it('should decrease cnus balance of the converter', async () => {
          let initialBalance = await converter.getCnusBalance()

          // Sell Bnus
          let sellAmount = web3.toWei(1000)
          let [expectedCnus, fee] = await converter.getSaleReturn(cnusToken.address, sellAmount)
          await converter.sellBnus(sellAmount, expectedCnus, { from: accounts[1] })

          // Check updated balance
          let updatedBalance = await converter.getCnusBalance()
          initialBalance.sub(expectedCnus).sub(fee).equals(updatedBalance).should.equal(true)
        })
        it('should be executable multiple times', async () => {
          let sellBnus = async () => {
            let initialBalance = await converter.getCnusBalance()

            // Sell Bnus
            let sellAmount = web3.toWei(1000)
            let [expectedCnus, fee] = await converter.getSaleReturn(cnusToken.address, sellAmount)
            await converter.sellBnus(sellAmount, expectedCnus, { from: accounts[1] })

            // Check updated balance
            let updatedBalance = await converter.getCnusBalance()
            initialBalance.sub(expectedCnus).sub(fee).equals(updatedBalance).should.equal(true)
          }
          for (let i = 0; i < 5; i++) {
            await sellBnus()
          }
        })
        it('should send the conversion fee to the token pool instead of burning them', async () => {
          // Sell Bnus
          let sellAmount = web3.toWei(1000)
          let [expectedCnus, fee] = await converter.getSaleReturn(cnusToken.address, sellAmount)
          await bnusToken.approve(converter.address, sellAmount, { from: accounts[1] })
          await converter.sellBnus(sellAmount, expectedCnus, { from: accounts[1] })

          // Check that bnus tokens are sent to the reward pool successfully
          let receivedConversionFee = await cnusToken.balanceOf(tokenPool.address)
          receivedConversionFee.equals(fee).should.equal(true)
        })
      })
    })

    describe('Events', async () => {
      beforeEach(async () => {
        await converter.withdrawTokens(bnusToken.address, tokenPool.address, web3.toWei(100000))
        await tokenPool.airdropBnus(accounts[1], web3.toWei(10000))
      })
      it('should emit Conversion event & PriceDataUpdate event when people buy Bnus', async () => {
        // Get initial balance
        let initialBalance = await converter.getCnusBalance()

        // Buy Bnus
        let buyAmount = web3.toWei(10000)
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
        conversionEvent.args._amount.equals(buyAmount).should.equal(true)
        conversionEvent.args._return.equals(expectedBnus).should.equal(true)
        conversionEvent.args._conversionFee.equals(fee).should.equal(true)

        should.exist(priceDataUpdateEvent)
        priceDataUpdateEvent.args._connectorToken.should.equal(cnusToken.address)
        priceDataUpdateEvent.args._tokenSupply.toNumber().should.be.a('number')
        priceDataUpdateEvent.args._connectorBalance.toNumber().should.be.a('number')
        priceDataUpdateEvent.args._connectorWeight.toNumber().should.be.a('number')
      })

      it('should emit Conversion event and PriceDataUpdate event when people sell Bnus', async () => {
        // Sell Bnus
        let sellAmount = web3.toWei(10)
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
        conversionEvent.args._amount.equals(sellAmount).should.equal(true)
        conversionEvent.args._return.equals(expectedCnus).should.equal(true)
        conversionEvent.args._conversionFee.equals(fee).should.equal(true)

        should.exist(priceDataUpdateEvent)
        priceDataUpdateEvent.args._connectorToken.should.equal(cnusToken.address)
        priceDataUpdateEvent.args._tokenSupply.toNumber().should.be.a('number')
        priceDataUpdateEvent.args._connectorBalance.toNumber().should.be.a('number')
        priceDataUpdateEvent.args._connectorWeight.toNumber().should.be.a('number')
      })
    })
  })
})