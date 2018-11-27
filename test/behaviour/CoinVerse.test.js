const { Contract, Protocol } = require('../protocol/Bancor')

const CoinVerse = artifacts.require('CoinVerse.sol')

contract('CoinVerse', async () => {
  // Basically, it should pass all test cases of the bancor protocol.
  it('should follow the bancor protocol', async () => {
    Contract(CoinVerse).follows(Protocol.BancorNetwork)
  })

  // In addition, it has following extra behaviours
  context('When a new CoinVerse service is registered', async () => {
    // TODO We need an example here
  })
})