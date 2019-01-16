# Coin Verse 

CoinUs dApp network

### Smart contracts

#### Ropsten

| Contract                | Address                                      |
| ----------------------- | -------------------------------------------- |
| ContractRegistry        | `0x39bc39da9ef64b613a72789a9f1fa0b402dffb1c` |
| CoinVerseContractIds    | `0x30b7d1965a97919a669b05ca07d6760ab7299197` |
| ContractIds             | `0x928a21a3bc2e5f2798e4a9e6662affcd43550440` |
| ContractFeatures        | `0xca706519f0b08e0d43538b67ea768217c072b875` |
| BancorFormula           | `0x663207b00491d775defd0b3677e2ed987523541c` |
| BancorGasPriceLimit     | `0x56a0a30839a160483a99d63ee0c7fb6d7375d606` |
| BancorConverterFactory  | `0x6877b3c566274533741511b521770b52273e8c05` |
| BancorConverterUpgrader | `0xe75d243a66d2e714bb8f61fba91f902d0f2f7ed0` |
| BancorNetwork           | `0x11b74521c3840043dcc123c784338aff47a976cf` |
| **TokenPool**               | `0x9e11506505e7cab10a541cbdf4c2555090ff81a3` |
| CnusPoolForStaking      | `0xb2b7bbe0cc346e2f49f0a84bda7032f1b96adea1` |
| **BnusToken**               | `0xcef5478cf1d5a6fe9b158677699f09a2d88ccafc` |
| CnusTokenMockUp         | `0x3c79be2eecb54a9771942e73bd5b152bb31e9569` |
| **BnusConverter**           | `0x1cfe3844b2cef53dbefddd1c68e8ea3dde8322c0` |

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
