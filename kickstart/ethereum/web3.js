const Web3 = require('web3');
// const web3 = new Web3(window.web3.currentProvider);
let web3;
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running
  web3 = new Web3(window.web3.currentProvider);
} else {
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q'
  )
  web3 = new Web3(provider);
}
export default web3;
