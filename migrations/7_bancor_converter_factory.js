const BancorConverterFactory = artifacts.require('BancorConverterFactory.sol')

module.exports = function (deployer, network) {
  if (network === 'development') return
  deployer.deploy(BancorConverterFactory, { overwrite: false })
}
