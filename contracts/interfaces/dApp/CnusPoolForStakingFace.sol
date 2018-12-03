pragma solidity ^0.4.24;

contract CnusPoolForStakingFace {

    /**
        @dev can stake Cnus
        @param _day pending period to withdraw staked Cnus
        @param _amount amount of Cnus to stake
        @param _guild address of guild to stake
    */
    function stake(uint256 _day, uint256 _amount, address _guild) external returns (uint256);

    /**
        @dev withdrawal is allowed after the given pending period after this request
        @param _stakeId stake id to withdraw
        @param _amount amount to withdraw
        @return _requestId id of the withdrawal request
    */
    function requestWithdrawal(uint256 _stakeId, uint256 amount) public returns (uint256 requestId);

    /**
        @dev withdrawing for approved requests
        @param _requestId stake id to withdraw
    */
    function withdraw(uint256 _requestId) public;

    /**
        @dev returns length of total requests (includes completed requests)
    */
    function getMyRequests() public view returns (uint256);

    /**
        @dev returns detail information of the withdrawal request
        @param _requestId id to get detail
        @return _amount requested amount to withdraw
        @return _remainingPeriod remaining days to wait
    */
    function getMyRequest(uint256 _requestId) public view returns (uint256 _amount, uint256 _remainingPeriod);

    /**
        @dev returns length of total stakes (includes withdrawn stakes)
    */
    function getMyStakes() public view returns (uint256);

    /**
        @dev returns detail information of the stake
        @param _stakeId id of the stake
        @return _day pending period to withdraw staked Cnus
        @return _amount amount of the staked Cnus
        @return _guild address of the guild which is the stake for
    */
    function getStake(uint256 _stakeId) public view returns (uint256 _day, uint256 _amount, address _guild);

    /**
        @dev returns the amount of the total staked Cnus for the guild
    */
    function getStakeOfGuild(address _guild) public view returns (uint256);
}
