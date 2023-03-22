
import Layout from "../components/Layout";
import ProductGallery from "../components/ProductGallery";
import { useState } from "react";
import PRODUCT_DATA from "../pages/api/productsdaten.js";

export default function HomePage() {
  const [productData, setProductData] = useState(PRODUCT_DATA);

  // state for shopping cart:(products, total amount, total price)
  const [cartData, setCartData] = useState({
    products: [],
    totalAmount: 0,
    totalPrice: 0,
  });
  // add product in the shopping cart:
  const addProductHandler = (product) => {
    const newCart = { ...cartData };
    // if the product already exists in the shopping cart
    if (newCart.items.indexOf(product) < 0) {
      newCart.products.push(product);
      product.amount = 1;
    } else {
      product.amount += 1;
    }

    newCart.totalAmount += 1;
    newCart.totalPrice += product.price;


  };

  return (
    <>
      <Layout />
      <ProductGallery productData={productData} />
    </>
  );
}
