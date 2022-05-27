import connectDB from "../../middleware/mongoose";
import Order from "../../models/Order";
import Product from "../../models/Product";
import serviceable_pincodes from "../../data_sample/pincodes.json";
var jwt =  require("jsonwebtoken");


const handler = async (req, res) => {

  console.log(serviceable_pincodes)
  
  let token = jwt.sign(
    { email: req.body.email },
    process.env.JWT_SECRET,
    { expiresIn: "2d" }
  );

  if (req.method === "POST") {
    let product,
      sumtotal = 0;
    for (let item in req.body.cart) {
      //got key(slug) as item
      //console.log(item);
      sumtotal += req.body.cart[item].qty * req.body.cart[item].price;
      product = await Product.findOne({ slug: item });

      //TODO1: check if cart is tampered or not
      if (product.price !== req.body.cart[item].price) {
        res.status(500).json({ success: false, error: "err1", authToken:token });
        //console.log("ResT - ",res.json)
        return;
      }

      //TODO2: check if cart items are out of stock
      if (product.availableQty < req.body.cart[item].qty) {
        res.status(500).json({ success: false, error: "err2", authToken:token });
        return;
      }
    }
    //console.log("sumtotal = ",sumtotal," and subtotal =  ",req.body.subtotal)
    if (sumtotal != req.body.subtotal) {
      res.status(500).json({ success: false, error: "err5", authToken:token });
      //console.log("ResP - ",res)
      return;
    }

    //TODO3: check if details are valid or not
    //subtotal detail
    if(req.body.subtotal <= 0) {
      res.status(500).json({ success: false, error: "err6", authToken:token });
      return;
    }

    //TODO4: check if phone number is of coorect length
    if(req.body.phone.length != 10 || Number.isInteger(req.body.phone)) {
      //console.log("len = ",req.body.phone.length)
      res.status(500).json({ success: false, error: "err7", authToken:token });
      return;
    }
    //TODO5: check if pincode is of coorect length
    if(req.body.pincode.length != 6 || Number.isInteger(req.body.pincode)) {
      res.status(500).json({ success: false, error: "err8", authToken:token });
      return;
    }

    //TODO6: check if pincode is serviceable
    if(!Object.keys(serviceable_pincodes).includes(req.body.pincode)) {
      //console.log("req.body = ", req.body.pincode)
      //console.log("verdict = ",Object.keys(serviceable_pincodes).includes((req.body.pincode)) )     
      res.status(500).json({success:false, error: "err9", authToken:token});
      return;
    }


    //TODO:inport name in the userToken thing.
    
    let orderToAdd = new Order({
      email: req.body.email,
      orderId: req.body.oid,
      address: req.body.address,
      subtotal: req.body.subtotal,  
      products: req.body.cart,
      status: "Paid",
    });
    await orderToAdd.save();

    let ordered_products = orderToAdd.products;
    //console.log("Orederd pro = ", ordered_products);
    //console.log("complete order = ", orderToAdd)
    for (let slug in ordered_products) {
      await Product.findOneAndUpdate(
        { slug: slug },
        { $inc: { availableQty: -ordered_products[slug].qty } }
      );
    }

    res.status(200).json({ success: true ,orderToAdd, authToken: token});
    //res.redirect('/order?id=' + orderToAdd._id, 200)
  } else {
    // Handle any other HTTP method
    res.status(400).json({ success: false });
  }
};

export default connectDB(handler);
