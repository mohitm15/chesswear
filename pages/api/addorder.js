import connectDB from "../../middleware/mongoose";
import Order from "../../models/Order";
import Product from "../../models/Product";

const handler = async (req, res) => {
  if (req.method === "POST") {
    let product,
      sumtotal = 0;
    for (let item in req.body.cart) {
      //got key(slug) as item
      console.log(item);
      sumtotal += req.body.cart[item].qty * req.body.cart[item].price;
      product = await Product.findOne({ slug: item });

      //TODO1: check if cart is tampered or not
      if (product.price !== req.body.cart[item].price) {
        res.status(500).json({ success: false, error: "err1" });
        //console.log("ResT - ",res.json)
        return;
      }

      //TODO2: check if cart items are out of stock
      if (product.availableQty < req.body.cart[item].qty) {
        res.status(500).json({ success: false, error: "err2" });
        return;
      }
    }
    //console.log("sumtotal = ",sumtotal," and subtotal =  ",req.body.subtotal)
    if (sumtotal != req.body.subtotal) {
      res.status(500).json({ success: false, error: "err5" });
      //console.log("ResP - ",res)
      return;
    }

    //TODO3: check if details are valid or not
    //subtotal detail
    if(req.body.subtotal <= 0) {
      res.status(500).json({ success: false, error: "err6" });
      return;
    }

    if(req.body.phone.length != 10 || !Number.isInteger(req.body.phone)) {
      res.status(500).json({ success: false, error: "err7" });
      return;
    }

    if(req.body.pincode.length != 6 || !Number.isInteger(req.body.pincode)) {
      res.status(500).json({ success: false, error: "err8" });
      return;
    }

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

    res.status(200).json({ success: true ,orderToAdd});
    //res.redirect('/order?id=' + orderToAdd._id, 200)
  } else {
    // Handle any other HTTP method
    res.status(400).json({ success: false });
  }
};

export default connectDB(handler);
