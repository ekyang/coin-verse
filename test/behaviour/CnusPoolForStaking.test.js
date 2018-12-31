const { Contract, Protocol } = require('../protocol/Bancor')

const CnusPoolForStaking = artifacts.require('CnusPoolForStaking.sol')

contract('CnusPoolForStaking', async () => {
  // Basically, it should pass all test cases of the bancor protocol.
  it('should follow the bancor protocol', async () => {
    Contract(CnusPoolForStaking).follows(Protocol.TokenHolder)
  })

  it('should provide save(uint day, uint amount) function', async () => {})
  it('should provide withdrawRequest() function', async () => {})
  it('should provide withdraw() function', async () => {})
  it('should provide mySaveRecord() function', async () => {})
})