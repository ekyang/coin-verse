const { Contract, Protocol } = require('../protocol/Bancor')

const BnusPoolForReward = artifacts.require('BnusPoolForReward.sol')

contract('BnusPoolForReward', async () => {
  // Basically, it should pass all test cases of the bancor protocol.
  it('should follow the bancor protocol', async () => {
    Contract(BnusPoolForReward).follows(Protocol.TokenHolder)
  })

  // In addition, it has following extra behaviours
  // TODO BnusStabilizer naming
  context('When it receives token', async () => {
    // TODO Do we treat the fund differently according to where it is from?
    it('can be from an EOA or from Stabilizer or from CoinVerseService', async () => {})
    // TODO Decide allocation rule (guild?)
    it('should allocate received tokens to Bnus holders', async () => {})
    // TODO We should make sure that we will use claim baed model or another thing
    it('should transfer holding Bnus when a user claims the allocated reward', async () => {})
  })

  // TODO managed by admin (make it upgradable)
  /**
  context('When it decides the distribution ratio', async () => {
    it('should be proportional to how long held Bnus', async () => {}) // TODO is this right?
    it('should be proportional to how much held Bnus', async () => {}) // TODO is this right?
    it('should be proportional to how many people are in the same guild', async () => {}) // TODO is this right?
    it('should have limited pocket size', async () => {}) // TODO Future work
  })
  */
})