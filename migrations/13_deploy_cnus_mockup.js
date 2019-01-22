const CnusTokenMockUp = artifacts.require('CnusTokenMockUp.sol')

module.exports = function (deployer, network) {
  if (network === 'development') return
  if (network !== 'mainnet') {
    deployer.deploy(CnusTokenMockUp, { overwrite: false })
  }
}
