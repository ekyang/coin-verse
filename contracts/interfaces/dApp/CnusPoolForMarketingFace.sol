pragma solidity ^0.4.24;

contract CnusPoolForMarketingFace {
    event Airdrop(address indexed _to, uint256 _amount);

    /**
      @dev withdraw cnus tokens held by the contract and sends them to an account
      can only be called by the owner

      @param _to      account to receive the new amount
      @param _amount  amount to withdraw
    */
    function airdrop(address _to, uint256 _amount) public;

    function getTotalBalance() public view returns (uint256);

    function owner() public view returns (address) {}

    function transferOwnership(address _newOwner) public;

    function acceptOwnership() public;
}
