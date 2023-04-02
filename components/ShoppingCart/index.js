import React, { useContext } from "react";
import { CartContext } from "../../pages/_app";
import ProductCard from "../ProductCard";
import styled from "styled-components";
import {BiTrash} from "react-icons/Bi"

export default function ShoppingCart() {
  const context = useContext(CartContext);

  return (
    <>
      <StyledShoppingCart>
        {context.products.map((product) => (
          <ProductCard key={product.id} productcard={product} />
        ))}
<BiTrash/> 
        <StyledCheckout>
        <StyledTotalPrice>Total: {context.totalPrice}</StyledTotalPrice>
        <StyledItem>(item: {context.totalAmount})</StyledItem>
        <StyledCheckoutButton><h3>CHECKOUT</h3></StyledCheckoutButton>
        </StyledCheckout>
      </StyledShoppingCart>
    
    </>
  );
}
const StyledShoppingCart = styled.div`
width:100%;
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
font-size: 1.5rem;
margin-top:-16px;
margin-left:20px;
::after {
  content: "€";

`;

const StyledItem=styled.div`
font-size: 1.1rem;
font-weight: 500;
margin-top:30px;
margin-left:-240px;

`

const StyledCheckout=styled.div`
width: 100vw;
height:60px;
display:flex;
margin-top:480px;
margin-left: 40px;
margin-right:60px;
border-radius:10px;
justify-content: space-between;
position:absolute;
align-items: center;
background-color:C9FFD5;
box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 30px 0px;
`

const StyledCheckoutButton=styled.button`
width:28%;
height:50px;
background-color:#6ce5d2;
border-radius: 20px;
color:hotpink;
margin-right:30px;
border:none

`

