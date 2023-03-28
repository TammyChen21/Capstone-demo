import Layout from "../components/Layout";
import ProductGallery from "../components/ProductGallery";
import { useState } from "react";
import PRODUCT_DATA from "../pages/api/productsdaten.js";
import { CartContext } from "./_app";
import SearchBar from "../components/SearchBar";

export default function HomePage() {
  const [productData, setProductData] = useState(PRODUCT_DATA);
  const filterHandler = (keyword) => {
    const searchProductData = PRODUCT_DATA.filter(
      (product) => product.title.indexOf(keyword) >= 0
    );
    setProductData(searchProductData);
  };

  return (
    <>
      <Layout />
      <SearchBar onFilter={filterHandler} />
      <ProductGallery productData={productData} />
    </>
  );
}
