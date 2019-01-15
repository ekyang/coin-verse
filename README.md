# Coin Verse 

CoinUs dApp network

### Smart contracts

#### Ropsten

| Contract                | Address                                      |
| ----------------------- | -------------------------------------------- |
| ContractRegistry        | `0xa15c31487152feb2b496771b5455ee859e08a593` |
| CoinVerseContractIds    | `0x992943a8db682642401cf57efb797a0916ebf1a5` |
| ContractIds             | `0x876c90da037a014427e2a3956cef79c053a8c35e` |
| ContractFeatures        | `0x09b4c953cb0c3bd74efc03e695fbc988a87fdfb6` |
| BancorFormula           | `0x61d69d9d9629a5a15c34646f501374b2a181adad` |
| BancorGasPriceLimit     | `0x0d606b13ba659e9a5a85747d85fc25d031accbd9` |
| BancorConverterFactory  | `0xa383b844d820e7c8febd0548e1ebd39bf0cd4430` |
| BancorConverterUpgrader | `0xddfbb15f76ea7eb136fe62bf83eb28f7c802d73d` |
| BancorNetwork           | `0x2cd3b7e5b6b79e3ddc6b6b16ea67a4e0716c6219` |
| **TokenPool**               | `0x2b59167a65fc1a1eaeae2f791ed7c01aa8bfadeb` |
| CnusPoolForStaking      | `0xf189ccfd1317af58329a0a0f6780f8f0224252ce` |
| **BnusToken**               | `0xbeebff2ff8c2c1a2bbc61ffb88873195006631a7` |
| CnusTokenMockUp         | `0xf0fc1aea203ac4f0fdb9a530c8773d8e0fe09595` |
| **BnusConverter**           | `0xadec9a3fefa20f5e1275c911700fd6208c9ae0f3` |

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
