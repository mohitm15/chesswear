import pincodes from "../../data_sample/pincodes.json";

export default function handler(req, res) {
  
  res.status(200).json(pincodes);
}
