const ContractIds = artifacts.require('ContractIds.sol')

module.exports = function (deployer) {
  deployer.deploy(ContractIds)
}
