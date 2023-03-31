import React, { useContext } from "react";
import { CartContext } from "../../pages/_app";
import ProductCard from "../ProductCard";
import styled from "styled-components";

export default function ShoppingCart() {
  const context = useContext(CartContext);

  return (
    <>
      {context.products.map((product) => (
        <ProductCard key={product.id} productcard={product} />
      ))}

      <StyledPrice>{context.totalPrice}</StyledPrice>
    </>
  );
}

const StyledPrice = styled.p`
  ::after {
    content: "€";
  }
`;
