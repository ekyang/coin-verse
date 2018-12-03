pragma solidity ^0.4.24;

contract CircuitBreakerFace {
    /**
        @dev returns total available amount of Bnus of the day
    */
    function getAvailableBnus() public view returns (uint256);

    /**
        @dev returns total available amount of Cnus of the day
    */
    function getAvailableCnus() public view returns (uint256);
}
