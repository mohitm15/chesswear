import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
  AiOutlineClear,
} from "react-icons/ai";
import { BsCartCheckFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";

const Navbar = ({
  usertoken,
  logout,
  cart,
  subtotal,
  addToCart,
  removeFromCart,
  clearCart,
}) => {
  //console.log({cart, subtotal, addToCart,removeFromCart, clearCart});
  //console.log(removeFromCart)
  const ref = useRef();
  const [dropdown, setDropdown] = useState(false);

  const toggleCart = () => {
    if (ref.current.classList.contains("hidden")) {
      //ref.current.classList.remove("translate-x-full");
      ref.current.classList.remove("hidden");
      //ref.current.classList.add("translate-x-0");
      ref.current.classList.add("block");
    } else if (!ref.current.classList.contains("hidden")) {
      //ref.current.classList.remove("translate-x-0");
      ref.current.classList.remove("block");
      //ref.current.classList.add("translate-x-full");
      ref.current.classList.add("hidden");
    }
  };


  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-start items-center py-2 mb-1 shadow-md sticky z-10 top-0 bg-white">
      <div className="logo  mr-auto md:mx-5">
        <Link href={"/"}>
          <a>
            <Image src="/logo.png" alt="logo" height={40} width={200} />
          </a>
        </Link>
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-4 md:space-x-6 font-bold md:text-lg">
          <Link href={"/tshirts"}>
            <a className="hover:text-blue-700">
              <li>Tshirts</li>
            </a>
          </Link>
          <Link href={"/hoodies"}>
            <a className="hover:text-blue-700">
              <li>Hoodies</li>
            </a>
          </Link>
          <Link href={"/chessboards"}>
            <a className="hover:text-blue-700">
              <li>ChessBoards</li>
            </a>
          </Link>
          <Link href={"/mugs"}>
            <a className="hover:text-blue-700">
              <li>Mugs</li>
            </a>
          </Link>
        </ul>
      </div>
      <div className="cart absolute right-0 space-x-2 md:space-x-3 mx-5 top-4 cursor-pointer flex items-center">
        {/* dropdown */}
        <span onMouseOver={()=>setDropdown(true)} onMouseLeave={()=>setDropdown(false)}>
        { dropdown && <div className="absolute right-7 top-5 md:right-12 md:top-8">
        <div id="dropdownNavbar" className=" z-10 rounded-lg w-36 md:w-44 bg-blue-200 divide-y divide-blue-900">
                <ul className="py-1 text-sm text-gray-700 dark:text-blue-400" aria-labelledby="dropdownLargeButton">
                  <Link href={'/myaccount'}><li><a href="#" className="block py-2 px-4 hover:bg-blue-100">My Account</a></li></Link>
                  <Link href={'/orders'}><li><a href="#" className="block py-2 px-4 hover:bg-blue-100 ">Orders</a></li></Link>
                </ul>
                <div className="py-1">
                  <li onClick={logout} className="block py-2 px-4 text-sm text-gray-700 hover:bg-blue-100 ">Sign out</li>
                </div>
            </div>

        </div>
        }
        {usertoken.value && (
          <MdAccountCircle
            onMouseOver={()=>setDropdown(true)}
            onMouseLeave={()=>setDropdown(false)}
            className="text-xl md:text-3xl hover:text-blue-800"
          />
        )}
          </span>
        {!usertoken.value && (
          <Link href={"/login"}>
            <a>
              <button className="flex text-white bg-blue-500 border-0 py-1 px-2 focus:outline-none hover:bg-blue-600 rounded text-base">
                Login
              </button>
            </a>
          </Link>
        )}

        <AiOutlineShoppingCart
          onClick={toggleCart}
          className="text-xl md:text-3xl hover:text-blue-800"
        />
      </div>

      {/* side bar */}
      <div
        ref={ref}
        className={`z-10 sideCart w-10/12 md:w-96 h-[100vh] absolute top-0 right-0 py-10 px-8 bg-blue-200 overflow-y-scroll transform transition-transform ${
          Object.keys(cart).length !== 0 ? `block` : "hidden"
        } `}
      >
        <h2 className="text-2xl font-bold text-center">Shopping Cart </h2>
        <div className="text-black h-[1px] mt-3 bg-black" />
        <span className="absolute top-5 right-2 cursor-pointer text-2xl text-blue-500">
          <AiFillCloseCircle onClick={toggleCart} />
        </span>
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
                  <div className="flex item my-5 ">
                    <div className=" w-2/3 font-semibold">
                      {cart[k].name} [{cart[k].variant} - {cart[k].size} ]
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
        <div className="subtotal text-lg font-extrabold">
          {" "}
          SubTotal : ₹ {subtotal} /-{" "}
        </div>
        <div className="mt-5 flex flex-row justify-center space-x-4">
          <Link href={"/checkout"}>
            <button className="flex  text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded text-base">
              <BsCartCheckFill className="m-1" />
              Checkout
            </button>
          </Link>
          <button
            onClick={clearCart}
            className="flex text-white bg-blue-500 border-0 py-2 px-3 focus:outline-none hover:bg-blue-600 rounded text-base"
          >
            <AiOutlineClear className="m-1" />
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
