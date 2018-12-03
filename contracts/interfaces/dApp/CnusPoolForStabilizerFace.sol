pragma solidity ^0.4.24;

contract CnusPoolForStabilizerFace {
    /**
        @dev anyone can fund the stabilizer
    */
    function fund(uint256 _amount) public;

    /**
        @dev When stabilize() is enabled, anyone can execute this function to get a reward
    */
    function stabilize() public;

    /**
        @dev returns total deposited amount of Bnus
    */
    function getTotalBalance() public view returns (uint256);

    /**
        @dev returns amount of Cnus to get rewarded by calling stabilize()
    */
    function getStabilizeReward() public view returns (uint256);

    /**
        @dev returns whether it is possible to execute stabilize() function
    */
    function isAllowedToRunStabilizer() public view returns (bool);
}
