pragma solidity ^0.4.24;

import "bancor-contracts/solidity/contracts/token/SmartToken.sol";

contract BnusToken is SmartToken {
    constructor(string _name, string _symbol, uint8 _decimals)
    public
    SmartToken(_name, _symbol, _decimals)
    {
    }
}
