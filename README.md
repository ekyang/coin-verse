# Coin Verse 

CoinUs dApp network

### Smart contracts

#### Ropsten

| Contract                | Address                                      |
| ----------------------- | -------------------------------------------- |
| ContractRegistry        | `0xcf79e3f6f1a9460ec967ac588aaa4e780fe656ea` |
| CoinVerseContractIds    | `0x525f87ab1cb7656d566fb44d06b83528a69a5d5d` |
| ContractIds             | `0x962e626141a35761c21996b8103d6de8530e628b` |
| ContractFeatures        | `0x9e2d06b70fa737306fb18b4e27e66d2605d4ea37` |
| BancorFormula           | `0xea9585a6e1914a08a93f391e173f16db3c3d5278` |
| BancorGasPriceLimit     | `0x85e92b2051b870195132bf9986227db96050ba84` |
| BancorConverterFactory  | `0x4b36e98e8ca13ec971b06f10b7cc65be5806c5f1` |
| BancorConverterUpgrader | `0x1c6a39910722412f7acdd97c0de8d71d9bf0aefc` |
| BancorNetwork           | `0xb86773e53fcfb27352ff3c78f419dc839affcf65` |
| [**TokenPool**](https://ropsten.etherscan.io/address/0x27a1388b44b0380965fb292153b1c5b6aed4446b#code)            | `0x27a1388b44b0380965fb292153b1c5b6aed4446b` |
| [**CnusPoolForStaking**](https://ropsten.etherscan.io/address/0xae52d8a8851287e52743fc92474a1ed7e1493e04#code)   | `0xae52d8a8851287e52743fc92474a1ed7e1493e04` |
| [**BnusToken**](https://ropsten.etherscan.io/address/0xd6da7c309a6b646d48d6d90473e8ec4925b70707#code)            | `0xd6da7c309a6b646d48d6d90473e8ec4925b70707` |
| [**CnusTokenMockUp**](https://ropsten.etherscan.io/address/0x26c74ee5cd99e511043cfba764562f643abf81f5#code)      | `0x26c74ee5cd99e511043cfba764562f643abf81f5` |
| [**BnusConverter**](https://ropsten.etherscan.io/address/0xe6db6805332f3e8b41983d94d9238a1efb4b430e#code)        | `0xe6db6805332f3e8b41983d94d9238a1efb4b430e` |


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
