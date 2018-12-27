pragma solidity ^0.4.24;

contract BnusConverterFace {
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
        @dev returns the Cnus balance stored in the bancor
        @return balance
    */
    function getCnusBalance() public view returns (uint256);

    /**
        @dev returns the expected return for buying Bnus
        @param _depositAmount amount of Cnus to deposit
        @return expected purchase return amount of Bnus and conversion fee
    */
    function getPurchaseReturn(uint256 _depositAmount) public view returns (uint256, uint256);

    /**
        @dev returns the expected return for selling Bnus
        @param _sellAmount amount of Bnus to sell
        @return expected sale return amount of Cnus and conversion fee
    */
    function getSaleReturn(uint256 _sellAmount) public view returns (uint256, uint256);

    /**
       @dev buys Bnus
       @param _amount  amount to increase the supply by (in Bnus token)
    */
    function fund(uint256 _amount) public;

    /**
       @dev buys Bnus
       @param _amount  amount of Cnus to buy Bnus
    */
    function buyBnus(uint256 _amount) public;

    /**
       @dev sells Bnus
       @param _amount  amount to liquidate (in Bnus token)
    */
    function liquidate(uint256 _amount) public;

}
