import Layout from "../components/Layout";
import ProductGallery from "../components/ProductGallery";
import { useState } from "react";
import PRODUCT_DATA from "../pages/api/productsdaten.js";
import styled from "styled-components";
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
      <StyledMain>
      <SearchBar onFilter={filterHandler} />
      <ProductGallery productData={productData} />
      </StyledMain>
    </>
  );
}
const StyledMain=styled.div`
margin-top:65px;
`
