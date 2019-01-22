const BnusToken = artifacts.require('BnusToken.sol')

module.exports = function (deployer, network) {
  if (network === 'development') return
  deployer.deploy(BnusToken, 'CoinUs', 'BNUS', 18, { overwrite: false })
}
