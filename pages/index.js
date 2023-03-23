import Layout from "../components/Layout";
import ProductGallery from "../components/ProductGallery";
import { useState } from "react";
import PRODUCT_DATA from "../pages/api/productsdaten.js";
import { CartContext } from "./_app";

export default function HomePage() {
  const [productData, setProductData] = useState(PRODUCT_DATA);

  // state for shopping cart:(products, total amount, total price)
  const [cartData, setCartData] = useState({
    products: [],
    totalAmount: 0,
    totalPrice: 0,
  });
  // add product in the shopping cart:
  const addProductHandler = (productcard) => {
    const newCart = { ...cartData };
    // if the product already exists in the shopping cart
    if (newCart.products.indexOf(productcard) < 0) {
      newCart.products.push(productcard);
      productcard.amount = 1;
      
    } else {
      productcard.amount += 1; 
    }
    

    // add total amount and total price for products in the shopping cart:
    newCart.totalAmount += 1;
    newCart.totalPrice += productcard.price;
  };

  
  return (
    <CartContext.Provider value={{...cartData,addProductHandler}}>
    <>
      <Layout />
      <ProductGallery productData={productData} />
    </>
    </CartContext.Provider>
  );
}
