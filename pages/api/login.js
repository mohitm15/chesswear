import connectDB from "../../middleware/mongoose";
import User from "../../models/User";
import { useRouter } from "next/router";
var CryptoJS = require("crypto-js");
var jwt = require("jsonwebtoken");

const handler = async (req, res) => {
  if (req.method === "POST") {
    //console.log(req.body);
    let user = await User.findOne({
      email: req.body.email,
    });
    //console.log("User founded from DB = ", user);
    const bytes = CryptoJS.AES.decrypt(user.password, "mohit123");
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
    if (user) {
      if (
        req.body.email === user.email &&
        req.body.password === originalPassword
      ) {
        let token = jwt.sign(
          { name: user.name, email: user.email },
          "jwtsecret",
          { expiresIn: "2d" }
        );
        res.status(200).json({ success: true, authToken: token });
      } else {
        res.status(500).json({ success: false, error: "Invalid Credentials!" });
      }
    } else {
      res.status(500).json({ success: false, error: "User Does Not Exists!" });
    }
  } else {
    // Handle any other HTTP method
    res.status(400).json({ err: "This is bad request" });
  }
};

export default connectDB(handler);
