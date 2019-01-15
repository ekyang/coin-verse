const ContractIds = artifacts.require('ContractIds.sol')

module.exports = function (deployer, network) {
  if(network === 'development') return
  deployer.deploy(ContractIds)
}
