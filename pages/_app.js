import GlobalStyle from "../styles";
import Head from "next/head";
import { createContext } from "react";

export const CartContext = createContext();
/*
    data for shopping cart
    products: [],
    totalAmount: 0,
    totalPrice: 0,
    addProduct()=>{},
    */
  
export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
