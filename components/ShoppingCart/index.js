import React, { useContext } from "react";
import { CartContext } from "../../pages/_app";
import ProductCard from "../ProductCard";
import styled from "styled-components";

export default function ShoppingCart() {
  const context = useContext(CartContext);

  return (
    <>
    <StyledShoppingCart>
      {context.products.map((product) => (
        <ProductCard key={product.id} productcard={product} />
      ))}

      
    </StyledShoppingCart>
      <StyledTotalPrice>{context.totalPrice}</StyledTotalPrice>
      </>
  );
}
const StyledShoppingCart = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: -30px;
  margin-right: 10px;
  justify-content: space-around;
  gap: 10px;
  top: 90px;
  bottom: 60px;
  position: absolute;
`;
const StyledTotalPrice=styled.div`

`
