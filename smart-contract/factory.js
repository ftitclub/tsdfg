import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x425343473d392056D39f4Cadd4411c5040d6e0F9"
);

export default instance;
