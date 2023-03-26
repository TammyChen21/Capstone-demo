import GlobalStyle from "../styles";
import Head from "next/head";
import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

export default function App({ Component, pageProps }) {
  const [cartData, setCartData] = useState({
    products: [],
    totalAmount: 0,
    totalPrice: 0,
  });

  // add product in the shopping cart:
  const addProductHandler = (productcard) => {
    const newCart = { ...cartData };
    //if the product already exists in the shopping cart
    if (newCart.products.indexOf(productcard) < 0) {
      newCart.products.push(productcard);
      productcard.amount = 1;
    } else {
      productcard.amount += 1;
    }

    // add total amount and total price for products in the shopping cart:
    newCart.totalAmount += 1;
    newCart.totalPrice += productcard.price;

    setCartData(newCart);
  };

  return (
    <>
      <CartContext.Provider
        value={{ ...cartData, addProductHandler}}
      >
        <GlobalStyle />
        <Head>
          <title>Capstone Project</title>
        </Head>
        <Component {...pageProps} />
      </CartContext.Provider>
    </>
  );
}
