import React from "react";
import ShoppingCart from "../../components/ShoppingCart";
import Layout from "/components/Layout";
import { useContext } from "react";
import { CartContext } from "../_app";

export default function ShoppingCartPage() {
  return (
    <>
      <Layout />
      <ShoppingCart />
    </>
  );
}
