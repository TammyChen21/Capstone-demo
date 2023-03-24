import React, { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../../pages/_app";

//Counter component
export default function AddButton(props) {
  const cartcontext = useContext(CartContext);

  const addButtonHandler = () => {
    cartcontext.addProductHandler(props.productcard);
  };
  return (
    <>
      <StyledAddButton
        type="button"
        onClick={() => {
          addButtonHandler();
        }}
      >
        +
      </StyledAddButton>
      
    </>
  );
}

const StyledAddButton = styled.button`
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
