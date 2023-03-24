import Layout from "../components/Layout";
import ProductGallery from "../components/ProductGallery";
import { useState } from "react";
import PRODUCT_DATA from "../pages/api/productsdaten.js";
import { CartContext } from "./_app";

export default function HomePage() {
  const [productData, setProductData] = useState(PRODUCT_DATA);

  // state for shopping cart:(products, total amount, total price)
 

  return (
   
      <>
        <Layout />
        <ProductGallery productData={productData} />
      </>
   
  );
}
