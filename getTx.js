const Web3 =require ("web3");
const init = async ()=> {

    const web3 = new Web3(
        "https://ropsten.infura.io/v3/a3f448ea7fec4f16aef704c7ce1024fe"
    );    

const CONTRACT_ADDRESS = " 0xE080141D2Bc976caD8A557e2CC5BACa8fE8496E5";
const CONTRACT_ABI = require("./build/contracts/PlayerContract.json");
const address = CONTRACT_ADDRESS;
const networkId = await web3.eth.net.getId();
const myContract = new web3.eth.Contract(
    CONTRACT_ABI.abi,
    CONTRACT_ABI.networks[networkId].address
  );
console.log(await myContract.methods.getAllPlayer().call());

const receipt = await myContract.methods.getAllPlayer().call({ from: "0x968975c8B97B84D3f363d06ce43a6b3FFBD80536" });

console.log(`PlayerCount: ${await myContract.methods.playerCount().call()}`);
    }
init();