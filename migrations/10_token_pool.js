const TokenPool = artifacts.require('TokenPool.sol')

module.exports = function (deployer) {
  deployer.deploy(TokenPool)
}
