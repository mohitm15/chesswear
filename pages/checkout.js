import React from "react";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { MdOutlinePayment } from "react-icons/md";

const Checkout = ({ cart, clearCart, subtotal, addToCart, removeFromCart }) => {
  
  const initiatePayment = async () => {
    let oid = Math.floor( Math.random()*Date.now());

    //Getting transaction token
    const data = { cart, subtotal, oid, email:"email" };
    //console.log("data :" , data)
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pretransaction`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    let txnrRes= await a.json();
    console.log(txnrRes);
    let txnToken = txnrRes.body;

    var config = {
      root: "",
      flow: "DEFAULT",
      data: {
        orderId: oid /* update order id */,
        token: txnToken /* update token value */,
        tokenType: "TXN_TOKEN",
        amount: subtotal /* update amount */,
      },
      handler: {
        notifyMerchant: function (eventName, data) {
          console.log("notifyMerchant handler function called");
          console.log("eventName => ", eventName);
          console.log("data => ", data);
        },
      },
    };

    // initialze configuration using init method
    window.Paytm.CheckoutJS.init(config)
      .then(function onSuccess() {
        // after successfully updating configuration, invoke JS Checkout
        window.Paytm.CheckoutJS.invoke();
      })
      .catch(function onError(error) {
        console.log("error => ", error);
      });
  };
  

  return (
    <>
      <div className="container px-2 sm:m-auto">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
          />
        </Head>
        <Script
          type="application/javascript"
          crossorigin="anonymous"
          src={`${process.env.NEXT_PUBLIC_PAYTM_HOST}/merchantpgpui/checkoutjs/merchants/WcCwAR98002639044459.js`}
        />
        <h1 className="text-xl md:text-3xl text-center my-8 font-semibold">
          Checkout
        </h1>

        {/* part 1 */}
        <h2 className="text-xl my-4 font-semibold">1. Delivery Details</h2>

        <div className="mx-auto flex">
          <div className="px-2 w-1/2">
            <div className="mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="name"
                id="name"
                name="name  "
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="px-2 w-1/2">
            <div className=" mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>

        <div className="px-2 w-full">
          <div className=" mb-4">
            <label
              htmlFor="address"
              className="leading-7 text-sm text-gray-600"
            >
              Address
            </label>

            <textarea
              id="address"
              name="address"
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>

        <div className="mx-auto flex">
          <div className="px-2 w-1/2">
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="leading-7 text-sm text-gray-600"
              >
                Phone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="px-2 w-1/2">
            <div className=" mb-4">
              <label htmlFor="city" className="leading-7 text-sm text-gray-600">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto flex">
          <div className="px-2 w-1/2">
            <div className="mb-4">
              <label
                htmlFor="state"
                className="leading-7 text-sm text-gray-600"
              >
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="px-2 w-1/2">
            <div className=" mb-4">
              <label
                htmlFor="pincode"
                className="leading-7 text-sm text-gray-600"
              >
                Pincode
              </label>
              <input
                type="text"
                id="pincode"
                name="pincode"
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>

        {/* part 2 */}
        <h2 className="text-xl my-4 font-semibold">2. Review Cart Items</h2>

        <div className="z-10 sideCart  p-6 mx-2 my-4 bg-blue-100 border-[1px] border-blue-800 rounded">
          <ol className="list-decimal font-semibold">
            {Object.keys(cart).length === 0 && (
              <div className="mt-5 text-center text-xl font-extralight">
                Your Cart is Empty :(
              </div>
            )}
            {
              //k is cart {k: {name, price,qty,size,variant} }
              Object.keys(cart).map((k) => {
                return (
                  <li key={k}>
                    <div className="flex item my-5 items-center justify-between">
                      <div className=" font-semibold">
                        {cart[k].name} [{cart[k].variant} - {cart[k].size}]
                      </div>
                      <div className="w-1/3 font-semibold flex items-center justify-center">
                        <AiFillPlusCircle
                          onClick={() =>
                            addToCart(
                              k,
                              1,
                              cart[k].price,
                              cart[k].name,
                              cart[k].size,
                              cart[k].variant
                            )
                          }
                          className="text-blue-700 text-xl cursor-pointer"
                        />
                        <span className="mx-2 text-sm">{cart[k].qty}</span>
                        <AiFillMinusCircle
                          onClick={() =>
                            removeFromCart(
                              k,
                              1,
                              cart[k].price,
                              cart[k].name,
                              cart[k].size,
                              cart[k].variant
                            )
                          }
                          className="text-blue-700 text-xl cursor-pointer"
                        />
                      </div>
                    </div>
                  </li>
                );
              })
            }
          </ol>

          <span className="subtotal text-xl font-extrabold">
            Subtotal : ₹ {subtotal} /-
          </span>
        </div>

        <button
          onClick={initiatePayment}
          className="flex text-white bg-blue-500 border-0 py-2 px-3 focus:outline-none hover:bg-blue-600 rounded text-base mx-2  my-4"
        >
          <MdOutlinePayment className="m-1" />
          Pay ₹ {subtotal}
        </button>
      </div>
    </>
  );
};

export default Checkout;
