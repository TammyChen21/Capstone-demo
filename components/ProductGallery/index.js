import React from "react";
import styled from "styled-components";
import ProductCard from "../ProductCard";

export default function ProductGallery(props) {
  return (
    <StyledProductGallery>
      {props.productData.map((product) => (
        <ProductCard key={product.id} productcard={product} />
      ))}
    </StyledProductGallery>
  );
  
}

const StyledProductGallery = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  gap: 10px;
  position: relative;
`;
