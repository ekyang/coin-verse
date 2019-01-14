const BnusToken = artifacts.require('BnusToken.sol')

module.exports = function (deployer) {
  deployer.deploy(BnusToken, 'CoinUs', 'BNUS', 18)
}
