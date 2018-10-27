const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const INITIAL_MESSAGE = 'Hi there!'

const provider = new HDWalletProvider(
  'high powder scatter athlete gift negative street retreat cube river maid raw',
  'https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts()
  const result = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({ data: bytecode, arguments: [INITIAL_MESSAGE] })
  .send({ from: accounts[0], gas: '1000000' })
}

deploy()
