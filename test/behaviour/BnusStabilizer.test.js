const { Contract, Protocol } = require('../protocol/Bancor')

const BnusStabilizer = artifacts.require('BnusStabilizer.sol')

contract('BnusStabilizer', async () => {
  // Basically, it should pass all test cases of the bancor protocol.
  it('should follow the bancor protocol', async () => {
    Contract(BnusStabilizer).follows(Protocol.TokenHolder)
  })

  // In addition, it has following extra behaviours
  context('When it is deployed', async () => {
    it('should start after it receives 50% of total Cnus as its initial fund', async () => {})
  })

  context('During the boosting period', async () => {
    it('should have an aggressive equation for its lower bound of Bnus price', async () => {}) // TODO We should make the equation
  })

  context('After the boosting period', async () => {
    it('should have a sustainable equation for its lower bound of Bnus price', async () => {}) // TODO We should make the equation
  })

  context('When Bnus selling occurs and the price touches the lower bound', async () => {
    it('should buy Bnus to guarantee the lower bound', async () => {})
    it('should send the purchased Bnus to the BnusRewardPool', async () => {})
  })

  context('For a sustainable operation', async () => {
    it('should reserve Cnus from CoinVerseService', async () => {})
  })
})