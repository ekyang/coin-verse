# Coin Verse 

CoinUs dApp network

Version: 0.1.4

### Smart contracts

#### Ropsten

| Contract                | Address                                      |
| ----------------------- | -------------------------------------------- |
| ContractRegistry        | `0x3f2b3dc17adf4865021f5102c3985f5c5a859f76` |
| CoinVerseContractIds    | `0x39f19e230cf624f4373ca52ab59d0dfffb19132c` |
| ContractIds             | `0xd6d9dc2c975720e42e91b91c943bf4f483f02985` |
| ContractFeatures        | `0x8533fdbb1cb7729afa79c92e336ed68bcc9a2d72` |
| BancorFormula           | `0x09e6d83c3136fb2a3d46a4756ec59a712ffb0d9b` |
| BancorGasPriceLimit     | `0xd2394d01dbf5ede58432bd2ae512d4be2e0d962e` |
| BancorConverterFactory  | `0xe2a35220c524d3dd2f4a184262bd837e64dbe1a5` |
| BancorConverterUpgrader | `0x5325090ba91ce3026b9321f0eb0af23554445994` |
| BancorNetwork           | `0xd12be7027d709b63a58f58fa2b04ca7891297471` |
| [**TokenPool**](https://ropsten.etherscan.io/address/0x5c4ad3d531c0265bbec430b7becb66809aadcd4e#writeContract)            | `0x5c4ad3d531c0265bbec430b7becb66809aadcd4e` |
| [**CnusPoolForStaking**](https://ropsten.etherscan.io/address/0x78f73b3011523cb44921329a4fba49a425ffd723#writeContract)   | `0x78f73b3011523cb44921329a4fba49a425ffd723` |
| [**BnusToken**](https://ropsten.etherscan.io/address/0xf0119b5d878deaaa437d3acd279a7912b0ac6d9a#writeContract)            | `0xf0119b5d878deaaa437d3acd279a7912b0ac6d9a` |
| [**CnusTokenMockUp**](https://ropsten.etherscan.io/address/0xa354eb933605d7d51327c21c7e173eb37e5c8833#writeContract)      | `0xa354eb933605d7d51327c21c7e173eb37e5c8833` |
| [**BnusConverter**](https://ropsten.etherscan.io/address/0x3027e00526bae4c845eefd5fc66d1ae69669d3d2#writeContract)        | `0x3027e00526bae4c845eefd5fc66d1ae69669d3d2` |


#### Mainnet

| Contract                | Address                                      |
| ----------------------- | -------------------------------------------- |
| ContractRegistry        | `0x0000000000000000000000000000000000000000` |
| CoinVerseContractIds    | `0x0000000000000000000000000000000000000000` |
| ContractIds             | `0x0000000000000000000000000000000000000000` |
| ContractFeatures        | `0x0000000000000000000000000000000000000000` |
| BancorFormula           | `0x0000000000000000000000000000000000000000` |
| BancorGasPriceLimit     | `0x0000000000000000000000000000000000000000` |
| BancorConverterFactory  | `0x0000000000000000000000000000000000000000` |
| BancorConverterUpgrader | `0x0000000000000000000000000000000000000000` |
| BancorNetwork           | `0x0000000000000000000000000000000000000000` |
| **TokenPool**               | `0x0000000000000000000000000000000000000000` |
| CnusPoolForStaking      | `0x0000000000000000000000000000000000000000` |
| **BnusToken**               | `0x0000000000000000000000000000000000000000` |
| CnusTokenMockUp         | `0x0000000000000000000000000000000000000000` |
| **BnusConverter**           | `0x0000000000000000000000000000000000000000` |


## Development status

- [Milestones](https://github.com/James-Lim/coin-verse/milestones)
- [0.1.0](https://github.com/wanseob/coin-verse/projects/1)
- [0.2.0](https://github.com/wanseob/coin-verse/projects/2)


### Development environment

[![](https://img.shields.io/badge/node-v11.6.0-blue.svg)](https://github.com/nodejs/node/releases/tag/v11.6.0) [![](https://img.shields.io/badge/npm-v6.5.0-blue.svg)](https://github.com/npm/cli/releases/tag/v6.5.0) [![](https://img.shields.io/badge/truffle-v4.1.14-blue.svg)](https://github.com/trufflesuite/truffle/releases/tag/v4.1.14) [![](https://img.shields.io/badge/solidity-v0.4.24-blue.svg)](https://github.com/ethereum/solidity/releases/tag/v0.4.24)



### Run test

1. Clone repository

   ```bash
   git clone https://github.com/wanseob/coin-verse
   ```

2. Install packages

   ```bash
   npm install
   ```

3. Run the following command

   ```bash
   npm run test
   ```


### Deployment via infura.io

1. Setup .env file in the project root directory

   ```bash
   MNENOMIC=work1 word2 word3 word4 word5 word6 word7 word8 word9 word10 word11 word12
   INFURA_API_KEY=b1a22d17d8ef102bcda3f2c928da3c47
   ```

2. Run the following command

   ```bash
   ./node_modules/.bin/truffle migrate --network ropsten # ropsten
   ./node_modules/.bin/truffle migrate --network mainnet # mainnet
   ```


## License

[MIT License](LICENSE)
