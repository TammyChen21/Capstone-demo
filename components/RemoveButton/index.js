import React from "react";
import { BiTrash } from "react-icons/bi";
import styled from "styled-components";
import { useContext } from "react";
import { CartContext } from "../../pages/_app";

export default function RemoveButton(props) {
  const cartcontext = useContext(CartContext);
  
  const deleteButtonHandler = () => {
    cartcontext.deleteProductHandler(props.productcard);
    
  };
  return (
    <StyledRemoveButton type="button" onClick={()=>{deleteButtonHandler()} }>
      <BiTrash fontSize="26" />
    </StyledRemoveButton>
  );
}

const StyledRemoveButton = styled.button`
  background-color: #c9ffd5;
  border-radius: 40%;
  position: absolute;
  width:6%;
  height:6%;
  transition:0.3s;
  :hover{
    color:red;
    //transform:rotate(1turn)
  }
  border-radius: 50%;
  color: black;
  margin-right: 10%;
  position: absolute;
  right: 10%;
  bottom: 6%;
  border:none;
 `;
