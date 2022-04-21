import connectDB from "../../middleware/mongoose";
import User from "../../models/User";


const handler = async (req, res) => {
  if (req.method === "POST") {
    //console.log(req.body);
    let newUser = new User(req.body);
    await newUser.save();
    res.status(200).json({ res: "Successfully User added" });
  } else {
    // Handle any other HTTP method
    res.status(400).json({ err: "This is bad request" });
  }
};

export default connectDB(handler);
