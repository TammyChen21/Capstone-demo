import React from "react";
import Favorite from "../../components/Favorite";
import Layout from "/components/Layout";
import { useState } from "react";

export default function FavoritePage(props) {
  const [productData, setProductData] = useState([]);
  return (
    <>
      <Layout />
      <Favorite productData={productData} isFavorite={true} />
    </>
  );
}
