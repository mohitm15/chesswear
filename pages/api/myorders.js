import Order from "../../models/Order";
import connectDB from "../../middleware/mongoose";
import jsonwebtoken from "jsonwebtoken";
var jwt = require("jsonwebtoken");
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = async(req, res) => {
    const token = req.body.token;
    const data = jsonwebtoken.verify(token,process.env.JWT_SECRET);
    let mere_orders = await Order.find({email: data.email})
    //console.log("mereorders1 = ", mere_orders)
    res.status(200).json({myorders:mere_orders});
  }
  

export default connectDB(handler);