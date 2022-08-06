const Web3 = require('web3');
require("dotenv").config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
const CONTRACT_ABI = require('./build/contracts/PlayerContract.json');
const address = process.env.CONTRACT_ADDRESS;
const privateKey = process.env.PRIVATE_KEY;
const infuraUrl = process.env.API_URL; 

const init = async () => {
    const provider = new HDWalletProvider(privateKey, infuraUrl); 
    const web3 = new Web3(provider);
    const networkId = await web3.eth.net.getId();
    const myContract = new web3.eth.Contract(
      CONTRACT_ABI.abi,
      CONTRACT_ABI.networks[networkId].address
    );
  
    console.log(await myContract.methods.playerCount().call());
    console.log(`Old playerCount: ${await myContract.methods.playerCount().call()}`);
    const receipt = await myContract.methods.addPlayer("AHSAN,",10,200).send({ from: address });
    console.log(`Transaction hash: ${receipt.transactionHash}`);
    console.log(`New PlayerCount: ${await myContract.methods.playerCount().call()}`);
  }
  
  init();