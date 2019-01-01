pragma solidity ^0.4.24;

import "bancor-contracts/solidity/contracts/utility/TokenHolder.sol";
import "bancor-contracts/solidity/contracts/utility/interfaces/IContractRegistry.sol";
import "./CoinVerseContractIds.sol";
import "./interfaces/ITokenPool.sol";
import "./interfaces/IBnusConverter.sol";

contract TokenPool is ITokenPool, TokenHolder, CoinVerseContractIds {
    event Airdrop(address indexed _token, address indexed _to, uint256 _amount);

    IContractRegistry registry;

    constructor (address _registry) public {
        registry = IContractRegistry(_registry);
    }

    /**
      @dev withdraw cnus tokens held by the contract and sends them to an account
      can only be called by the owner

      @param _to      account to receive the new amount
      @param _amount  amount to withdraw
    */
    function airdropCnus(address _to, uint256 _amount) public ownerOnly {
        address cnus = registry.addressOf(CNUS_TOKEN);
        withdrawTokens(IERC20Token(cnus), _to, _amount);
        emit Airdrop(cnus, _to, _amount);
    }

    /**
      @dev withdraw bnus tokens held by the contract and sends them to an account
      can only be called by the owner

      @param _to      account to receive the new amount
      @param _amount  amount to withdraw
    */
    function airdropBnus(address _to, uint256 _amount) public ownerOnly {
        address bnus = registry.addressOf(BNUS_TOKEN);
        withdrawTokens(IERC20Token(bnus), _to, _amount);
        emit Airdrop(bnus, _to, _amount);
    }

    /**
      @dev Batch job for airdrop
      can only be called by the owner

      @param _to      array of account to receive the new amount
      @param _amount  array of amount to withdraw
    */
    function batchAirdropBnus(address[] _to, uint256[] _amount) public ownerOnly {
        address bnus = registry.addressOf(BNUS_TOKEN);
        require(_to.length == _amount.length);
        for (uint i = 0; i < _to.length; i++) {
            withdrawTokens(IERC20Token(bnus), _to[i], _amount[i]);
            emit Airdrop(bnus, _to[i], _amount[i]);
        }
    }
    /**
          @dev Batch job for airdrop
          can only be called by the owner

          @param _to      array of account to receive the new amount
          @param _amount  array of amount to withdraw
        */
    function batchAirdropCnus(address[] _to, uint256[] _amount) public ownerOnly {
        address cnus = registry.addressOf(CNUS_TOKEN);
        require(_to.length == _amount.length);
        for (uint i = 0; i < _to.length; i++) {
            withdrawTokens(IERC20Token(cnus), _to[i], _amount[i]);
            emit Airdrop(cnus, _to[i], _amount[i]);
        }
    }

    function bnusToCnus(uint256 _amount, uint256 _minReturn) public ownerOnly {
        address bnus = registry.addressOf(BNUS_TOKEN);
        address bnusConverter = Owned(bnus).owner();
        IBnusConverter(bnusConverter).sellBnus(_amount, _minReturn);
    }

    function cnusToBnus(uint256 _amount, uint256 _minReturn) public ownerOnly {
        address bnus = registry.addressOf(BNUS_TOKEN);
        address bnusConverter = Owned(bnus).owner();
        IBnusConverter(bnusConverter).buyBnus(_amount, _minReturn);
    }

    function getBnusBalance() public view returns (uint256) {
        return IERC20Token(registry.addressOf(BNUS_TOKEN)).balanceOf(address(this));
    }

    function getCnusBalance() public view returns (uint256) {
        return IERC20Token(registry.addressOf(CNUS_TOKEN)).balanceOf(address(this));
    }
}
