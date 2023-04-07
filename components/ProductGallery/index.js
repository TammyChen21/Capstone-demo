import React from "react";
import styled from "styled-components";
import ProductCard from "../ProductCard";
import Link from "next/link";

export default function ProductGallery(props) {
  
  return (
    <StyledProductGallery>
      {props.productData.map((product) => (
       <StyledLink key={product.id} href={`/details/${product.id}`}><ProductCard key={product.id} productcard={product}/></StyledLink>
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
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;