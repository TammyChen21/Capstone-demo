import React from "react";
import styled from "styled-components";
import ProductCard from "../ProductCard";

export default function ProductGallery() {
  return (
    <>
      <StyledProductGallery>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </StyledProductGallery>
    </>
  );
}

const StyledProductGallery = styled.ul`

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  gap: 10px;
`;

