import connectDB from "../../middleware/mongoose";
import Product from "../../models/Product";

//addProduct('Chess-Formula TShirt','chessTshirt`,'IIT Jodhpur,Jodhpur','Wear the exclusive chess chemical  formula tshirt','https://m.media-amazon.com/images/I/51PmO9YDiuL._UL1200_.jpg','tshirt','XL','Black',499,10);

const handler = async (req, res) => {
  if (req.method === "POST") {
    for (let i = 0; i < req.body.length; i++) {
      let productToAdd = new Product({
        title: req.body[i].title,
        slug: req.body[i].slug,
        address: req.body[i].address,
        desc: req.body[i].desc,
        img: req.body[i].img,
        category: req.body[i].category,
        size: req.body[i].size,
        color: req.body[i].color,
        price: req.body[i].price,
        availableQty: req.body[i].availableQty,
      });
      await productToAdd.save();
    }
    res.status(200).json({ res: "Successfully added" });
  } else {
    // Handle any other HTTP method
    res.status(400).json({ err: "This is bad request" });
  }
};

export default connectDB(handler);
