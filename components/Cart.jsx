import React from "react";
import { motion } from "framer-motion";
const MobileMenu = ({ active, setActive }) => {
  return (
    <>
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: screen.width > 600 ? "40%" : "70%" }}
        transition={{
          ease: "linear",
          duration: 0.4,
        }}
        exit={{ width: "0%" }}
        id="menu"
        className="absolute top-0 right-0 z-50 h-screen px-4 py-6 bg-black border-l-2 border-green md:py-8 md:px-12"
      >
        <span
          className="absolute z-50 text-4xl cursor-pointer "
          onClick={() => setActive(!active)}
        >
          x
        </span>
        <div>
          
        </div>
      </motion.div>
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: screen.width > 600 ? "40%" : "70%" }}
        transition={{
          ease: "linear",
          duration: 0.3,
        }}
        exit={{ width: "0%" }}
        id="menu background"
        className="absolute top-0 right-0 z-40 h-screen bg-green"
      ></motion.div>
    </>
  );
};

export default MobileMenu;
