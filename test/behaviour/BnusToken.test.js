const { Contract, Protocol } = require('../protocol/Bancor')

const BnusToken = artifacts.require('BnusToken.sol')

contract('BnusToken', async () => {
  // Basically, it should pass all test cases of the bancor protocol.
  it('should follow the bancor protocol', async () => {
    Contract(BnusToken).follows(Protocol.SmartToken)
  })

  // In addition, it has following extra behaviours
  context('When it is purchased from the CoinVerse', async () => {
    it('should not be transferable between EOAs', async () => {})
    it('should have its own guild id', async () => {}) // TODO Don't we need more use case of the guild id not only for the reward game
  })
})