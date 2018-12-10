pragma solidity ^0.4.24;

contract BnusPoolForRewardFace {
    /**
        @dev returns total deposited amount of Bnus
    */
    function getTotalBalance() public view returns (uint256);

    /**
        @dev returns Bnus amount of dividends for the message sender
    */
    function getMyDividends() public view returns (uint256);

    /**
        @dev user can claim own dividends, this will transfer holding Bnus to user's account
    */
    function claimMyDividends() public;
}
