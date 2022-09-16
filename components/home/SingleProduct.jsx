import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/main.module.css";
import AddToCart from "./AddToCart";
const SingleProduct = ({
  title,
  price,
  soldOut,
  permaLink,
  image,
  imgHeight,
  imgWidth,
}) => {
  return (
    <div className="flex flex-col justify-between h-full gap-4">
      <div>
        <Link href={`/products/${permaLink}`}>
          <div
            id="image"
            className="relative w-full overflow-hidden cursor-pointer sm:w-42 h-60 md:w-80 md:h-96"
          >
            <Image
              src={image}
              layout="fill"
              className="transition duration-500 hover:scale-110"
              priority
              alt={title}
            />
          </div>
        </Link>
        <Link href={`/products/${permaLink}`}>
          <h2
            className={`w-48 text-base mt-5  uppercase hover:text-slate-200 cursor-pointer md:text-xl md:w-80 ${styles.lineClamp}`}
          >
            {title}
          </h2>
        </Link>
        <h4 className="mt-1 text-sm text-white md:text-base">
          {price}$
        </h4>
      </div>
    </div>
  );
};

export default SingleProduct;
