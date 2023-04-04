import React, { useContext, useState } from "react";
import { CartContext } from "../../pages/_app";
import ProductCard from "../ProductCard";
import styled from "styled-components";
import RemoveButton from "../RemoveButton";

export default function ShoppingCart() {
  const context = useContext(CartContext);

  return (
    <>
      <StyledShoppingCart>
        <StyledCard>
          {context.products.map((product) => (
            <ProductCard
              key={product.id}
              productcard={product}
              showAddButton={false}
            />
          ))}
        </StyledCard>
        <StyledCheckout>
          <StyledTotalPrice>Total: {context.totalPrice}</StyledTotalPrice>
          <StyledItem>(item: {context.totalAmount})</StyledItem>
          <StyledCheckoutButton>
            <h3>CHECKOUT</h3>
          </StyledCheckoutButton>
        </StyledCheckout>
      </StyledShoppingCart>
    </>
  );
}
const StyledCard = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: -30px;
  margin-right: 10px;
  justify-content: space-around;
  gap: 10px;
  top: -20px;
  position: absolute;
`;

const StyledShoppingCart = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  top: 90px;
  position: relative;
  margin-left: 20px;
  justify-content: space-around;
  gap: 10px;
`;
const StyledTotalPrice = styled.div`
font-weight: 600;
font-size: 1.6rem;
margin-top:-26px;
margin-left:20px;
::after {
  content: "€";

`;

const StyledItem = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
  margin-top: 30px;
  margin-left: -240px;
`;

const StyledCheckout = styled.div`
  width: 100vw;
  height: 80px;
  display: flex;
  margin-top: 480px;
  margin-left: 40px;
  margin-right: 60px;
  border-radius: 10px;
  justify-content: space-between;
  position: fixed;
  align-items: center;
  background-color: #f9f166;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 30px 0px;
  z-index: 999;
`;

const StyledCheckoutButton = styled.button`
  width: 28%;
  height: 50px;
  background-color: #6ce5d2;
  border-radius: 20px;
  color: hotpink;
  margin-right: 30px;
  border: none;
`;
