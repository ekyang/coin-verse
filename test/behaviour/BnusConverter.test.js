const { Contract, Protocol } = require('../protocol/Bancor')

const BnusConverter = artifacts.require('BnusConverter.sol')

contract('BnusConverter', async () => {
  // Basically, it should pass all test cases of the bancor protocol.
  context('It follows the bancor protocol', async () => {
    it('should pass the bancor protocol test cases', async () => {
      Contract(BnusConverter).follows(Protocol.BancorConverter)
    })
  })

  context('It has customized features', async () => {
    describe('Events', async () => {
      it('should emit Conversion event when people buy or sell Bnus', async () => {

      })

      it('should emit PriceDataUpdate event when the Bnus price changes', async () => {

      })
    })

    describe('Getters', async () => {
      describe('getCnusBalance()', async () => {
      })
    })

    describe('TxFunctions', async () => {
      describe('fund()', async () => {
        it('should send the conversion fee to the CnusPoolForNetworkReward instead of burning them', async () => {})
      })
      describe('buyBnus()', async () => {
        it('should convert Cnus to Bnus based on Cnus amount while fund() converts Cnus to Bnus based on Bnus amount', async () => {})
      })
      describe('liguidate()', async () => {
        it('should send the conversion fee to the CnusPoolForMarketing instead of burning them', async () => {})
      })
    })
  })
})