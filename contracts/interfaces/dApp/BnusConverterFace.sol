pragma solidity ^0.4.24;

contract IBnusConverter {
    event Conversion(
        address indexed _fromToken,
        address indexed _toToken,
        address indexed _trader,
        uint256 _amount,
        uint256 _return,
        int256 _conversionFee
    );
    // triggered after a conversion with new price data
    event PriceDataUpdate(
        address indexed _connectorToken,
        uint256 _tokenSupply,
        uint256 _connectorBalance,
        uint32 _connectorWeight
    );
    // triggered when the conversion fee is updated
    event ConversionFeeUpdate(uint32 _prevFee, uint32 _newFee);

    // triggered when conversions are enabled/disabled
    event ConversionsEnable(bool _conversionsEnabled);

    /**
       @dev Return current status of converter
       @return 0: Normal status / 1: Circuit breaker is working / 2: Stabilizer is working
    */
    function getCurrentStatus() public view returns (uint8);

    /**
        @dev returns the Cnus balance stored in the bancor
        @return balance
    */
    function getCnusBalance() public view returns (uint256);

    /**
        @dev returns the expected return for buying Bnus
        @param _depositAmount amount of Cnus to deposit
        @return expected purchase return amount of Bnus and conversion fee
    */
    function getPurchaseReturn(IERC20Token _connectorToken, uint256 _depositAmount) public view returns (uint256, uint256);

    /**
        @dev returns the expected return for selling Bnus
        @param _sellAmount amount of Bnus to sell
        @return expected sale return amount of Cnus and conversion fee
    */
    function getSaleReturn(IERC20Token _connectorToken, uint256 _sellAmount) public view returns (uint256, uint256);

    /**
      @dev returns available amount of Bnus by the daily quota for each user and the total supply
      @return available amount of Bnus
    */
    function getAvailablePurchase() public view returns (uint256);

    /**
       @dev buys Bnus
       @param _amount  amount to increase the supply by (in Bnus token)
       @param _udid  unique Device Id to prevent abusing
       @param _signature signed udid with the private key of CoinUs wallet
    */
    function fund(uint256 _amount, bytes _udid, bytes _signature) public;

    /**
       @dev sells Bnus
       @param _amount  amount to liquidate (in Bnus token)
    */
    function liquidate(uint256 _amount) public;

}
