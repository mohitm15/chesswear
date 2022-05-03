import React from "react";
import mongoose from "mongoose";
import Order from "../models/Order";

const Track = ({order}) => {
    //console.log(order)
  return (
    <section className="text-gray-600 body-font">
      <h2 className="text-sm title-font text-gray-500 text-center pt-3 md:pt-7 tracking-widest">
        CHESSWEAR.COM
      </h2>
      <h1 className="text-gray-900 text-3xl title-font font-medium text-center mb-4">
        Track Your Order
      </h1>

      <div className="container px-5 py-12 mx-auto flex flex-wrap">
        <div className="md:w-2/3 md:pr-12 md:py-4 md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200 container">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Shipping To :
          </h1>
          <p className="leading-relaxed text-base"><span className="text-blue-900 font-extralight">Order No. {order.orderId} </span> : {order.address}</p>
        </div>
        <div className="flex flex-wrap w-full justify-between">
          <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-green-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  ORDER PLACED
                </h2>
                <p className="leading-relaxed">
                  Your order has been succesfully placed after receiving the
                  payment confirmation.
                </p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-green-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  IN PRODUCTION
                </h2>
                <p className="leading-relaxed">
                  Your order is processed in the warehouse and ready to be
                  shipped to your location.
                </p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-green-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="5" r="3"></circle>
                  <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  PICKED BY COURIER
                </h2>
                <p className="leading-relaxed">
                  Your order has been picked up by our delivery partner from the
                  warehouse.
                </p>
              </div>
            </div>
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  ON THE WAY
                </h2>
                <p className="leading-relaxed">
                  Your package is on the way from the production house to your
                  city. It will be deliverd within 30 hours.
                </p>
              </div>
            </div>
            <div className="flex relative">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  DELIVERED
                </h2>
                <p className="leading-relaxed">
                  YOur order has been delivered succesfully.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-black">
          <img
            className="w-full object-cover h-full object-center block hover:opacity-50 transform transition-opacity duration-500"
            src="map.jpg"
            alt="step"
          />
          </div>
        </div>
      </div>
    </section>
  );
};

export async function getServerSideProps(context) {
    if (!mongoose.connections[0].readyState) {
      await mongoose.connect(process.env.MONGO_URI);
    }
  
    let order = await Order.findById(context.query.id)
    //console.log("got = ", order);
    return {
      props: { order: JSON.parse(JSON.stringify(order)) }, // will be passed to the page component as props
    };
  }

export default Track;
