import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { BsCartCheckFill } from 'react-icons/bs';


const Navbar = () => {
  const ref = useRef();
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) 
    {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } 
    else if (!ref.current.classList.contains("translate-x-full")) 
    {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-start items-center py-2 mb-1 shadow-md ">
      <div className="logo mx-5">
        <Link href={"/"}>
          <a>
            <Image src="/logo.png" alt="logo" height={40} width={200} />
          </a>
        </Link>
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-4 md:space-x-6 font-bold md:text-lg">
          <Link href={"/tshirts"}>
            <a>
              <li>Tshirts</li>
            </a>
          </Link>
          <Link href={"/hoodies"}>
            <a>
              <li>Hoodies</li>
            </a>
          </Link>
          <Link href={"/chessboards"}>
            <a>
              <li>ChessBoards</li>
            </a>
          </Link>
          <Link href={"/mugs"}>
            <a>
              <li>Mugs</li>
            </a>
          </Link>
        </ul>
      </div>
      <div onClick={toggleCart} className="cart absolute right-0 mx-5 top-4 cursor-pointer">
        <AiOutlineShoppingCart
          className="text-xl md:text-3xl"
        />
      </div>

      {/* side bar */}
      <div ref={ref} className="z-10 sideCart w-10/12 md:w-80 h-full absolute top-0 right-0 py-10 px-8 bg-blue-200 transform transition-transform translate-x-full ">
      <h2 className="text-2xl font-bold text-center">Shopping Cart </h2>
      <div className="text-black h-[1px] mt-3 bg-black" />
        <span className="absolute top-5 right-2 cursor-pointer text-2xl text-blue-500"><AiFillCloseCircle onClick={toggleCart} /></span>
        <ol className="list-decimal font-semibold">
          <li>
            <div className="flex item my-5 ">
              <div className=" w-2/3 font-semibold">
                T-Shirt : exclusive chess tshirts
              </div>
              <div className="w-1/3 font-semibold flex items-center justify-center">
                <AiFillPlusCircle className="text-blue-700 text-xl cursor-pointer" />
                <span className="mx-2 text-sm">1</span>
                <AiFillMinusCircle className="text-blue-700 text-xl cursor-pointer" />
              </div>
            </div>
          </li>
          <li>
            <div className="flex item my-5 ">
              <div className=" w-2/3 font-semibold">
                T-Shirt : exclusive chess tshirts
              </div>
              <div className="w-1/3 font-semibold flex items-center justify-center">
                <AiFillPlusCircle className="text-blue-700 text-xl cursor-pointer" />
                <span className="mx-2 text-sm">1</span>
                <AiFillMinusCircle className="text-blue-700 text-xl cursor-pointer" />
              </div>
            </div>
          </li>
          <li>
            <div className="flex item my-5 ">
              <div className=" w-2/3 font-semibold">
                T-Shirt : exclusive chess tshirts
              </div>
              <div className="w-1/3 font-semibold flex items-center justify-center">
                <AiFillPlusCircle className="text-blue-700 text-xl cursor-pointer" />
                <span className="mx-2 text-sm">1</span>
                <AiFillMinusCircle className="text-blue-700 text-xl cursor-pointer" />
              </div>
            </div>
          </li>
          <li>
            <div className="flex item my-5 ">
              <div className=" w-2/3 font-semibold">
                T-Shirt : exclusive chess tshirts12
              </div>
              <div className="w-1/3 font-semibold flex items-center justify-center">
                <AiFillPlusCircle className="text-blue-700 text-xl cursor-pointer" />
                <span className="mx-2 text-sm">1</span>
                <AiFillMinusCircle className="text-blue-700 text-xl cursor-pointer" />
              </div>
            </div>
          </li>
        </ol>
        <button className="flex mt-16 text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded text-base"><BsCartCheckFill className="m-1" /> Checkout</button>
      </div>
      


    </div>
  );
};

export default Navbar;
