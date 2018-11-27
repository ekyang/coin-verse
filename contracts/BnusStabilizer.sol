pragma solidity ^0.4.24;
import "bancor-contracts/solidity/contracts/utility/TokenHolder.sol";

contract BnusStabilizer is TokenHolder {
    // TODO reserve cnus (1. 50% of the total cnus will be allocated as an initial state. 2. service fee will be reserved)

    // Booster
    // TODO Compensate cnus to buy bnus to guarantee (dynamically, upgradable, modifiable by primary)
    // TODO send bnus to bnusRewardPool

    // Whitepaper
    // next version
    // TODO When bnus price becomes too low, convert reserved cnus to bnus (?? hold bnus? X send to bnusRewardPool O)
    // next version
    // TODO When cnus liquidity becomes too low(<25%), issue cnus & (?? send to whom? airdrop?, ?? if it holds bnus, why don't we make it burn its bnus?)
}

