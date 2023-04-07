import React from "react";
import styled from "styled-components";
import ProductCard from "../ProductCard";
import Link from "next/link";

export default function ProductGallery(props) {
  
  return (
    <StyledProductGallery>
      {props.productData.map((product) => (
       <ProductCard key={product.id} productcard={product}/>
      ))  
      }
      
    </StyledProductGallery>
  );
}

const StyledProductGallery = styled.ul`
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
