const { Contract, Protocol } = require('../protocol/Bancor')

const CircuitBreaker = artifacts.require('CircuitBreaker.sol')

contract('CircuitBreaker', async () => {
  it('should provide a function for daily limit')
  it('should be upgradable')
  it('should have 100,000 Cnus as its upper bound for the first week')
  it('should have 400,000 Cnus as its upper bound from its second week')
  it('should have -50% of total supply of Cnus as its lower bound')
  it('should have new equation after 200 days to make cnus input upper bound increase as 0.5% per day')
})
