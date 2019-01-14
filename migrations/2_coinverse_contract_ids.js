const CoinVerseContractIds = artifacts.require('CoinVerseContractIds.sol')

module.exports = function (deployer) {
  deployer.deploy(CoinVerseContractIds)
}
