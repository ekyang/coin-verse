const { Contract, Protocol } = require('../protocol/Bancor')

const CnusPoolForCoinVerseFee = artifacts.require('CnusPoolForCoinVerseFee.sol')

contract('CnusPoolForCoinVerseFee', async () => {
  // Basically, it should pass all test cases of the bancor protocol.
  it('should follow the bancor protocol', async () => {
    Contract(CnusPoolForCoinVerseFee).follows(Protocol.TokenHolder)
  })

  // In addition, it has following extra behaviours
  context('When it receives token', async () => {
    it('should convert Cnus to Bnus and send them to the BnusRewardPool', async () => {})
  })

  context('When it converts Cnus to Bnus', async () => {
    it('should pass away the daily limit calculation', async () => {})
  })

  context('When it decides the distribution ratio', async () => {
    it('should follow p3d way', async () => {})
    /**
    it('should be proportional to how long held Bnus', async () => {}) // TODO is this right?
    it('should be proportional to how much held Bnus', async () => {}) // TODO is this right?
    it('should be proportional to how many people are in the same guild', async () => {}) // TODO is this right?
     **/
    it('should have limited pocket size', async () => {}) // TODO Future work
  })
})