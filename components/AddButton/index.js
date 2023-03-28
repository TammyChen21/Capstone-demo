import React, { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../../pages/_app";
import { CiShoppingCart } from "react-icons/ci";

//Counter component
export default function AddButton(props) {
  const cartcontext = useContext(CartContext);

  const addButtonHandler = () => {
    cartcontext.addProductHandler(props.productcard);
  };
  return (
    
      <StyledAddButton
        type="button"
        onClick={() => {
          addButtonHandler();
        }}
      >
        <CiShoppingCart color="hotpink" fontSize="30"/>
      </StyledAddButton>
    
  );
}

const StyledAddButton = styled.button`
  border: none;
  background-color: #C9FFD5;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: #fc8ac3;
  margin-right: 10px;
  position: absolute;
  right: 10px;
  bottom: 20px;
  line-height:50px;
`;
