pragma solidity ^0.4.24;

contract CnusPoolForStakingFace {
    event Deposit(address indexed _account, uint256 _amount, uint256 _timestamp);
    event Withdrawal(address indexed _account, uint256 _amount, uint256 _timestamp);

    /**
        @dev can stake Cnus
        @param _amount amount of Cnus to stake
    */
    function stake(uint256 _amount) public;

    /**
        @dev withdrawing for approved requests
        @param _requestId stake id to withdraw
    */
    function withdraw(uint256 _amount) public;

    /**
        @dev returns total amount of staked Cnus
    */
    function getStakedAmount() public view returns (uint256);

    function stakeOf(address _account) public view returns (uint256);
}
