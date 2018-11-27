pragma solidity ^0.4.24;
import "bancor-contracts/solidity/contracts/converter/BancorConverter.sol";

contract BnusConverter is BancorConverter {
    //TODO Take Cnus as conversion fee => Cnus reward pool(Bnus holder will be rewarded)
    function convert(IERC20Token _fromToken, IERC20Token _toToken, uint256 _amount, uint256 _minReturn) public returns (uint256) {

    }
    // TODO limit NET increase amount (upper bound?, lower bound?) (limited amount for each buyer, signature verification) => CircuitBreaker.sol
    // TODO reserved purchase??? => ConversionQueue.sol
}

