import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.svg";
import { HiMenuAlt3 } from "react-icons/hi";
import { AnimatePresence } from "framer-motion";
import Cart from "./Cart";
const Navbar = () => {
  const [cartActive, setCartActive] = useState(false);
  return (
    <div className="relative flex items-center justify-between w-full px-4 py-6 md:py-6 md:px-12">
      <Link href="/">
        <span logo="logo" className="relative cursor-pointer w-28 md:w-40">
          <Image src={logo} layout="responsive" />
        </span>
      </Link>
      <div id="left" className="flex items-center gap-10">
        <Link href="/search">
          <img src="/search.svg" className="w-6 cursor-pointer" />
        </Link>
        <Link href='/account' >
          <img src="/account.svg" className="w-6 cursor-pointer" />
        </Link>
        <button
          id="cart"
          className="flex items-center gap-4 w-fit"
          onClick={() => setCartActive(!cartActive)}
        >
          <img src="/cart.svg" className="w-6 cursor-pointer" />
          <span
            id="line"
            className="hidden h-1 bg-white w-14 md:inline-block"
          ></span>
          <span id="price" className="hidden text-sm md:inline-block">
            25.00 USD
          </span>
        </button>
      </div>
      <AnimatePresence id="cart reveal">
        {cartActive && <Cart active={cartActive} setActive={setCartActive} />}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
