import connectDB from "../../middleware/mongoose";
import Order from "../../models/Order";
import Product from "../../models/Product";

const handler = async (req, res) => {
  if (req.method === "POST") {

    //TODO1: check if cart is tampered or not
    let product, sumtotal=0;
    for(let item in req.body.cart ){
      //got key(slug) as item
      console.log(item)
      sumtotal += req.body.cart[item].qty* req.body.cart[item].price;
      product = await Product.findOne({slug:item});
      if(product.price !== req.body.cart[item].price){
        res.status(500).json({success:false,error:"err1"})
        //console.log("ResT - ",res.json)
        return
      }
    }
    //console.log("sumtotal = ",sumtotal," and subtotal =  ",req.body.subtotal)
    if(sumtotal != req.body.subtotal) {
      res.status(500).json({success:false,error:"err2"})
      //console.log("ResP - ",res)
      return
    }

    //TODO2: check if cart items are out of stock
    //TODO3: check if details are valid or not
    let orderToAdd = new Order({
      email: req.body.email,
      orderId: req.body.oid,
      address: req.body.address,
      subtotal: req.body.subtotal,
      products: req.body.cart,
      status: "Paid",
    });
    await orderToAdd.save();

    res.status(200).json({ success: true });
  } else {
    // Handle any other HTTP method
    res.status(400).json({ success: false });
  }
};

export default connectDB(handler);
