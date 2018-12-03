const { Contract, Protocol } = require('../protocol/Bancor')

const CoinVerseRegistry = artifacts.require('CoinVerseRegistry.sol')

contract('CoinVerseRegistry', async () => {
  // Basically, it should pass all test cases of the bancor protocol.
  it('should follow the bancor protocol', async () => {
    Contract(CoinVerseRegistry).follows(Protocol.ContractRegistry)
  })
})