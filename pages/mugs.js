import React from "react";
import Link from "next/link";
import Product from "../models/Product";
import mongoose from "mongoose";

const Mugs = ({ mugs }) => {
  //console.log("mugs = ",mugs);

  // mugs { 'chessbtsmug': {complete obj } , 'kingchess': {complete obj } ..}

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            {Object.keys(mugs).length === 0 && (
              <p className="text-lg tracking-wide py-44">
                Sorry! All the Mugs are currently out of stock. New stock coming
                soon! Stay tuned{" "}
              </p>
            )}

            {Object.keys(mugs).map((item) => {
              return (
                <Link
                  passHref={true}
                  key={mugs[item]._id}
                  href={`/products/${mugs[item].slug}`}
                >
                  <div className="lg:w-1/5 md:w-1/3 p-4 w-full cursor-pointer shadow-lg m-4 hover:bg-stone-100">
                    <a className="block relative h-64 md:h-72 rounded overflow-hidden">
                      <img
                        alt="ecommerce"
                        className="m-auto"
                        src={mugs[item].img}
                      />
                    </a>
                    <div className="mt-4 text-center">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {mugs[item].category}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {mugs[item].title}
                      </h2>
                      <p className="mt-1 text-lg">₹ {mugs[item].price}</p>
                      <div className="mt-1 text-sm">
                        {mugs[item].size.includes("S") && (
                          <span className="border border-gray-300 px-1 mx-1">
                            S
                          </span>
                        )}
                        {mugs[item].size.includes("M") && (
                          <span className="border border-gray-300 px-1 mx-1">
                            M
                          </span>
                        )}
                        {mugs[item].size.includes("L") && (
                          <span className="border border-gray-300 px-1 mx-1">
                            L
                          </span>
                        )}
                        {mugs[item].size.includes("XL") && (
                          <span className="border border-gray-300 px-1 mx-1">
                            XL
                          </span>
                        )}
                        {mugs[item].size.includes("XXL") && (
                          <span className="border border-gray-300 px-1 mx-1">
                            XXL
                          </span>
                        )}
                      </div>
                      <div className="mt-1 text-sm">
                        {mugs[item].color.includes("Green") && (
                          <button className="border-2 border-gray-300 ml-1 bg-green-700 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {mugs[item].color.includes("Black") && (
                          <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {mugs[item].color.includes("Red") && (
                          <button className="border-2 border-gray-300 ml-1 bg-red-600 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {mugs[item].color.includes("Blue") && (
                          <button className="border-2 border-gray-300 ml-1 bg-blue-700 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {mugs[item].color.includes("Yellow") && (
                          <button className="border-2 border-gray-300 ml-1 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {mugs[item].color.includes("Purple") && (
                          <button className="border-2 border-gray-300 ml-1 bg-purple-600 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {mugs[item].color.includes("Maroon") && (
                          <button className="border-2 border-gray-300 ml-1 bg-pink-900 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {mugs[item].color.includes("White") && (
                          <button className="border-2 border-gray-300 ml-1 bg-white rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {mugs[item].color.includes("Pink") && (
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
  let products = await Product.find({ category: "Mug" });
  let mugs = {};

  // mugs { 'chessformulamug': {complete obj } , 'kingchess': {complete obj } ..}

  for (let item of products) {
    //if loop is already visited that product once
    if (item.title in mugs) {
      //pushing the new mug color in colorarray if that color is not present
      if (
        item.availableQty > 0 &&
        !mugs[item.title].color.includes(item.color)
      ) {
        mugs[item.title].color.push(item.color);
      }
      //pushing the new mug size in sizearray if that size is not present
      if (item.availableQty > 0 && !mugs[item.title].size.includes(item.size)) {
        mugs[item.title].size.push(item.size);
      }
    } else {
      mugs[item.title] = JSON.parse(JSON.stringify(item));
      if (item.availableQty > 0) {
        mugs[item.title].size = [item.size];
        mugs[item.title].color = [item.color];
      }
      //console.log(mugs)
    }
  }
  return {
    props: { mugs: JSON.parse(JSON.stringify(mugs)) }, // will be passed to the page component as props
  };
}

export default Mugs;
