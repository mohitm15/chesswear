import Product from "../../models/Product";
import connectDB from "../../middleware/mongoose";

const handler = async (req, res) => {
  let products = await Product.find();
  let tshirts = {};
  let hoodies = {};
  let chessboards = {};
  let mugs = {};
  // tshirts { 'chessformulatshirt': {complete obj } , 'kingchess': {complete obj } ..}

  for (let item of products) {
    //if loop is already visited that product once

    if (item.title in tshirts) {
      //pushing the new tshirt color in colorarray if that color is not present but tshirt of any other color is present
      if (
        item.availableQty > 0 &&
        !tshirts[item.title].color.includes(item.color)
      ) {
        tshirts[item.title].color.push(item.color);
      }
      //pushing the new tshirt size in sizearray if that size is not present but tshirt of any other size is present
      if (
        item.availableQty > 0 &&
        !tshirts[item.title].size.includes(item.size)
      ) {
        tshirts[item.title].size.push(item.size);
      }
    } else {
      tshirts[item.title] = JSON.parse(JSON.stringify(item));
      if (item.availableQty > 0) {
        tshirts[item.title].size = [item.size];
        tshirts[item.title].color = [item.color];
      }
      //console.log(tshirts)
    }
  }

  res.status(200).json({ tshirts });
};

export default connectDB(handler);
