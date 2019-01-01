pragma solidity ^0.4.24;

contract IBnusConverter {
    /**
        @dev returns the Cnus balance stored in the bancor
        @return balance
    */
    function getCnusBalance() public view returns (uint256);

    /**
       @dev buys bnus
       @param _depositAmount  amount of cnus to buy bnus
    */
    function buyBnus(uint256 _depositAmount, uint256 _minReturn) public returns (uint256);

    /**
       @dev sell bnus
       @param _sellAmount  amount of cnus to buy bnus
    */
    function sellBnus(uint256 _sellAmount, uint256 _minReturn) public returns (uint256);
}
