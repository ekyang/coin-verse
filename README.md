# Coin Verse 

CoinUs dApp network

### Smart contracts

#### Ropsten

| Contract                | Address                                      |
| ----------------------- | -------------------------------------------- |
| ContractRegistry        | `0x14cc9550b54ac0382a8cb37a6ee424bb1776bc84` |
| CoinVerseContractIds    | `0x7ad341966836fe13401d240f1974373cf0e070ad` |
| ContractIds             | `0x187edbece2cecfa3b4fae5c7918bbb9c4a97e46e` |
| ContractFeatures        | `0x6cce96090e000e914cfe62ccf079f25f0a65a130` |
| BancorFormula           | `0xd7b0a837fe961295295cdef2467848cc7cb7777f` |
| BancorGasPriceLimit     | `0x539d29f7a27e8ea7b22c4648af682293ab3ba1a7` |
| BancorConverterFactory  | `0x6ee4e4b4fd5380bc2fb85f416da73796ef040d44` |
| BancorConverterUpgrader | `0x248164eba69dd716999fa496d7a9f727137154de` |
| BancorNetwork           | `0x7d9790794452848edb317ab1221acb3c7c5d7e32` |
| **TokenPool**           | `0x7358bf76407a8a9d57c790d882a0d73d2bacff34` |
| **BnusToken**           | `0xfea8dcd38b76b3e047948c9af86d45d18ebfe144` |
| CnusTokenMockup         | `0x03f00eff0af3e49e9ec24ceb5f27e62e7ca18778` |
| **BnusConverter**       | `0xaad81156fa442e704cee07e37d9e27d449ef9632` |

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
| **TokenPool**           | `0x0000000000000000000000000000000000000000` |
| **BnusToken**           | `0x0000000000000000000000000000000000000000` |
| CnusTokenMockup         | `0x0000000000000000000000000000000000000000` |
| **BnusConverter**       | `0x0000000000000000000000000000000000000000` |


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
