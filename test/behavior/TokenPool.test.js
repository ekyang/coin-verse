const chai = require('chai')
const assert = chai.assert
const BigNumber = web3.BigNumber
const should = chai.use(require('chai-bignumber')(BigNumber)).should()
const { Contract, Protocol } = require('../protocol/Bancor')
const { deployContracts, initConverter } = require('../helper')
const TokenPool = artifacts.require('TokenPool.sol')

contract('TokenPool', async (accounts) => {
  // Basically, it should pass all test cases of the bancor protocol.
  context('It follows the bancor protocol', async () => {
    it('should follow the bancor protocol', async () => {
      Contract(TokenPool).follows(Protocol.TokenHolder)
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

    describe('Events', async () => {
      it('should emit Airdrop event when the admin proceeded airdrops', async () => {})
    })
    describe('Getters', async () => {
      describe('getBalance()', async () => {
        it('should return the amount of Cnus the contract is holding', async () => {})
      })
    })
    describe('TxFunctions', async () => {
      describe('airdropCnus()', async () => {
        it('should withdraw cnus tokens held by the contract and send them to the designated account', async () => {})
        it('should allow only the owner to call', async () => {})
      })
      describe('airdropBnus()', async () => {
        it('should withdraw cnus tokens held by the contract and send them to the designated account', async () => {})
        it('should allow only the owner to call', async () => {})
      })
      describe('batchAirdropCnus()', async () => {
        it('should withdraw cnus tokens held by the contract and send them to the designated accounts', async () => {})
        it('should allow only the owner to call', async () => {})
      })
      describe('batchAirdropBnus()', async () => {
        it('should withdraw cnus tokens held by the contract and send them to the designated accounts', async () => {})
        it('should allow only the owner to call', async () => {})
      })
      describe('bnusToCnus()', async () => {
        it('should withdraw cnus tokens held by the contract and send them to the designated accounts', async () => {})
        it('should allow only the owner to call', async () => {})
      })
      describe('cnusToBnus()', async () => {
        it('should withdraw cnus tokens held by the contract and send them to the designated accounts', async () => {})
        it('should allow only the owner to call', async () => {})
      })
    })
  })
})