const { Contract, Protocol } = require('../protocol/Bancor')

const BnusConverter = artifacts.require('BnusConverter.sol')

contract('BnusConverter', async () => {
  // Basically, it should pass all test cases of the bancor protocol.
  it('should follow the bancor protocol', async () => {
    Contract(BnusConverter).follows(Protocol.BancorConverter)
  })

  // In addition, it has following extra behaviours
  context('When users buy Bnus', async () => {
    it('should take 10 % of Cnus by every conversion', async () => {})
    it('should send taken conversion fee to the CnusRewardPool', async () => { })
    it('should have upper bound of daily purchase and run circuit breaker', async () => {})
  })

  context('When users sell Bnus', async () => {
    it('should take 10 % of Cnus by every conversion', async () => {})
    it('should send taken conversion fee to the CnusRewardPool', async () => { })
    it('should have lower bound of daily selling and run circuit breaker', async () => {}) // TODO should it be implemented?
  })

  context('When users sell Bnus', async () => {
    it('should take 10 % of Cnus by every conversion', async () => {})
    it('should have lower bound of daily selling and run circuit breaker', async () => {})
    it('should send taken conversion fee to the CnusRewardPool', async () => { })
  })

  // TODO should it be implemented?
  context('When circuit breaker runs', async () => {
    it('should stop all kind of conversion', async () => {}) // TODO Should we limit only buying or selling?
    it('should provide reserved purchase', async () => {}) // TODO Does it make sense?
    it('should provide ether token purchase', async () => {}) // TODO  Isn't this better than the reserved purchase?
  })
})