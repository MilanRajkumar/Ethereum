import web3 from './web3';

import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x808e2b62DD3cad8be64385Da00A5Ec05002f5255'
)

export default instance;
