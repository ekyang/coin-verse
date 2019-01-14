const BancorGasPriceLimit = artifacts.require('BancorGasPriceLimit.sol')

module.exports = function (deployer) {
  deployer.deploy(BancorGasPriceLimit, 30000000000)
}
