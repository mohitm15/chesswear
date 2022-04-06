import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-start items-center py-2">
      <div className="logo mx-5">
        <Image src="/logo.png" alt="logo" height={40} width={200} />
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-4 font-bold md:text-xl">
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
      <div className="cart absolute right-0 mx-5 top-4">
        <AiOutlineShoppingCart className="text-xl md:text-3xl" />
      </div>
    </div>
  );
};

export default Navbar;
