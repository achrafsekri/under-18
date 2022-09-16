import React from "react";
import { Tab } from "@headlessui/react";
import AllPanel from "./AllPanel";
import TshirtsPanel from "./TshirtsPanel";
import JacketsPanel from "./JacketsPanel";
import SocksPanel from "./SocksPanel";
import AccessoriesPanel from "./AccessoriesPanel";

const ProductsTab = ({ products }) => {
  // console.log(products)
  return (
    <div className="flex flex-col items-center mt-20 ">
      <Tab.Group>
        <Tab.List className="flex gap-4 mb-10 text-sm uppercase md:gap-8 lg:gap-20 md:text-2xl ">
          <Tab
            className={({ selected }) =>
              selected
                ? "uppercase border-b-2 border-green focus:outline-none"
                : "uppercase"
            }
          >
            ALL
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? "uppercase border-b-2 border-green focus:outline-none"
                : "uppercase"
            }
          >
            T-shirts
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? "uppercase border-b-2 border-green focus:outline-none"
                : "uppercase"
            }
          >
            jackets
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? "uppercase border-b-2 border-green focus:outline-none"
                : "uppercase"
            }
          >
            socks
          </Tab>
          <Tab
            className={({ selected }) =>
              selected
                ? "uppercase border-b-2 border-green focus:outline-none"
                : "uppercase"
            }
          >
            accessories
          </Tab>
        </Tab.List>
        <Tab.Panels className="relative w-full">
          <AllPanel products={products} />
          <TshirtsPanel products={products.filter(product=>product.categories[0].slug=='tshirts')} />
          <JacketsPanel products={products.filter(product=>product.categories[0].slug=="jackets")}/>
          <SocksPanel products={products.filter(product=>product.categories[0].slug=='socks')}/>
          <AccessoriesPanel products={products.filter(product=>product.categories[0].slug=='accesories')}/>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default ProductsTab;
