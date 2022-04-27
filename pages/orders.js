import React, { useEffect } from "react";
import mongoose from "mongoose";
import Order from "../models/Order";
import { useRouter } from "next/router";

const Orders = ({ orders }) => {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/");
    }
  }, []);

  //console.log("yo = ",orders)

  for (let item in orders) {
    //console.log("i = ",orders[item].createdAt)
    orders[item].createdAt = orders[item].createdAt.slice(0, 10);
    //item.createdAt = new Date(createdAt.getHighBits()*1000);
  }
  //console.log("yo = ",orders)
  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-center text-2xl p-8">My Orders</h1>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full border-[1px]">
                <thead className=" border-b text-gray-100 bg-gray-700">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium  px-6 py-4 text-left"
                    >
                      S.No.
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium  px-6 py-4 text-left"
                    >
                      OrderID
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium  px-6 py-4 text-left"
                    >
                      Item
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium  px-6 py-4 text-left"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium  px-6 py-4 text-left"
                    >
                      Amount Paid
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Object.values(orders).map((item) => {
                    //console.log(item)
                    return (
                      <tr
                        key={item._id}
                        className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          1
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {item.orderId}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {Object.keys(item.products).map((itemitem) => {
                            return (
                              <ol key={itemitem}>
                                <li className="mb-2">{itemitem}</li>
                              </ol>
                            );
                          })}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {item.createdAt}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          ₹ {item.subtotal} /-
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  let orders = await Order.find({});
  //console.log("got = ", orders);
  return {
    props: { orders: JSON.parse(JSON.stringify(orders)) }, // will be passed to the page component as props
  };
}

export default Orders;
