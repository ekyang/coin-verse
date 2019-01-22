pragma solidity ^0.4.24;

import "./CoinVerseContractIds.sol";
import "./CoinUsOnly.sol";
import "./interfaces/IBnusConverter.sol";
import "bancor-contracts/solidity/contracts/converter/BancorConverter.sol";
import "bancor-contracts/solidity/contracts/converter/interfaces/IBancorGasPriceLimit.sol";

contract BnusConverter is IBnusConverter, BancorConverter, CoinVerseContractIds, CoinUsOnly {
    constructor (
        ISmartToken _token,
        IContractRegistry _registry,
        uint32 _maxConversionFee,
        IERC20Token _connectorToken,
        uint32 _connectorWeight
    )
    BancorConverter(_token, _registry, _maxConversionFee, _connectorToken, _connectorWeight)  {

    }
    // prevent front running with gas limitation
    modifier preventFrontRunning() {
        IBancorGasPriceLimit gasPriceLimit = IBancorGasPriceLimit(registry.addressOf(ContractIds.BANCOR_GAS_PRICE_LIMIT));
        gasPriceLimit.validateGasPrice(tx.gasprice);
        _;
    }

    function setCoinUsAccount(address _account) public ownerOnly {
        _setCoinUsAccount(_account);
    }
    /**
    * @dev Customized function for Coin Verse system
    * @param _depositAmount amount of Cnus to buy Bnus
    * @param _minReturn expected minimum return of Bnus. It is cancelled when the returned amount of Bnus is smaller
     than the _minReturn,
    * @param _expiration the signature will expire after the given timestamp
    * @param _signature signed hash value with the private key of CoinUs wallet
    */
    function buyBnus(uint256 _depositAmount, uint256 _minReturn, uint256 _expiration, bytes memory _signature)
    public
    preventFrontRunning
    coinUsOnly(registry, abi.encodePacked(_depositAmount, _minReturn), _expiration, _signature)
    {
        uint256 amount;
        uint256 feeAmount;
        IERC20Token cnus = IERC20Token(registry.addressOf(CNUS_TOKEN));
        (amount, feeAmount) = getPurchaseReturn(cnus, _depositAmount);
        buy(cnus, _depositAmount, _minReturn);
        token.issue(registry.addressOf(TOKEN_POOL), feeAmount);
    }

    /**
     * @dev Customized function for Coin Verse system
     * @param _sellAmount amount of Cnus to buy Bnus
     * @param _minReturn expected minimum return of Bnus. It is cancelled when the returned amount of Bnus is smaller
      than the _minReturn,
     * @param _expiration the signature will expire after the given timestamp
     * @param _signature signed hash value with the private key of CoinUs wallet
     */
    function sellBnus(uint256 _sellAmount, uint256 _minReturn, uint256 _expiration, bytes memory _signature)
    public
    preventFrontRunning
    coinUsOnly(registry, abi.encodePacked(_sellAmount, _minReturn), _expiration, _signature)
    {
        uint256 amount;
        uint256 feeAmount;
        IERC20Token cnus = IERC20Token(registry.addressOf(CNUS_TOKEN));
        (amount, feeAmount) = getSaleReturn(cnus, _sellAmount);
        sell(cnus, _sellAmount, _minReturn);
        assert(cnus.transfer(registry.addressOf(TOKEN_POOL), feeAmount));
    }

    /**
        @dev returns balance of Cnus
        @return connector balance
    */
    function getCnusBalance()
    public
    view
    returns (uint256)
    {
        return getConnectorBalance(IERC20Token(registry.addressOf(CNUS_TOKEN)));
    }

    /**
     * @dev returns expected amount of Bnus for the given Cnus
     */
    function getExpectedBnus(uint256 _cnus)
    public
    view
    returns (uint256)
    {
        uint256 amount;
        uint256 feeAmount;
        IERC20Token cnus = IERC20Token(registry.addressOf(CNUS_TOKEN));
        (amount, feeAmount) = getPurchaseReturn(cnus, _cnus);
        return amount;
    }

    /**
     * @dev returns expected amount of Cnus for the given Bnus
     */
    function getExpectedCnus(uint256 _bnus)
    public
    view
    returns (uint256)
    {
        uint256 amount;
        uint256 feeAmount;
        IERC20Token cnus = IERC20Token(registry.addressOf(CNUS_TOKEN));
        (amount, feeAmount) = getSaleReturn(cnus, _bnus);
        return amount;
    }
}
