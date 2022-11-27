import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xE8aC648Fc151926FBAaffAaF42ECF8591E35D6e9"
);

export default instance;
