import React from "react";
import Link from "next/link";
import {
  FaInstagramSquare,
  FaTwitterSquare,
  FaFacebookSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-screen px-4 py-6 mt-20 tracking-wide uppercase md:py-6 md:px-12">
      <div className="flex items-center justify-between ">
        <div>
          <h3 className="text-xl font-bold">CUSTOMER CARE :</h3>
          <div className="flex flex-col gap-2 mt-3 text-base font-semibold sm:flex-row md:gap-6 text-slate-200">
            <Link href="/shipping">
              <span className="transition duration-200 cursor-pointer hover:text-green">
                shipping
              </span>
            </Link>
            <Link href="/contact">
              <span className="transition duration-200 cursor-pointer hover:text-green">
                CONTACT
              </span>
            </Link>
            <Link href="/RETURNS & EXCHANGES">

              <span className="transition duration-200 cursor-pointer hover:text-green">
                RETURNS & EXCHANGES
              </span>
            </Link>
            <Link href="/HELP">

              <span className="transition duration-200 cursor-pointer hover:text-green">
                HELP & FAQS
              </span>
            </Link>
          </div>
        </div>
        <div id="socila media" className="flex items-center gap-3 text-3xl">
          <a href="/" className="transition duration-200 hover:text-green">
            <FaInstagramSquare />
          </a>
          <a href="/" className="transition duration-200 hover:text-green">
            <FaTwitterSquare />
          </a>
          <a href="/" className="transition duration-200 hover:text-green">
            <FaFacebookSquare />
          </a>
        </div>
      </div>
      <div className="flex justify-center w-full mt-6 text-sm text-center text-slate-200 md:text-base">
        © COPYRIGHT under18 2022. ALL RIGHTS RESERVED
      </div>
    </div>
  );
};

export default Footer;
