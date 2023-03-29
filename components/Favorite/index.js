import React from "react";
import styled from "styled-components";
import ProductCard from "../ProductCard";
import { useContext } from "react";
import { FavoriteContext } from "../../pages/_app";

export default function Favorite(props) {
  const context = useContext(FavoriteContext);

  return (
    <StyledFavorite>
      {context.products.map((product) => (
        <ProductCard key={product.id} productcard={product} />
      ))}
    </StyledFavorite>
  );
}

const StyledFavorite = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  gap: 10px;
  position: relative;
`;
