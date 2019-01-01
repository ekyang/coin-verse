pragma solidity ^0.4.24;

// TODO Implement Bancor Smart Token Standard
// TODO ERC20??? Restricted transfer

import 'bancor-contracts/solidity/contracts/token/ERC20Token.sol';

contract CnusTokenMockup is ERC20Token {
    uint256 public constant TOTAL_SUPPLY = 2000000000000000000000000000;

    constructor()
    ERC20Token("CoinUs", "CNUS", 18)
    {
        totalSupply = TOTAL_SUPPLY;
        balanceOf[msg.sender] = TOTAL_SUPPLY;
    }
}
