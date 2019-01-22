# Coin Verse 

CoinUs dApp network

Version: 0.1.2

### Smart contracts

#### Ropsten

| Contract                | Address                                      |
| ----------------------- | -------------------------------------------- |
| ContractRegistry        | `0x6fc938ea4b5fb770759e9639f2de7b5a7c13167c` |
| CoinVerseContractIds    | `0xe434edf60ad66636f0537cd6fd067fa3fe31f675` |
| ContractIds             | `0x92f97c8b17285d2315a48473e65ea58fadbb5a3f` |
| ContractFeatures        | `0xc574ef50ccdec282197dc8fe2784e5163b00d5f4` |
| BancorFormula           | `0x71233c3234cffa825f0a6ccbf0a66e03dd5f28a4` |
| BancorGasPriceLimit     | `0x6174932bf64f0fdeb98d0effd0c61b93721107a1` |
| BancorConverterFactory  | `0xf5a660342125d5f33b9bee74fb1a3849be707322` |
| BancorConverterUpgrader | `0xa1f787efc1d38d3a24b49b046f57b47494268ee3` |
| BancorNetwork           | `0x85731aabd4b08909f5918c7004e57f0120701ec6` |
| [**TokenPool**](https://ropsten.etherscan.io/address/0x9b4629561eacb1bbeb4c12b092798c6dfb9b519f#writeContract)            | `0x9b4629561eacb1bbeb4c12b092798c6dfb9b519f` |
| [**CnusPoolForStaking**](https://ropsten.etherscan.io/address/0x047666b3504a2eda85d9e91528666a8b9822776a#writeContract)   | `0x047666b3504a2eda85d9e91528666a8b9822776a` |
| [**BnusToken**](https://ropsten.etherscan.io/address/0x852af8c61aaab54f9f2fe50c902abb30ee7ea426#writeContract)            | `0x852af8c61aaab54f9f2fe50c902abb30ee7ea426` |
| [**CnusTokenMockUp**](https://ropsten.etherscan.io/address/0x2e66549425db5c35e204ff69cc164a5c502df473#writeContract)      | `0x2e66549425db5c35e204ff69cc164a5c502df473` |
| [**BnusConverter**](https://ropsten.etherscan.io/address/0x8427fce0271162d72c9a3d5698171751ef0e7d91#writeContract)        | `0x8427fce0271162d72c9a3d5698171751ef0e7d91` |


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
