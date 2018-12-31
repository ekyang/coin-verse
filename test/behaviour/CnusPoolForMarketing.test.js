const { Contract, Protocol } = require('../protocol/Bancor')

const CnusPoolForMarketing = artifacts.require('CnusPoolForMarketing.sol')

contract('CnusPoolForConversionFee', async () => {
  // Basically, it should pass all test cases of the bancor protocol.
  it('should follow the bancor protocol', async () => {
    Contract(CnusPoolForMarketing).follows(Protocol.TokenHolder)
  })

  // In addition, it has following extra behaviours
  context('When it receives token', async () => {
    // TODO Do we treat the fund differently according to where it is from?
    it('can be from an EOA or from BnusConverter', async () => {})
    // TODO Decide allocation rule (guild?)
    it('should allocate received tokens to Bnus holders', async () => {})
    // TODO We should make sure that we will use claim based model or another thing
    it('should transfer holding Cnus when a user claims the allocated reward', async () => {})
  })

  // TODO refer P3D
  context('When it decides the distribution ratio', async () => {
    /**
    it('should be proportional to how long held Bnus', async () => {}) // TODO is this right?
    it('should be proportional to how much held Bnus', async () => {}) // TODO is this right?
    it('should have limited pocket size', async () => {}) // TODO Future work
     */
  })

  it('should provide UI for user to claim', async () => {})
  it('should have a feature to calculate & distribute reward by admin', async () => {})
})