# Coin Verse 

CoinUs dApp network

### Smart contracts

#### Ropsten

| Contract                | Address                                      |
| ----------------------- | -------------------------------------------- |
| ContractRegistry        | `0x61ca557c37e1835158ed3891639c008454307078` |
| CoinVerseContractIds    | `0x6cbd14515b6e22bcf0a35bad2711087711edc0cb` |
| ContractIds             | `0xd783fa910384449eb2fb707410c2a64825d04950` |
| ContractFeatures        | `0x5638a17c3539feacb79b4dc8c29fa4673295d7d1` |
| BancorFormula           | `0x8a85ece812f10e432db3d22663215759329da2e7` |
| BancorGasPriceLimit     | `0x51ea3184b3a779f7193ff39fa08e5e30069933b2` |
| BancorConverterFactory  | `0x7d9e74c9a10b8cac260d546d1ec059d7ada94e10` |
| BancorConverterUpgrader | `0x21e193acf331ce26103a16d58c12239315c89671` |
| BancorNetwork           | `0xf264b4fb838e35c0e23b7a708d741a0b427cbfa3` |
| [**TokenPool**](https://ropsten.etherscan.io/address/0xa872e0b4c174acaf17f148473a8d9277840e5931#code)            | `0xa872e0b4c174acaf17f148473a8d9277840e5931` |
| [**CnusPoolForStaking**](https://ropsten.etherscan.io/address/0x695192edbcdd5a13b63ec2cb917dd0ffedf83be9#code)   | `0x695192edbcdd5a13b63ec2cb917dd0ffedf83be9` |
| [**BnusToken**](https://ropsten.etherscan.io/address/0xda8b08b7a86ef1c2e479d3ef4d2fd42016fe03e5#code)            | `0xda8b08b7a86ef1c2e479d3ef4d2fd42016fe03e5` |
| [**CnusTokenMockUp**](https://ropsten.etherscan.io/address/0xc1337a2900cb13f242a3d38a7c96229bfd7b6f15#code)      | `0xc1337a2900cb13f242a3d38a7c96229bfd7b6f15` |
| [**BnusConverter**](https://ropsten.etherscan.io/address/0xd49ad56a06408ed5fd20db0512a069f4daa23336#code)        | `0xd49ad56a06408ed5fd20db0512a069f4daa23336` |

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
