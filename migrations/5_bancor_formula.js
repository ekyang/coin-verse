const BancorFormula = artifacts.require('BancorFormula.sol')

module.exports = function (deployer, network) {
  if(network === 'development') return
  deployer.deploy(BancorFormula)
}
