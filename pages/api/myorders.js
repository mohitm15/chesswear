import Order from "../../models/Order";
import connectDB from "../../middleware/mongoose";
var jwt = require("jsonwebtoken");
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = async(req, res) => {
    const token = req.body.token;
    const data = jwt.verify(token,process.env.JWT_SECRET);
    let mere_orders = Order.find({email: data.email})
    res.status(200).json({ name: "John Doe" });
  }
  

export default connectDB(handler);