import React, { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../../pages/_app";
import { RiShoppingCartLine } from "react-icons/ri";

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
      <RiShoppingCartLine color="hotpink" fontSize="26" />
    </StyledAddButton>
  );
}

const StyledAddButton = styled.button`
  border: none;
  background-color: #c9ffd5;
  width: 6%;
  height: 6%;
  border-radius: 50%;
  color: #fc8ac3;
  margin-right: 10%;
  //position: absolute;
  right: 10%;
  bottom: 6%;

  -webkit-transition: all 0.2s ease-out;

  -moz-transition: all 0.2s ease;

  -o-transition: all 0.2s ease;

  &:hover {
    -webkit-transform: rotate(20deg);

    -moz-transform: rotate(50deg);

    -o-transform: rotate(50deg);
  }
`;
