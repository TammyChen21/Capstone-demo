import React from "react";
import ShoppingCart from "../../components/ShoppingCart";
import Layout from "/components/Layout";
import { CartContext } from "../_app";
import { useContext } from "react";




export default function ShoppingCartPage() {

    const context = useContext(CartContext);
  return (
    <>
    
      <Layout />
      <ShoppingCart/>
     
    </>
  );
}
