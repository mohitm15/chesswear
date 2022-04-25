import connectDB from "../../middleware/mongoose";
import Order from "../../models/Order";

//addProduct('Chess-Formula TShirt','chessTshirt`,'IIT Jodhpur,Jodhpur','Wear the exclusive chess chemical  formula tshirt','https://m.media-amazon.com/images/I/51PmO9YDiuL._UL1200_.jpg','tshirt','XL','Black',499,10);

const handler = async (req, res) => { 
  if (req.method === "POST") {

        //TODO1: check if cart is tampered or not
        //TODO2: check if cart items are out of stock
        //TODO3: check if details are valid or not 
        let orderToAdd = new Order({
        email:req.body.email,
        orderId: req.body.oid,
        address:req.body.address,
        subtotal:req.body.subtotal,
        products:req.body.cart,
        status:"Paid",
      });
      await orderToAdd.save();

    res.status(200).json({ success:true });
  } else {
    // Handle any other HTTP method
    res.status(400).json({ success:false });
  }
};

export default connectDB(handler);