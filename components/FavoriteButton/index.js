import React from 'react';
import styled from 'styled-components';
import { CiHeart } from "react-icons/ci";

export default function FavoriteButton(){
    //const cartcontext = useContext(CartContext);

   /* const addButtonHandler = () => {
      cartcontext.addProductHandler(props.productcard);
    };*/
    return (
      <>
        <StyledFavoriteButton
          type="button"
          onClick={() => {
            addButtonHandler();
          }}
        >
         <CiHeart color="FFFFCB" fontSize="30" />
        </StyledFavoriteButton>
      </>
    );
};

const StyledFavoriteButton = styled.button`
  border: none;
  background-color: #6ce5d2;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 30px;
  color: #fc8ac3;
  margin-right: 20px;
  text-align: center;
  position: absolute;
  right: 10px;
  bottom: 20px;
`;
