import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Orders = () => {
  const router = useRouter();
  const [myorders, setMyorders] = useState();

  useEffect(() => {
    const fectOrders = async () => {
      let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/myorders`, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: localStorage.getItem("token") }),
      });
      let response = await a.json();
      //console.log("RES = ", response);

      return response.myorders;
    };

    if (!localStorage.getItem("token")) {
      router.push("/");
    } else {
      fectOrders()
        .then((orders) => setMyorders(orders))
        .catch((err) => console.log(err));

      // console.log("MY = ", myorders);
    }
  }, []);

  //console.log("yo = ",orders)

  // for (let item in orders) {
  //   //console.log("i = ",orders[item].createdAt)
  //   orders[item].createdAt = orders[item].createdAt.slice(0, 10);
  //   //item.createdAt = new Date(createdAt.getHighBits()*1000);
  // }
  //console.log("yo = ",orders)
  return (
    <div className="container mx-auto min-h-screen">
      <h1 className="font-bold text-center text-2xl lg:text-4xl p-8">My Orders</h1>
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
                  {myorders &&
                    myorders.map((item,index) => {
                      //console.log(item)
                      return (
                        <tr
                          key={item._id}
                          className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {index+1}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            <Link href ={`order/?id=${item._id}`}><a className="underline text-blue-800 cursor-pointer">{item.orderId}</a></Link>
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

export default Orders;
