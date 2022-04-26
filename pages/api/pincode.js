export default function handler(req, res) {
  let pincodes = {
    "744101":["South Andaman","Andaman & Nicobar Islands"],
    "744301":["Nicobar","Andaman & Nicobar Islands"],
    "744201":["North & Middle Andaman","Andaman & Nicobar Islands"],
    "462010":["Bhopal","Madhya Pradesh"],
    "342037":["Jodhpur","Rajasthan"],
    "110003":["Delhi","Delhi"],
    "560017":["Bangalore","Karnataka"],
    "515001":["Ananthpur","Andhra Pradesh"],
    "517001":["Chitoor","Andhra Pradesh"],
    "790104":["Tawang","Arunachal Pradesh"],
    "785675":["Dibrugarh","Assam"],
    "800001":["Patna","Bihar"],
    "140119":["Chandigarh","Chandigarh"],
    "492001":["Raipur","Chattisgarh"],
    "403105":["South Goa","Goa"],
    "380060":["Gandhinagar","Gujarat"],
    "380001":["Ahemdabad","Gujarat"],
    "121001":["Faridabad","Harayana"]
  }
  res.status(200).json(pincodes);
}
