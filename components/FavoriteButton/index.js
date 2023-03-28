import React from "react";
import styled from "styled-components";
import { CiHeart } from "react-icons/ci";

export default function FavoriteButton() {
  //const cartcontext = useContext(CartContext);

  /* const addButtonHandler = () => {
      cartcontext.addProductHandler(props.productcard);
    };*/
  return (
    <StyledFavoriteButton
      type="button"
      onClick={() => {
        addButtonHandler();
      }}
    >
      <CiHeart color="hotpink" fontSize="30" />
    </StyledFavoriteButton>
  );
}

const StyledFavoriteButton = styled.button`
  border: none;
  background-color: #C9FFD5;
  width: 35px;
  height: 30px;
  border-radius: 50%;
  font-size: 10px;
  color: #fc8ac3;
  margin-right: 40px;
  position: absolute;
  right: 10px;
  bottom: 20px;
  line-height: 50px;
  
`;
