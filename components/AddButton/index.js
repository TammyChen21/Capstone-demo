import React, { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../../pages/_app";
import { RiShoppingCartLine} from "react-icons/ri";

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
        <RiShoppingCartLine color="hotpink" fontSize="28"/>
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
