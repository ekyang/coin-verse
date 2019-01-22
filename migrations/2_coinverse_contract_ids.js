const CoinVerseContractIds = artifacts.require('CoinVerseContractIds.sol')

module.exports = function (deployer, network) {
  if (network === 'development') return
  deployer.deploy(CoinVerseContractIds, { overwrite: false })
}
