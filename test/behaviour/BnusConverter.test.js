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
    it('should send taken conversion fee to the CnusPoolForConversionFee', async () => { })
    it('should have upper bound(limit by Cnus input Qt) of daily purchase and run circuit breaker', async () => {})
    it('should update UDID-addr pair', async () => {})
    // TODO should it be implemented?
    // Minutes
    // Limit by Cnus input Qt (NET 400,000 Cnus per day)
    // Cnus limit equation?
    it('should reject if purchase exceeds maximum Qt for its daily limit', async () => {
      // TODO
      it('should have 400 Cnus per user for its maximum daily purchase Qt', async () => {})
      // it('should not allow udid1-addr1 udid1-addr2', async () => {})
      // TODO
      it('should release the maximum qt limit after 2 hours', async () => {})
    })
    it('should require CoinUs signature', async () => {})
    it('should reject if purchase exceeds maximum Qt for its total amount', async () => {})
  })

  context('When users sell Bnus', async () => {
    // it('should remove UDID-address pair when user\'s balance touches zero', async () => {})
    it('should take 10 % of Cnus by every conversion', async () => {})
    it('should send taken conversion fee to the CnusPoolForConversionFee', async () => { })
    it('should have lower bound of daily selling and run circuit breaker', async () => {}) // TODO should it be implemented?
  })

  context('At 23:00 pm everyday until the stabilizer is alive', async () => {
    it('should be disabled automatically', async () => {})
    it('should not be enabled until the Stabilizer have done its work', async () => {})
    it('should not be enabled in the same day', async () => {})
  })
})