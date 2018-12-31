const { Contract, Protocol } = require('../protocol/Bancor')

const CnusPoolForNetworkReward = artifacts.require('CnusPoolForNetworkReward.sol')
const { Contract, Protocol } = require('../protocol/Bancor')

contract('CnusPoolForNetworkReward', async () => {
  // Basically, it should pass all test cases of the bancor protocol.
  context('It follows the bancor protocol', async () => {
    it('should follow the bancor protocol', async () => {
      Contract(CnusPoolForNetworkReward).follows(Protocol.TokenHolder)
    })
  })

  context('It has customized features', async () => {
    describe('Events', async () => {
      it('should emit Airdrop event when the admin proceeded airdrops', async () => {})
    })
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

