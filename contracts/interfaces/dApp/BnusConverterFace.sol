pragma solidity ^0.4.24;

contract BnusConverterFace {
    /**
        @dev returns the Cnus balance stored in the bancor
        @return balance
    */
    function getCnusBalance() public view returns (uint256);

    /**
       @dev buys bnus
       @param _depositAmount  amount of cnus to buy bnus
    */
    function buyBnus(uint256 _depositAmount, uint256 _minReturn) public;

    /**
       @dev sell bnus
       @param _sellAmount  amount of cnus to buy bnus
    */
    function sellBnus(uint256 _sellAmount, uint256 _minReturn) public;
}
