pragma solidity ^0.4.24;

pragma solidity ^0.4.24;

import "bancor-contracts/solidity/contracts/token/SmartToken.sol";

contract BnusToken is SmartToken {
    constructor()
    public
    SmartToken('BnusToken', 'BNUS', 18)
    {
    }
}
