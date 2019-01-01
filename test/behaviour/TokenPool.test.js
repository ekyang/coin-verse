const chai = require('chai')
const assert = chai.assert
const BigNumber = web3.BigNumber
const should = chai.use(require('chai-bignumber')(BigNumber)).should()
const BnusToken = artifacts.require('BnusToken.sol')
const BnusConverter = artifacts.require('BnusConverter.sol')
const BancorFormula = artifacts.require('BancorFormula.sol')
const BancorNetwork = artifacts.require('BancorNetwork.sol')
const BancorGasPriceLimit = artifacts.require('BancorGasPriceLimit.sol')
const BancorConverterFactory = artifacts.require('BancorConverterFactory.sol')
const BancorConverterUpgrader = artifacts.require('BancorConverterUpgrader.sol')
const TokenPool = artifacts.require('TokenPool.sol')
const CnusTokenMockup = artifacts.require('CnusTokenMockup.sol')
const CoinVerseContractIds = artifacts.require('CoinVerseContractIds.sol')
const ContractFeatures = artifacts.require('ContractFeatures.sol')
const ContractRegistry = artifacts.require('ContractRegistry.sol')
const { Contract, Protocol } = require('../protocol/Bancor')

contract('TokenPool', async () => {
  // Basically, it should pass all test cases of the bancor protocol.
  context('It follows the bancor protocol', async () => {
    it('should follow the bancor protocol', async () => {
      Contract(TokenPool).follows(Protocol.TokenHolder)
    })
  })
  context('It has customized features', async () => {
    describe('Events', async () => {
      it('should emit Airdrop event when the admin proceeded airdrops', async () => {})
    })
    describe('Getters', async () => {
      describe('getBalance()', async () => {
        it('should return the amount of Cnus the contract is holding', async () => {})
      })
    })
    describe('TxFunctions', async () => {
      describe('airdrop()', async () => {
        it('should withdraw cnus tokens held by the contract and send them to the designated account', async () => {})
        it('should allow only the owner to call', async () => {})
      })
      describe('batchAirdrop()', async () => {
        it('should withdraw cnus tokens held by the contract and send them to the designated accounts', async () => {})
        it('should allow only the owner to call', async () => {})
      })
    })
  })
})