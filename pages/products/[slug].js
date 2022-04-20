import React, { useState } from "react";
import { useRouter } from "next/router";
import mongoose from "mongoose";
import Product from "../../models/Product";

import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";


const Slug = ({ addToCart, buyNow, all_Tshirts, colorSizeSlug,product }) => {
  //console.log(all_Tshirts);

  //console.log("keys = ",Object.keys(colorSizeSlug["Red"]))

  const router = useRouter();
  const { slug } = router.query;
  const [pin, setPin] = useState();
  const [isAvailable, setIsAvailable] = useState();

  const [color, setColor] = useState(all_Tshirts[0].color);
  const [size, setSize] = useState(all_Tshirts[0].size);

  //console.log("size =", size, " color = ", color);

  const checkservicibilty = async () => {
    let pins = await fetch("http://localhost:3000/api/pincode");
    let pinjson = await pins.json();
    //console.log(pin, pinjson);
    if (pinjson.includes(pin)) {
      setIsAvailable(true);
      //console.log("Available");
      toast.success('Your Pincode is serviceable', {
        position: "bottom-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });
    } else {
      setIsAvailable(false);
      //console.log("NOt");
      toast.error('Sorry! Pincode is not serviceable', {
        position: "bottom-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });
    }
  };

  const onChangePin = (e) => {
    setPin(e.target.value);
  };

  const refreshVariant = (newsize, newcolor) => {
    let url = `http://localhost:3000/products/${colorSizeSlug[newcolor][newsize]["slug"]}`;
    //console.log("url = ",url, "newcolor - ",newcolor, "newsize - ", newsize)
    //console.log("newvaraint -", colorSizeSlug)
    router.push(url,undefined,{shallow:true});
  };



  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
      <ToastContainer
        position="bottom-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"
        />
        <div className="container px-5 py-16 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full h-80 lg:h-[36rem] object-cover object-top rounded"
              src={`${colorSizeSlug[color][size]["url"]}`}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                CHESS WEAR
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {all_Tshirts[0].title} [{color} - {size}]
              </h1>
              <div className="flex mb-4">


                {/* <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-blue-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-blue-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-blue-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-blue-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-blue-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span> */}


              </div>
              <p className="leading-relaxed">
                {all_Tshirts[0].desc}
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  {Object.keys(colorSizeSlug).includes("Red") &&
                    Object.keys(colorSizeSlug["Red"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant(size, "Red");
                          setColor("Red");
                        }}
                        className={`border-2 bg-red-600 rounded-full w-6 h-6 focus:outline-none ${
                          color === "Red" ? "border-black" : "border-gray-300"
                        }`}
                      ></button>
                    )}
                  {Object.keys(colorSizeSlug).includes("Green") &&
                    Object.keys(colorSizeSlug["Green"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant(size, "Green");
                          setColor("Green");
                        }}
                        className={`border-2 ml-1 bg-green-600 rounded-full w-6 h-6 focus:outline-none ${
                          color === "Green" ? "border-black" : "border-gray-300"
                        }`}
                      ></button>
                    )}
                  {Object.keys(colorSizeSlug).includes("Black") &&
                    Object.keys(colorSizeSlug["Black"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant(size, "Black");
                          setColor("Black");
                        }}
                        className={`border-2 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none ${
                          color === "Black" ? "border-black" : "border-gray-300"
                        }`}
                      ></button>
                    )}
                  {Object.keys(colorSizeSlug).includes("White") &&
                    Object.keys(colorSizeSlug["White"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant(size, "White");
                          setColor("White");
                        }}
                        className={`border-2 bg-white rounded-full w-6 h-6 focus:outline-none ${
                          color === "White" ? "border-black" : "border-gray-300"
                        }`}
                      ></button>
                    )}
                  {Object.keys(colorSizeSlug).includes("Yellow") &&
                    Object.keys(colorSizeSlug["Yellow"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant(size, "Yellow");
                          setColor("Yellow");
                        }}
                        className={`border-2 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none ${
                          color === "Yellow"
                            ? "border-black"
                            : "border-gray-300"
                        }`}
                      ></button>
                    )}
                  {Object.keys(colorSizeSlug).includes("Purple") &&
                    Object.keys(colorSizeSlug["Purple"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant(size, "Purple");
                          setColor("Purple");
                        }}
                        className={`border-2 bg-purple-600 rounded-full w-6 h-6 focus:outline-none ${
                          color === "Purple"
                            ? "border-black"
                            : "border-gray-300"
                        }`}
                      ></button>
                    )}
                  {Object.keys(colorSizeSlug).includes("Maroon") &&
                    Object.keys(colorSizeSlug["Maroon"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant(size, "Maroon");
                          setColor("Maroon");
                        }}
                        className={`border-2 bg-rose-700 rounded-full w-6 h-6 focus:outline-none ${
                          color === "Maroon"
                            ? "border-black"
                            : "border-gray-300"
                        }`}
                      ></button>
                    )}
                  {Object.keys(colorSizeSlug).includes("Blue") &&
                    Object.keys(colorSizeSlug["Blue"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant(size, "Blue");
                          setColor("Blue");
                        }}
                        className={`border-2 bg-blue-500 rounded-full w-6 h-6 focus:outline-none ${
                          color === "Blue" ? "border-black" : "border-gray-300"
                        }`}
                      ></button>
                    )}
                  {Object.keys(colorSizeSlug).includes("Pink") &&
                    Object.keys(colorSizeSlug["Pink"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant(size, "Pink");
                          setColor("Pink");
                        }}
                        className={`border-2 bg-pink-500 rounded-full w-6 h-6 focus:outline-none ${
                          color === "Pink"
                            ? "border-black"
                            : "border-gray-300"
                        }`}
                      ></button>
                    )}
                    {Object.keys(colorSizeSlug).includes("Gray") &&
                    Object.keys(colorSizeSlug["Gray"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant(size, "Gray");
                          setColor("Gray");
                        }}
                        className={`border-2 ml-1 bg-gray-400 rounded-full w-6 h-6 focus:outline-none ${
                          color === "Gray" ? "border-black" : "border-gray-300"
                        }`}
                      ></button>
                    )}
                    {Object.keys(colorSizeSlug).includes("Brown") &&
                    Object.keys(colorSizeSlug["Brown"]).includes(size) && (
                      <button
                        onClick={() => {
                          refreshVariant(size, "Brown");
                          setColor("Brown");
                        }}
                        className={`border-2 ml-1 bg-gray-400 rounded-full w-6 h-6 focus:outline-none ${
                          color === "Brown" ? "border-black" : "border-rose-800"
                        }`}
                      ></button>
                    )}
                </div>
                
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  
                  <div className="relative">
                    <select
                      value={size}
                      onChange={(e) => {
                        refreshVariant(e.target.value, color);
                        setSize(e.target.value);
                      }}
                      className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 text-base pl-3 pr-10"
                    >
                      {Object.keys(colorSizeSlug[color]).includes("S") && (
                        <option value={"S"}>S</option>
                      )}
                      {Object.keys(colorSizeSlug[color]).includes("M") && (
                        <option value={"M"}>M</option>
                      )}
                      {Object.keys(colorSizeSlug[color]).includes("L") && (
                        <option value={"L"}>L</option>
                      )}
                      {Object.keys(colorSizeSlug[color]).includes("XL") && (
                        <option value={"XL"}>XL</option>
                      )}
                      {Object.keys(colorSizeSlug[color]).includes("XXL") && (
                        <option value={"XXL"}>XXL</option>
                      )}
                      {/* chessboards sizes */}
                      {Object.keys(colorSizeSlug[color]).includes("10x10") && (
                        <option value={"10x10"}>10x10</option>
                      )}
                      {Object.keys(colorSizeSlug[color]).includes("12x12") && (
                        <option value={"12x12"}>12x12</option>
                      )}
                      {Object.keys(colorSizeSlug[color]).includes("17x17") && (
                        <option value={"17x17"}>17x17</option>
                      )}
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ₹{colorSizeSlug[color][size]["price"]}
                </span>
                <button
                  onClick={() => addToCart(slug, 1, colorSizeSlug[color][size]["price"], all_Tshirts[0].title, size, color) }
                  className="flex ml-auto md:ml-24 text-sm lg:text-base text-white bg-blue-500 border-0 py-2 px-4 lg:px-6 focus:outline-none hover:bg-blue-600 rounded"
                >
                  Add to Cart
                </button>
                <button onClick={()=>{buyNow(slug, 1, colorSizeSlug[color][size]["price"], all_Tshirts[0].title, size, color)}} className="flex ml-1 md:ml-2 text-white text-sm lg:text-base bg-blue-500 border-0 py-2 px-4 lg:px-6 focus:outline-none hover:bg-blue-600 rounded">
                  Buy Now
                </button>
                {/* <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 md:ml-6">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button> */}
              </div>
              <div className="pin mt-6 space-x-2 flex text-sm">
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={onChangePin}
                  placeholder="Enter Pincode Here"
                  className="w-3/5 md:w-2/5 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <button
                  onClick={checkservicibilty}
                  className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded"
                >
                  Check
                </button>
              </div>

              {isAvailable != null ? (
                isAvailable ? (
                  <div className="text-sm mt-4 text-green-600">
                    Yay ! This pincode is serviceable .
                  </div>
                ) : (
                  <div className="text-sm mt-4 text-red-600">
                    Sorry ! We do not deliver to this pincode yet .
                  </div>
                )
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// taking all the variants of a tshirt/hoodies of same title from the slug
// for eg, if slug=wear-chess-think-2, then it will give all the 'Chess-Think Tshirts'=title tshirts in variant-array
export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  let product = await Product.findOne({ slug: context.query.slug });
  //jis slug ki tshirt/hhoodie click kri ,uska title vahi tshirt/hoodie aa jayenge
  //console.log("products from slug = ",product)

  let all_Tshirts = await Product.find({ title: product.title, category:product.category });
  //ab isme uper wale title ki tshirt jise click kiya uske saare variants aa jayenge
  //console.log("all -",all_Tshirts)
  let colorSizeSlug = {};
  //eg: {'Red': {'XL':'wear-the-chess-king-1}}
  for (let item of all_Tshirts) {
    if (Object.keys(colorSizeSlug).includes(item.color)) {
      colorSizeSlug[item.color][item.size] = { slug: item.slug, url: item.img, price: item.price };
    } else {
      colorSizeSlug[item.color] = {};
      colorSizeSlug[item.color][item.size] = { slug: item.slug, url: item.img, price: item.price };
    }
  }

  //console.log("coloSS from ssprops = ", colorSizeSlug)
  return {
    props: {
      all_Tshirts: JSON.parse(JSON.stringify(all_Tshirts)),
      product: JSON.parse(JSON.stringify(product)),
      colorSizeSlug: JSON.parse(JSON.stringify(colorSizeSlug)),
    }, // will be passed to the page component as props
  };
}

export default Slug;



// colosizeSlug :
// {
//  Yellow: {
//     M: {
//       slug: 'wear-the-chesshoodie-bts-M-Yellow',
//       url: 'https://m.media-amazon.com/images/I/71FcDZJM0qL._UL1500_.jpg',
//       price: 799
//     },
//     L: {
//       slug: 'wear-the-chesshoodie-bts-L-Yellow',
//       url: 'https://m.media-amazon.com/images/I/71FcDZJM0qL._UL1500_.jpg',
//       price: 799
//     }
//   },
//   Red: {
//     L: {
//       slug: 'wear-the-chesshoodie-bts-L-Red',
//       url: 'https://m.media-amazon.com/images/I/81lx2pNgUCL._UL1500_.jpg',
//       price: 799
//     },
//     XL: {
//       slug: 'wear-the-chesshoodie-bts-XL-Red',
//       url: 'https://m.media-amazon.com/images/I/81lx2pNgUCL._UL1500_.jpg',
//       price: 799
//     }
//   },
//   Pink: {
//     L: {
//       slug: 'wear-the-chesshoodie-bts-L-Pink',
//       url: 'https://m.media-amazon.com/images/I/81HJNQxwNgL._UL1500_.jpg',
//       price: 799
//     },
//     XL: {
//       slug: 'wear-the-chesshoodie-bts-XL-Pink',
//       url: 'https://m.media-amazon.com/images/I/81HJNQxwNgL._UL1500_.jpg',
//       price: 799
//     },
//     XXL: {
//       slug: 'wear-the-chesshoodie-bts-XXL-Pink',
//       url: 'https://m.media-amazon.com/images/I/81HJNQxwNgL._UL1500_.jpg',
//       price: 799
//     },
//     M: {
//       slug: 'wear-the-chesshoodie-bts-M-Pink',
//       url: 'https://m.media-amazon.com/images/I/81HJNQxwNgL._UL1500_.jpg',
//       price: 798
//     }
//   },
//   Blue: {
//     L: {
//       slug: 'wear-the-chesshoodie-bts-L-Blue',
//       url: 'https://m.media-amazon.com/images/I/8144M-PiE5L._UL1500_.jpg',
//       price: 799
//     },
//     XL: {
//       slug: 'wear-the-chesshoodie-bts-XL-Blue',
//       url: 'https://m.media-amazon.com/images/I/8144M-PiE5L._UL1500_.jpg',
//       price: 799
//     },
//     XXL: {
//       slug: 'wear-the-chesshoodie-bts-XXL-Blue',
//       url: 'https://m.media-amazon.com/images/I/8144M-PiE5L._UL1500_.jpg',
//       price: 799
//     },
//     M: {
//       slug: 'wear-the-chesshoodie-bts-M-Blue',
//       url: 'https://m.media-amazon.com/images/I/8144M-PiE5L._UL1500_.jpg',
//       price: 799
//     }
//   }
// }

//allT-shirts :
//   [
//      {_id: "62555feae95564fbf5d9e556",title: "Men's ChessMove Tshirt",slug: "wear-the-chess-move-XXL-Black",color: "Black",category: "Tshirt", address: "IIT Indore, Indore", availableQty: 11,... } ,
//        {....},
//        {....},
//        {....},
//  ]

// MY LOGS
//date - 13-4-22
// issue is that ki for same color I had not able to see multiple size
// issue is that the value of color is not getting changes( somewhere i am missing setSize() and setColor()), iput it but on reloading it is getting the same value , maybe I should insert setCOlor and setsize in the button only instead of refreshVariant function.
// abhi ke liye size same rakh kr colour change kr diye DB me
// ek baar Jhansi se aakar video dekhna padega, but commit maar diya hai, aane ke baad refactor krenge.

//date - 17-4-22
//issue of setColor & setSize is resolved but now the window reload functon disabled. It is beacuse when the page reloads , the state value of color and size revert back to the its initial value & not the current value. That's why you can see the updated url is not displayed in chrome tab.


//date - 18/08/2022
//issue is resolved by using router.push in place of window.location
