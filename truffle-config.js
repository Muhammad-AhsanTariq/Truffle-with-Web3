require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
const { API_URL , PRIVATE_KEY } = process.env;

module.exports = {
  compilers: {
    solc: {
        version: "0.8.0"  
    }
  },
  solidity: "0.8.14",
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    ropsten: {
      provider: () => new HDWalletProvider( PRIVATE_KEY,API_URL),
      network_id: 3,
      gas: 5500000
    }
  }
};