import React from "react";

const Order = ({cart, subtotal}) => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                CHESSWEAR.COM
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                Order Id: 2242434535
              </h1>
              
              <p className="leading-relaxed mb-4 text-green-700 rounded-3xl bg-green-100 p-3 border-[1px] border-green-700 inline-flex items-center justify-center ">
                Your Order has been successfully placed !
              </p>
              <div className="flex mb-4 justify-evenly">
          <a className="flex-grow  py-2 text-lg px-1">Description</a>
          <a className="flex-grow  py-2 text-lg px-1">Quantity</a>
          <a className="flex-grow  py-2 text-lg px-1">Price</a>
        </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Chess Formula T-Shirt (XL - Black)</span>
                <span className="ml-auto text-gray-900">01</span>
                <span className="ml-auto text-gray-900">₹ 499</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Chess Formula T-Shirt (XL - Black)</span>
                <span className="ml-auto text-gray-900">01</span>
                <span className="ml-auto text-gray-900">₹ 499</span>
              </div>
              <div className="flex border-t border-b mb-6 border-gray-200 py-2">
              <span className="text-gray-500">Chess Formula T-Shirt (XL - Black)</span>
                <span className="ml-auto text-gray-900">01</span>
                <span className="ml-auto text-gray-900">₹ 499</span>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                Subtotal : ₹ {subtotal} /-
                </span>
                <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
                  Track Order
                </button>
                
              </div>
            </div>
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://dummyimage.com/400x400"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;
