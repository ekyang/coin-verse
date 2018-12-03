pragma solidity ^0.4.24;

contract BnusTokenFace {
    // Follows ERC20
    function name() public view returns (string);

    // Follows ERC20
    function symbol() public view returns (string);

    // Follows ERC20
    function decimals() public view returns (uint8);

    // Follows ERC20
    function totalSupply() public view returns (uint256);

    // Follows ERC20
    function balanceOf(address _owner) public view returns (uint256);

    // Follows SmartToken
    function destroy(address _from, uint256 _amount) public;
}
