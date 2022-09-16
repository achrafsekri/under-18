import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AddToCart = ({ soldOut, price }) => {
  const [displayVariations, setDisplayVariations] = useState(false);

  const handleAddToCart = () => {
  };
  return (
      <button
        onClick={handleAddToCart}
        id="button"
        className="overflow-hidden capitalize border border-white w-42 md:w-80"
      >
        <motion.div 
        exit={{y:60}}
        className="flex items-center justify-between w-full h-full px-1 py-2 text-sm transition duration-300 md:text-xl md:px-8 hover:bg-gradient-to-tl from-black to-green">
          add to cart <span className="text-sm md:text-lg">{price}$</span>
        </motion.div>
      </button>
  );
};

export default AddToCart;
