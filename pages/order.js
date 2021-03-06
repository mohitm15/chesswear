import React, {useEffect} from "react";
import mongoose from "mongoose";
import Order from "../models/Order";
import { useRouter } from "next/router";


const MyOrder = ({ order , clearCart}) => {

   const router = useRouter();
  // const {id} = router.query;
  // console.log(id);
  //console.log("order = ",order)
  useEffect(() => {
    if(router.query.clearCart == 1) {
      clearCart();
    }
  }, [])
  

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
                 { `Order Id: ${order.orderId}`}
              </h1>

              <p className="leading-relaxed mb-4 text-green-700 rounded-3xl bg-green-100 hover:bg-green-100/70 p-3 border-[1px] border-green-700 inline-flex items-center justify-center ">
                Your Order has been successfully placed !
              </p>
              <div className="flex mb-4 justify-evenly">
                <a className="flex-grow w-12 py-2 text-lg px-1">Description</a>
                <a className="flex-grow  py-2 text-lg px-1">Quantity</a>
                <a className="flex-grow  py-2 text-lg px-1">Price</a>
              </div>
              {Object.keys(order.products).map((key) => {
                return (
                  <div key={key} className="flex border-t border-gray-200 py-2">
                    <span className="text-gray-500 w-28 ">
                      {order.products[key].name} ({order.products[key].size} - {order.products[key].variant} )
                    </span>
                    <span className="m-auto text-gray-900">
                    {order.products[key].qty}
                    </span>
                    <span className="mr-auto mt-auto mb-auto text-gray-900">
                     ??? {order.products[key].price}
                    </span>
                  </div>
                );
              })} 
              <div className="flex py-2 md:py-4">
                <span className="title-font font-medium text-2xl text-gray-900">
                  Subtotal :  <span className="ml-4 text-red-900 font-bold text-3xl leading-tight">??? {order.subtotal} /-</span>
                </span>
                <button onClick={()=>router.push(`/track?id=${order._id}`)} className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
                  Track Order
                </button>
              </div>
            </div>
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-bottom rounded"
              src="thank.png"
            />
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

  let order = await Order.findById(context.query.id)
  //console.log("got = ", order);
  return {
    props: { order: JSON.parse(JSON.stringify(order)) }, // will be passed to the page component as props
  };
}

export default MyOrder;
