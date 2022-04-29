import React from "react";
import Link from "next/link";
import Product from "../models/Product";
import mongoose from "mongoose";

const Chessboards = ({ chessboards }) => {
  //console.log(chessboards);

  // chessboards { 'chessbtschessboard': {complete obj } , 'kingchess': {complete obj } ..}

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            {Object.keys(chessboards).length === 0 && (
              <p className="text-lg tracking-wide py-44">
                Sorry! All the Chessboards are currently out of stock. New stock
                coming soon! Stay tuned{" "}
              </p>
            )}

            {Object.keys(chessboards).map((item) => {
              return (
                <Link
                  passHref={true}
                  key={chessboards[item]._id}
                  href={`/products/${chessboards[item].slug}`}
                >
                  <div className="lg:w-1/5 md:w-1/3 p-4 w-full cursor-pointer shadow-lg m-4 hover:bg-stone-100">
                    <a className="block relative h-64 md:h-72 rounded overflow-hidden">
                      <img
                        alt="ecommerce"
                        className="m-auto"
                        src={chessboards[item].img}
                      />
                    </a>
                    <div className="mt-4 text-center">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {chessboards[item].category}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {chessboards[item].title}
                      </h2>
                      <p className="mt-1 text-lg">
                        ₹ {chessboards[item].price}
                      </p>
                      <div className="mt-1 text-sm">
                        {chessboards[item].size.includes("10x10") && (
                          <span className="border border-gray-300 px-1 mx-1">
                            10x10
                          </span>
                        )}
                        {chessboards[item].size.includes("12x12") && (
                          <span className="border border-gray-300 px-1 mx-1">
                            12x12
                          </span>
                        )}
                        {chessboards[item].size.includes("17x17") && (
                          <span className="border border-gray-300 px-1 mx-1">
                            17x17
                          </span>
                        )}
                        {chessboards[item].size.includes("XL") && (
                          <span className="border border-gray-300 px-1 mx-1">
                            XL
                          </span>
                        )}
                        {chessboards[item].size.includes("XXL") && (
                          <span className="border border-gray-300 px-1 mx-1">
                            XXL
                          </span>
                        )}
                      </div>
                      <div className="mt-1 text-sm">
                        {chessboards[item].color.includes("Green") && (
                          <button className="border-2 border-gray-300 ml-1 bg-green-700 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {chessboards[item].color.includes("Black") && (
                          <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {chessboards[item].color.includes("Brown") && (
                          <button className="border-2 border-gray-300 ml-1 bg-rose-800 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {chessboards[item].color.includes("Blue") && (
                          <button className="border-2 border-gray-300 ml-1 bg-blue-700 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}

                        {chessboards[item].color.includes("White") && (
                          <button className="border-2 border-gray-300 ml-1 bg-white rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {chessboards[item].color.includes("Pink") && (
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
  let products = await Product.find({ category: "Chessboard" });
  let chessboards = {};

  // chessboards { 'chessformulachessboard': {complete obj } , 'kingchess': {complete obj } ..}

  for (let item of products) {
    //if loop is already visited that product once
    if (item.title in chessboards) {
      //pushing the new chessboard color in colorarray if that color is not present
      if (
        item.availableQty > 0 &&
        !chessboards[item.title].color.includes(item.color)
      ) {
        chessboards[item.title].color.push(item.color);
      }
      //pushing the new chessboard size in sizearray if that size is not present
      if (
        item.availableQty > 0 &&
        !chessboards[item.title].size.includes(item.size)
      ) {
        chessboards[item.title].size.push(item.size);
      }
    } else {
      chessboards[item.title] = JSON.parse(JSON.stringify(item));
      if (item.availableQty > 0) {
        chessboards[item.title].size = [item.size];
        chessboards[item.title].color = [item.color];
      }
      //console.log(chessboards)
    }
  }
  return {
    props: { chessboards: JSON.parse(JSON.stringify(chessboards)) }, // will be passed to the page component as props
  };
}

export default Chessboards;
