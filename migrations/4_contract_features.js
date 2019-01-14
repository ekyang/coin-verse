const ContractFeatures = artifacts.require('ContractFeatures.sol')

module.exports = function (deployer) {
  deployer.deploy(ContractFeatures)
}
