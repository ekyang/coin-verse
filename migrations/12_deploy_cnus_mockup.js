const CnusTokenMockUp = artifacts.require('CnusTokenMockUp.sol')

module.exports = function (deployer, network) {
  if (network != 'mainnet') {
    deployer.deploy(CnusTokenMockUp)
  }
}
