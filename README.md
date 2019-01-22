# Coin Verse 

CoinUs dApp network

Version: 0.1.3

### Smart contracts

#### Ropsten

| Contract                | Address                                      |
| ----------------------- | -------------------------------------------- |
| ContractRegistry        | `0x2479ba8a10c7dd2b712a6719d3214ce02f369ed7` |
| CoinVerseContractIds    | `0x70b565f72807161d4cb4f618aa571fcf52fc48f9` |
| ContractIds             | `0xcdadb33b263a9ba7957e2a00254b536da4297c2e` |
| ContractFeatures        | `0xb6c50a40312ae8066a3d7e97f394bbc6f80de7fd` |
| BancorFormula           | `0x381629736d24601214b13e120f19a5513988a4f5` |
| BancorGasPriceLimit     | `0xd38eccbb62a8e76012709be5c3f43cf598dd7bc7` |
| BancorConverterFactory  | `0x7aeb32d73bf9719fcbe0b6b97d42c53d9f4bf77e` |
| BancorConverterUpgrader | `0xecb3d673a0132be4684773960abd88b8fb86d2c8` |
| BancorNetwork           | `0xfe65e5591b9e28ebd92a061c43af5a5530930033` |
| [**TokenPool**](https://ropsten.etherscan.io/address/0x21015bff3f70ad3badb6b3e66f114dfc96aa29e5#writeContract)            | `0x21015bff3f70ad3badb6b3e66f114dfc96aa29e5` |
| [**CnusPoolForStaking**](https://ropsten.etherscan.io/address/0xdb7d401ef3c10e9e3ecce8ef9a3b657768e63e03#writeContract)   | `0xdb7d401ef3c10e9e3ecce8ef9a3b657768e63e03` |
| [**BnusToken**](https://ropsten.etherscan.io/address/0x92968ff7cfd714bb61cd540742f05bd1f1013b7b#writeContract)            | `0x92968ff7cfd714bb61cd540742f05bd1f1013b7b` |
| [**CnusTokenMockUp**](https://ropsten.etherscan.io/address/0x4a5dc96d6c7e6b841417692416f51f5ac7cd43e2#writeContract)      | `0x4a5dc96d6c7e6b841417692416f51f5ac7cd43e2` |
| [**BnusConverter**](https://ropsten.etherscan.io/address/0xe568bb7025d00f11f941f580b25835a351d745bb#writeContract)        | `0xe568bb7025d00f11f941f580b25835a351d745bb` |


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
- [0.1.0](https://github.com/james-lim/coin-verse/projects/1)
- [0.2.0](https://github.com/james-lim/coin-verse/projects/2)


### Development environment

[![](https://img.shields.io/badge/node-v11.6.0-blue.svg)](https://github.com/nodejs/node/releases/tag/v11.6.0) [![](https://img.shields.io/badge/npm-v6.5.0-blue.svg)](https://github.com/npm/cli/releases/tag/v6.5.0) [![](https://img.shields.io/badge/truffle-v4.1.14-blue.svg)](https://github.com/trufflesuite/truffle/releases/tag/v4.1.14) [![](https://img.shields.io/badge/solidity-v0.4.24-blue.svg)](https://github.com/ethereum/solidity/releases/tag/v0.4.24)



### Run test

1. Clone repository

   ```bash
   git clone https://github.com/james-lim/coin-verse
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
