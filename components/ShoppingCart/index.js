import React, { useContext } from "react";
import { CartContext } from "../../pages/_app";


export default function ShoppingCart() {
    const context = useContext(CartContext);

  return (
    <>
    
      
      <div>{context.totalPrice}</div>
      
    </>
  );
}
