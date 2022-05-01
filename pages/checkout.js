import React, { useState } from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { MdOutlinePayment } from "react-icons/md";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
// Added payment AiOutlineGateway, but due to no merchant key, it is creating invalid checksum => hence push to different branch in both local & remote

const Checkout = ({
  cart,
  clearCart,
  subtotal,
  addToCart,
  removeFromCart,
  usertoken,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");

  const [city, setCity] = useState("");
  const [statemap, setStatemap] = useState("");

  const [disable, setDisable] = useState(true);

  const router = useRouter();

  //decrypting jwt token
  function parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(jsonPayload);
  }

  const handleChange = async (e) => {
    //console.log("user",usertoken)

    let userdetails = parseJwt(usertoken.value);
    setEmail(userdetails.email);

    //handlechange
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "phone") {
      setPhone(e.target.value);
    } else if (e.target.name === "address") {
      setAddress(e.target.value);
    } else if (e.target.name === "pincode") {
      setPincode(e.target.value);
      if (e.target.value.length == 6) {
        let pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincode`);
        let pinjson = await pins.json();
        //console.log(pinjson)
        if (Object.keys(pinjson).includes(e.target.value)) {
          setCity(pinjson[e.target.value][0]);
          setStatemap(pinjson[e.target.value][1]);
        } else {
          setCity("");
          setStatemap("");
        }
      } else {
        setCity("");
        setStatemap("");
      }
    }

    if (name && email && phone && address && pincode) setDisable(false);
    else setDisable(true);

    // if(pincode) {
    //   let pinjson = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
    //   let pinres = await pinjson.json();
    //   console.log("pinres =",pinres.PostOffice[0].Region || "Madhya Pradesh");
    //   setCity(pinres.PostOffice[0].Region || "Madhya Pradesh");
    //   setStatemap(pinres.PostOffice[0].State || "Bhopal")
    // }
  };

  const initiateOrder = async () => {
    let oid = Math.floor(Math.random() * Date.now());
    const data = {
      cart: cart,
      subtotal: subtotal,
      oid: oid,
      email: email,
      name: name,
      address: address,
      pincode: pincode,
      phone: phone,
    };
    //console.log(JSON.stringify(data));
    let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addorder`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = await res.json();
    //console.log("response from order- ", response);
    if (response.success === true) {
      localStorage.setItem("token", response.authToken);
      toast.success("Order Added Successfully!", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        router.push(`/order?id=${response.orderToAdd._id}&clearCart=1`);
      }, 2500);
    } else {
      clearCart();
      if (response.error === "err1") {
        toast.error("Total price of your cart have changed accidently", {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else if (response.error === "err2") {
        toast.error("Some items in your cart went out of stock !", {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else if (response.error === "err5") {
        toast.error("Prices of some of the items in your cart have changed !", {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else if (response.error === "err6") {
        toast.error("Cart is Empty! Fill your cart and Try again!", {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      else if (response.error === "err7") {
        toast.error("Phone number should be in 10 digits & numeric", {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } 
      else if (response.error === "err8") {
        toast.error("PinCode should be in 6 digits & numeric", {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } 
      else {
        toast.error("Error in Adding Order !", {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };

  return (
    <>
      <div className="container px-2 sm:m-auto">
        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
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
                name="name"
                value={name}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter Name"
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
                value={email}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                readOnly
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
              value={address}
              onChange={handleChange}
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="Enter Address"
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
                value={phone}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter Phone in 10 digits"
              />
            </div>
          </div>
          {/* city */}
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
                value={pincode}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter PinCode"
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
                value={statemap}
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="px-2 w-1/2">
            <div className=" mb-4">
              <label htmlFor="city" className="leading-7 text-sm text-gray-600">
                District
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={city}
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={handleChange}
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
          disabled={disable}
          onClick={initiateOrder}
          className="disabled:bg-blue-300 flex text-white bg-blue-500 border-0 py-2 px-3 focus:outline-none hover:bg-blue-600 rounded text-base mx-2  my-4"
        >
          <MdOutlinePayment className="m-1" />
          Pay ₹ {subtotal}
        </button>
      </div>
    </>
  );
};

export default Checkout;
