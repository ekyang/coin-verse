pragma solidity ^0.4.24;

import "./CoinVerseContractIds.sol";
import "./interfaces/IBnusConverter.sol";
import "bancor-contracts/solidity/contracts/converter/BancorConverter.sol";
import "bancor-contracts/solidity/contracts/converter/interfaces/IBancorGasPriceLimit.sol";

contract BnusConverter is IBnusConverter, BancorConverter, CoinVerseContractIds {
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

    /**
    * @dev Customized function for Coin Verse system
    * @param _depositAmount amount of Cnus to buy Bnus
    * @param _minReturn expected minimum return of Bnus. It is cancelled when the returned amount of Bnus is smaller
     than the _minReturn,
    */
    function buyBnus(uint256 _depositAmount, uint256 _minReturn)
    public
    preventFrontRunning
    returns (uint256 _cnus)
    {
        uint256 amount;
        uint256 feeAmount;
        IERC20Token cnus = IERC20Token(registry.addressOf(CNUS_TOKEN));
        (amount, feeAmount) = getPurchaseReturn(cnus, _depositAmount);
        buy(cnus, _depositAmount, _minReturn);
        token.issue(registry.addressOf(TOKEN_POOL), feeAmount);
        return amount;
    }

    /**
     * @dev Customized function for Coin Verse system
     * @param _sellAmount amount of Cnus to buy Bnus
     * @param _minReturn expected minimum return of Bnus. It is cancelled when the returned amount of Bnus is smaller
      than the _minReturn,
     */
    function sellBnus(uint256 _sellAmount, uint256 _minReturn)
    public
    preventFrontRunning
    returns (uint256 _bnus)
    {
        uint256 amount;
        uint256 feeAmount;
        IERC20Token cnus = IERC20Token(registry.addressOf(CNUS_TOKEN));
        (amount, feeAmount) = getSaleReturn(cnus, _sellAmount);
        sell(cnus, _sellAmount, _minReturn);
        assert(cnus.transfer(registry.addressOf(TOKEN_POOL), feeAmount));
        return amount;
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
}
