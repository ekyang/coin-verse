const { Contract, Protocol } = require('../protocol/Bancor')

const CnusPoolForStabilizer = artifacts.require('CnusPoolForStabilizer.sol')

contract('CnusPoolForStabilizer', async () => {
  // Basically, it should pass all test cases of the bancor protocol.
  it('should follow the bancor protocol', async () => {
    Contract(CnusPoolForStabilizer).follows(Protocol.TokenHolder)
  })

  context('When it meets the condition', async () => {
    it('should allow every user to execute stabilize() function', async () => {

    })
    it('should provide fixed amount of rewards to the stabilize() executor', async () => {

    })
    it('administrator can adjust the reward amount', async () => {
      it('should be less than limit', async () => {})
    })
    it('should start with 1000 cnus', async () => {

    })
  })
  // In addition, it has following extra behaviours
  context('When it is deployed', async () => {
    it('should start after it receives (1billion - 1million) of total Cnus as its initial fund', async () => {})
  })

  context('When Bnus selling occurs and the price touches the lower bound', async () => {
    it('should buy Bnus to guarantee the lower bound', async () => {})
    it('should send the purchased Bnus to the BnusRewardPool', async () => {})
  })

  context('When it spends all the reserved fund', async () => {})
})