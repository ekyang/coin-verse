const BancorGasPriceLimit = artifacts.require('BancorGasPriceLimit.sol')

module.exports = function (deployer, network) {
  if (network === 'development') return
  deployer.deploy(BancorGasPriceLimit, 30000000000, { overwrite: false })
}
