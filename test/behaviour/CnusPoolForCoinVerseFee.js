const { Contract, Protocol } = require('../protocol/Bancor')

const CnusPoolForCoinVerseFee = artifacts.require('CnusPoolForCoinVerseFee.sol')

contract('CnusPoolForCoinVerseFee', async () => {
  // Basically, it should pass all test cases of the bancor protocol.
  it('should follow the bancor protocol', async () => {
    Contract(CnusPoolForCoinVerseFee).follows(Protocol.TokenHolder)
  })

  // In addition, it has following extra behaviours
  context('When it receives token', async () => {
    it('should convert Cnus to Bnus and send them to the BnusPoolForReward', async () => {})
  })

  context('When it converts Cnus to Bnus', async () => {
    it('should pass away the daily limit calculation', async () => {})
  })

})