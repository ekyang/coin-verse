const BancorConverterFactory = artifacts.require('BancorConverterFactory.sol')

module.exports = function (deployer) {
  deployer.deploy(BancorConverterFactory)
}
