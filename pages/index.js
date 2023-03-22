import Heading from "../components/Heading";
import Layout from "../components/Layout";
import ProductGallery from "../components/ProductGallery";
import { useState } from "react";
import PRODUCT_DATA from "../pages/api/productsdaten.js";

export default function HomePage() {
  const [productData, setProductData] = useState(PRODUCT_DATA);

  return (
    <>
      <Layout />
      <ProductGallery productData={productData} />
    </>
  );
}
