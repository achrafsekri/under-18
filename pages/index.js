import React from "react";
import About from "../components/home/About";
import Hero from "../components/home/Hero";
import ProductsTab from "../components/home/ProductsTab";
import MailForm from "../components/home/MailForm";
import commerce from "../lib/commerce";
const index = ({ products }) => {
  return (
    <div className="relative w-full px-4 py-6 overflow-hidden text-5xl md:px-12">
      <Hero />
      <ProductsTab products={products} />
      <About />
      <MailForm />
    </div>
  );
};
export async function getStaticProps() {
  const { data: products } = await commerce.products.list();
  return {
    props: {
      products,
    },
    revalidate: 60,
  };
}
export default index;
