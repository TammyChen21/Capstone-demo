import GlobalStyle from "../styles";
import Head from "next/head";
import { createContext } from "react";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import Favorite from "../components/Favorite";
import PRODUCT_DATA from "./api/productsdaten";


export const CartContext = createContext();
export const FavoriteContext = createContext();

export default function App({ Component, pageProps }) {
  const [productData, setProductData] = useState(PRODUCT_DATA);
  const [cartData, setCartData] = useState({
    products: [],
    showAddButton: true,
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
    newCart.totalPrice += Number(productcard.price);

    setCartData(newCart);
  };
  

  const [favorites, setFavorites] = useState({
    products: [],
    isFavorite: true,
  });

  const handleFavorite = (productcard) => {
    const newFavorites = { ...favorites };
    if (newFavorites.products.indexOf(productcard) < 0) {
      newFavorites.products.push(productcard);
    }
    setFavorites(newFavorites);
  };

  return (
    <>
      <CartContext.Provider value={{ ...cartData, addProductHandler }}>
        <FavoriteContext.Provider value={{ ...favorites, handleFavorite }}>
          <GlobalStyle />
          <Head>
            <title>Capstone Project</title>
          </Head>
          <Component {...pageProps} />
        </FavoriteContext.Provider>
      </CartContext.Provider>
    </>
  );
}
