pragma solidity ^0.4.24;

contract CnusPoolForStakingFace {
    event Deposit(address indexed _account, uint256 _amount, uint256 _timestamp);
    event Withdrawal(address indexed _account, uint256 _amount, uint256 _timestamp);

    /**
       @dev can stake Cnus
       @param _amount amount of Cnus to stake
       @param _udid  unique Device Id to prevent abusing
       @param _signature signed udid with the private key of CoinUs wallet
    */
    function stake(uint256 _amount, bytes _udid, bytes _signature) public;

    /**
       @dev withdrawing for approved requests
       @param _amount amount of Cnus to withdraw
       @param _udid  unique Device Id to prevent abusing
       @param _signature signed udid with the private key of CoinUs wallet
    */
    function withdraw(uint256 _amount, bytes _udid, bytes _signature) public;

    /**
        @dev returns total amount of staked Cnus
    */
    function getStakedAmount() public view returns (uint256);

    function stakeOf(address _account) public view returns (uint256);
}
