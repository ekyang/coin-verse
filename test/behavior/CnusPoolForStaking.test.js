const chai = require('chai')
const assert = chai.assert
const BigNumber = web3.BigNumber
const should = chai.use(require('chai-bignumber')(BigNumber)).should()
const { Contract, Protocol } = require('../protocol/Bancor')
const { deployContracts, initConverter } = require('../helper')

const CnusPoolForStaking = artifacts.require('CnusPoolForStaking.sol')

contract('CnusPoolForStaking', async (accounts) => {
  // Basically, it should pass all test cases of the bancor protocol.
  context('It follows the bancor protocol', async () => {
    it('should follow the bancor protocol', async () => {
      Contract(CnusPoolForStaking).follows(Protocol.TokenHolder)
    })
  })

  context('It has customized features', async () => {
    let SAMPLE_UDID = '0x1234'
    let contracts
    beforeEach(async () => {
      contracts = await deployContracts(artifacts, accounts)
    })

    let converter, bnusToken, cnusToken, tokenPool, cnusPoolForStaking
    beforeEach(async () => {
      [converter, bnusToken, cnusToken, tokenPool] = await initConverter(artifacts, accounts, contracts)
      cnusPoolForStaking = contracts.cnusPoolForStaking
      for (let account of accounts.slice(1, 5)) {
        await cnusToken.transfer(account, 100000)
      }
      await cnusPoolForStaking.setCoinUsAccount(accounts[0])
    })

    const AMOUNT = 10000
    describe('Events', async () => {
      it('should emit Deposit event when a user stakes Cnus', async () => {
        for (let account of accounts.slice(1, 5)) {
          let expiration = Math.round((new Date).getTime() / 1000) + 300
          let hashToSign, signature
          if (web3.version.api < '1.0.0') {
            hashToSign = web3.sha3(encodePacked(AMOUNT, SAMPLE_UDID, expiration), { encoding: 'hex' })
            signature = web3.eth.sign(accounts[0], hashToSign)
          } else {
            hashToSign = web3.utils.sha3(encodePacked(AMOUNT, SAMPLE_UDID, expiration), { encoding: 'hex' })
            signature = web3.eth.sign(hashToSign, accounts[0])
          }
          await cnusToken.approve(cnusPoolForStaking.address, AMOUNT, { from: account })
          let receipt = await cnusPoolForStaking.stake(AMOUNT, SAMPLE_UDID, expiration, signature, { from: account })
          let depositEvent
          receipt.logs.forEach(log => {
              if (log.event === 'Deposit') {
                should.not.exist(depositEvent)
                depositEvent = log
              }
            }
          )
          should.exist(depositEvent)
        }

      })
      it('should emit Withdrawal event when a user withdraw staked Cnus', async () => {
        for (let account of accounts.slice(1, 5)) {
          let expiration = Math.round((new Date).getTime() / 1000) + 300
          let hashToSign, signature
          if (web3.version.api < '1.0.0') {
            hashToSign = web3.sha3(encodePacked(AMOUNT, SAMPLE_UDID, expiration), { encoding: 'hex' })
            signature = web3.eth.sign(accounts[0], hashToSign)
          } else {
            hashToSign = web3.utils.sha3(encodePacked(AMOUNT, SAMPLE_UDID, expiration), { encoding: 'hex' })
            signature = web3.eth.sign(hashToSign, accounts[0])
          }
          await cnusToken.approve(cnusPoolForStaking.address, AMOUNT, { from: account })
          await cnusPoolForStaking.stake(AMOUNT, SAMPLE_UDID, expiration, signature, { from: account })
        }
        for (let account of accounts.slice(1, 5)) {
          let expiration = Math.round((new Date).getTime() / 1000) + 300
          let hashToSign, signature
          if (web3.version.api < '1.0.0') {
            hashToSign = web3.sha3(encodePacked(AMOUNT, SAMPLE_UDID, expiration), { encoding: 'hex' })
            signature = web3.eth.sign(accounts[0], hashToSign)
          } else {
            hashToSign = web3.utils.sha3(encodePacked(AMOUNT, SAMPLE_UDID, expiration), { encoding: 'hex' })
            signature = web3.eth.sign(hashToSign, accounts[0])
          }
          let receipt = await cnusPoolForStaking.withdraw(AMOUNT, SAMPLE_UDID, expiration, signature, { from: account })
          let withdrawalEvent
          receipt.logs.forEach(log => {
              if (log.event === 'Withdrawal') {
                should.not.exist(withdrawalEvent)
                withdrawalEvent = log
              }
            }
          )
          should.exist(withdrawalEvent)
        }
      })
    })

    describe('Getters', async () => {
      beforeEach(async () => {
        for (let account of accounts.slice(1, 5)) {
          let stakedAmount = await cnusPoolForStaking.getStakedAmount({ from: account })
          let expiration = Math.round((new Date).getTime() / 1000) + 300
          let hashToSign, signature
          if (web3.version.api < '1.0.0') {
            hashToSign = web3.sha3(encodePacked(AMOUNT, SAMPLE_UDID, expiration), { encoding: 'hex' })
            signature = web3.eth.sign(accounts[0], hashToSign)
          } else {
            hashToSign = web3.utils.sha3(encodePacked(AMOUNT, SAMPLE_UDID, expiration), { encoding: 'hex' })
            signature = web3.eth.sign(hashToSign, accounts[0])
          }
          await cnusToken.approve(cnusPoolForStaking.address, AMOUNT, { from: account })
          await cnusPoolForStaking.stake(AMOUNT, SAMPLE_UDID, expiration, signature, { from: account })
        }
      })
      describe('getStakedAmount()', async () => {
        it('should return the amount of Cnus staked by the message sender', async () => {
          for (let account of accounts.slice(1, 5)) {
            let stakedAmount = await cnusPoolForStaking.getStakedAmount({ from: account })
            stakedAmount.toNumber().should.equal(AMOUNT)
          }
        })
      })
      describe('stakeOf()', async () => {
        it('should return the amount of Cnus staked by an account', async () => {
          for (let account of accounts.slice(1, 5)) {
            let stakedAmount = await cnusPoolForStaking.stakeOf(account)
            stakedAmount.toNumber().should.equal(AMOUNT)
          }
        })
      })
    })
    describe('TxFunctions', async () => {
      describe('setCoinUsAccount()', async () => {
        it('should assign the given address as a signer address', async () => {
          await cnusPoolForStaking.setCoinUsAccount(accounts[1])
          let coinUsAccount = await cnusPoolForStaking.coinUsAccount.call()
          coinUsAccount.should.equal(accounts[1])
        })
        it('should be called by only the owner', async () => {
          try {
            await cnusPoolForStaking.setCoinUsAccount(accounts[1], { from: accounts[1] })
            assert(false)
          } catch (e) {
            e.message.includes('revert').should.equal(true)
          }
        })
      })
      describe('stake()', async () => {
        it('should transfer Cnus from users account to the contract itself', async () => {
          let expiration = Math.round((new Date).getTime() / 1000) + 300
          let hashToSign, signature
          if (web3.version.api < '1.0.0') {
            hashToSign = web3.sha3(encodePacked(AMOUNT, SAMPLE_UDID, expiration), { encoding: 'hex' })
            signature = web3.eth.sign(accounts[0], hashToSign)
          } else {
            hashToSign = web3.utils.sha3(encodePacked(AMOUNT, SAMPLE_UDID, expiration), { encoding: 'hex' })
            signature = web3.eth.sign(hashToSign, accounts[0])
          }
          await cnusToken.approve(cnusPoolForStaking.address, AMOUNT, { from: accounts[2] })
          await cnusPoolForStaking.stake(AMOUNT, SAMPLE_UDID, expiration, signature, { from: accounts[2] })
          let stakedAmount = await cnusPoolForStaking.getStakedAmount({ from: accounts[2] })
          stakedAmount.toNumber().should.equal(AMOUNT)
        })
        it('should check udid & signature is signed with the registered address', async () => {
          let expiration = Math.round((new Date).getTime() / 1000) + 300
          let hashToSign, signature
          if (web3.version.api < '1.0.0') {
            hashToSign = web3.sha3(encodePacked(AMOUNT, SAMPLE_UDID, expiration), { encoding: 'hex' })
            signature = web3.eth.sign(accounts[1], hashToSign)
          } else {
            hashToSign = web3.utils.sha3(encodePacked(AMOUNT, SAMPLE_UDID, expiration), { encoding: 'hex' })
            signature = web3.eth.sign(hashToSign, accounts[1])
          }
          await cnusToken.approve(cnusPoolForStaking.address, AMOUNT, { from: accounts[2] })
          try {
            await cnusPoolForStaking.stake(AMOUNT, SAMPLE_UDID, expiration, signature, { from: accounts[2] })
            assert(false)
          } catch (e) {
            e.message.includes('revert').should.equal(true)
          }
        })
        it('should check expiration date is valid', async () => {
          let invalidExpiration = Math.round((new Date).getTime() / 1000) - 300
          let hashToSign, signature
          if (web3.version.api < '1.0.0') {
            hashToSign = web3.sha3(encodePacked(AMOUNT, SAMPLE_UDID, invalidExpiration), { encoding: 'hex' })
            signature = web3.eth.sign(accounts[0], hashToSign)
          } else {
            hashToSign = web3.utils.sha3(encodePacked(AMOUNT, SAMPLE_UDID, invalidExpiration), { encoding: 'hex' })
            signature = web3.eth.sign(hashToSign, accounts[0])
          }
          await cnusToken.approve(cnusPoolForStaking.address, AMOUNT, { from: accounts[2] })
          try {
            await cnusPoolForStaking.stake(AMOUNT, SAMPLE_UDID, invalidExpiration, signature, { from: accounts[2] })
            assert(false)
          } catch (e) {
            e.message.includes('revert').should.equal(true)
          }
        })
      })
      describe('withdraw()', async () => {
        beforeEach(async () => {
          let expiration = Math.round((new Date).getTime() / 1000) + 300
          let hashToSign, signature
          if (web3.version.api < '1.0.0') {
            hashToSign = web3.sha3(encodePacked(AMOUNT, SAMPLE_UDID, expiration), { encoding: 'hex' })
            signature = web3.eth.sign(accounts[0], hashToSign)
          } else {
            hashToSign = web3.utils.sha3(encodePacked(AMOUNT, SAMPLE_UDID, expiration), { encoding: 'hex' })
            signature = web3.eth.sign(hashToSign, accounts[0])
          }
          await cnusToken.approve(cnusPoolForStaking.address, AMOUNT, { from: accounts[2] })
          await cnusPoolForStaking.stake(AMOUNT, SAMPLE_UDID, expiration, signature, { from: accounts[2] })
          let stakedAmount = await cnusPoolForStaking.getStakedAmount({ from: accounts[2] })
          stakedAmount.toNumber().should.equal(AMOUNT)
        })
        it('should transfer Cnus from the contract to the user\'s account', async () => {
          let expiration = Math.round((new Date).getTime() / 1000) + 300
          let hashToSign, signature
          if (web3.version.api < '1.0.0') {
            hashToSign = web3.sha3(encodePacked(AMOUNT, SAMPLE_UDID, expiration), { encoding: 'hex' })
            signature = web3.eth.sign(accounts[0], hashToSign)
          } else {
            hashToSign = web3.utils.sha3(encodePacked(AMOUNT, SAMPLE_UDID, expiration), { encoding: 'hex' })
            signature = web3.eth.sign(hashToSign, accounts[0])
          }
          let initialCnus = await cnusToken.balanceOf(accounts[2])
          await cnusPoolForStaking.withdraw(AMOUNT, SAMPLE_UDID, expiration, signature, { from: accounts[2] })
          let stakedAmount = await cnusPoolForStaking.getStakedAmount({ from: accounts[2] })
          let updatedCnus = await cnusToken.balanceOf(accounts[2])
          stakedAmount.toNumber().should.equal(0)
          updatedCnus.toNumber().should.equal(initialCnus.toNumber() + AMOUNT)
        })
        it('should check udid & signature is signed with the registered address', async () => {
          let expiration = Math.round((new Date).getTime() / 1000) + 300
          let hashToSign, signature
          let invalidSigner = accounts[1]
          if (web3.version.api < '1.0.0') {
            hashToSign = web3.sha3(encodePacked(AMOUNT, SAMPLE_UDID, expiration), { encoding: 'hex' })
            signature = web3.eth.sign(invalidSigner, hashToSign)
          } else {
            hashToSign = web3.utils.sha3(encodePacked(AMOUNT, SAMPLE_UDID, expiration), { encoding: 'hex' })
            signature = web3.eth.sign(hashToSign, invalidSigner)
          }
          try {
            await cnusPoolForStaking.withdraw(AMOUNT, SAMPLE_UDID, expiration, signature, { from: accounts[2] })
            assert(false)
          } catch (e) {
            e.message.includes('revert').should.equal(true)
          }
        })
        it('should check expiration date is valid', async () => {
          let invalidExpiration = Math.round((new Date).getTime() / 1000) - 300
          let hashToSign, signature
          if (web3.version.api < '1.0.0') {
            hashToSign = web3.sha3(encodePacked(AMOUNT, SAMPLE_UDID, invalidExpiration), { encoding: 'hex' })
            signature = web3.eth.sign(accounts[0], hashToSign)
          } else {
            hashToSign = web3.utils.sha3(encodePacked(AMOUNT, SAMPLE_UDID, invalidExpiration), { encoding: 'hex' })
            signature = web3.eth.sign(hashToSign, accounts[0])
          }
          try {
            await cnusPoolForStaking.withdraw(AMOUNT, SAMPLE_UDID, invalidExpiration, signature, { from: accounts[2] })
            assert(false)
          } catch (e) {
            e.message.includes('revert').should.equal(true)
          }
        })
      })
    })
  })
})

let toUint256 = (number) => {
  let hex = web3.toHex(number).slice(2)
  return '0x' + Array(64 - hex.length).fill(0).join('') + hex
}

let encodePacked = (amount, udid, expiration) => {
  return '0x' + toUint256(amount).slice(2) + udid.slice(2) + toUint256(expiration).slice(2)
}
