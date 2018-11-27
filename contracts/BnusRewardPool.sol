pragma solidity ^0.4.24;

import "bancor-contracts/solidity/contracts/utility/TokenHolder.sol";

contract BnusRewardPool is TokenHolder {

    // TODO reserve initial issued bnus
    // TODO airdrop (by admin)

    // NEXT VERSION
    // TODO set pocket size by cnus stake amount
    // TODO restrict bnus reward by pocket size
    // TODO receive cnus from CoinVerseServices
    // TODO convert received cnus to Bnus (using BancorConverter) and reward stake(cnus) holders
    // TODO send remaining cnus to the cnus stabilizer (not sure)
}
