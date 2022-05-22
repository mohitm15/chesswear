import React from "react";
import Link from "next/link";
import Product from "../models/Product";
import mongoose from "mongoose";

const Tshirts = ({ tshirts }) => {
  //console.log(products);

  // tshirts { 'chessformulatshirt': {complete obj } , 'kingchess': {complete obj } ..}

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            {Object.keys(tshirts).length === 0 && (
              <p>
                Sorry! All the T-Shirts are currently out of stock. New stock
                coming soon! Stay tuned{" "}
              </p>
            )}

            {Object.keys(tshirts).map((item) => {
              return (
                <Link
                  passHref={true}
                  key={tshirts[item]._id}
                  href={`/products/${tshirts[item].slug}`}
                >
                  <div className="lg:w-1/5 md:w-1/3 p-4 w-full cursor-pointer shadow-lg m-4 hover:bg-stone-100">
                    <a className="block relative h-64 md:h-72 rounded overflow-hidden">
                      <img
                        alt="ecommerce"
                        className="m-auto transform transition duration-500 hover:scale-110 ease-in-out"
                        src={tshirts[item].img}
                      />
                    </a>
                    <div className="mt-4 text-center">
                      <h3 className="text-blue-500 text-xs tracking-widest title-font font-semibold mb-1">
                        {tshirts[item].category}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {tshirts[item].title}
                      </h2>
                      <p className="mt-1 text-lg">₹ {tshirts[item].price}</p>
                      <div className="mt-1 text-sm">
                        {tshirts[item].size.includes("S") && (
                          <span className="border border-gray-300 px-1 mx-1">
                            S
                          </span>
                        )}
                        {tshirts[item].size.includes("M") && (
                          <span className="border border-gray-300 px-1 mx-1">
                            M
                          </span>
                        )}
                        {tshirts[item].size.includes("L") && (
                          <span className="border border-gray-300 px-1 mx-1">
                            L
                          </span>
                        )}
                        {tshirts[item].size.includes("XL") && (
                          <span className="border border-gray-300 px-1 mx-1">
                            XL
                          </span>
                        )}
                        {tshirts[item].size.includes("XXL") && (
                          <span className="border border-gray-300 px-1 mx-1">
                            XXL
                          </span>
                        )}
                      </div>
                      <div className="mt-1 text-sm">
                        {tshirts[item].color.includes("Green") && (
                          <button className="border-2 border-gray-300 ml-1 bg-green-700 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {tshirts[item].color.includes("Black") && (
                          <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {tshirts[item].color.includes("Red") && (
                          <button className="border-2 border-gray-300 ml-1 bg-red-600 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {tshirts[item].color.includes("Blue") && (
                          <button className="border-2 border-gray-300 ml-1 bg-blue-700 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {tshirts[item].color.includes("Yellow") && (
                          <button className="border-2 border-gray-300 ml-1 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {tshirts[item].color.includes("Purple") && (
                          <button className="border-2 border-gray-300 ml-1 bg-purple-600 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {tshirts[item].color.includes("Maroon") && (
                          <button className="border-2 border-gray-300 ml-1 bg-pink-900 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {tshirts[item].color.includes("White") && (
                          <button className="border-2 border-gray-300 ml-1 bg-white rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {tshirts[item].color.includes("Pink") && (
                          <button className="border-2 border-gray-300 ml-1 bg-pink-500 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let products = await Product.find({ category: "Tshirt" });
  let tshirts = {};

  // tshirts { 'chessformulatshirt': {complete obj } , 'kingchess': {complete obj } ..}

  for (let item of products) {
    //if loop is already visited that product once
    if (item.title in tshirts) {
      //pushing the new tshirt color in colorarray if that color is not present
      if (
        item.availableQty > 0 &&
        !tshirts[item.title].color.includes(item.color)
      ) {
        tshirts[item.title].color.push(item.color);
      }
      //pushing the new tshirt size in sizearray if that size is not present
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
      } else {
        tshirts[item.title].size = [];
        tshirts[item.title].color = [];
      }
      //console.log(tshirts)
    }
  }
  return {
    props: { tshirts: JSON.parse(JSON.stringify(tshirts)) }, // will be passed to the page component as props
  };
}

export default Tshirts;
