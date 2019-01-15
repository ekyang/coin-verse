const { Contract, Protocol } = require('../protocol/Bancor')

const CnusPoolForStaking = artifacts.require('CnusPoolForStaking.sol')

contract('CnusPoolForStaking', async () => {
  // Basically, it should pass all test cases of the bancor protocol.
  context('It follows the bancor protocol', async () => {
    it('should follow the bancor protocol', async () => {
      Contract(CnusPoolForStaking).follows(Protocol.TokenHolder)
    })
  })

  context('It has customized features', async () => {
    describe('Events', async () => {
      it('should emit Deposit event when a user stakes Cnus', async () => {

      })
      it('should emit Withdrawal event when a user withdraw staked Cnus', async () => {})
    })
    describe('Getters', async () => {
      describe('getStakedAmount()', async () => {
        it('should return the amount of Cnus staked by the message sender', async () => {

        })
      })
      describe('stakeOf()', async () => {
        it('should return the amount of Cnus staked by an account', async () => {

        })
      })
      describe('TxFunctions', async () => {
        describe('registerSigner()', async () => {
          it('should assign the given address as a signer address', async () => {})
          it('should be called by only the owner', async () => {})
        })
        describe('stake()', async () => {
          it('should withdraw Cnus from users account & transfer to the contract itself', async () => {

          })
          it('should check udid & signature is signed with the registered address', async () => {})
        })
        describe('withdraw()', async () => {
          it('should transfer Cnus from the contract to the message sender', async () => {})
          it('should check udid & signature is signed with the registered address', async () => {})
        })
      })
    })
  })
})