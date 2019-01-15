const ContractFeatures = artifacts.require('ContractFeatures.sol')

module.exports = function (deployer, network) {
  if(network === 'development') return
  deployer.deploy(ContractFeatures)
}
