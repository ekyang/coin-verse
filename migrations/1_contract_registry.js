const ContractRegistry = artifacts.require('ContractRegistry.sol')

module.exports = function (deployer, network) {
  if (network === 'development') return
  deployer.deploy(ContractRegistry, { overwrite: false })
}
