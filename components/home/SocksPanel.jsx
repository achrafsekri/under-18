import React from "react";
import { Tab } from "@headlessui/react";
import SingleProduct from "./SingleProduct";
const SocksPanel = ({ products }) => {
  return (
    <Tab.Panel className="grid grid-cols-2 gap-8 wide:grid-cols-4 lg:grid-cols-3 max-w-screen">
      {products.length > 0 &&
        products.map((product) => (
          <SingleProduct
            title={product.name}
            price={product.price.formatted}
            key={product.id}
            soldOut={product.is.sold_out}
            permaLink={product.permalink}
            image={product.image?.url}
            imgHeight={product.image.image_dimensions.height}
            imgWidth={product.image.image_dimensions.width}
          />
        ))}
      {products.length == 0 && "no products here!"}
    </Tab.Panel>
  );
};

export default SocksPanel;
