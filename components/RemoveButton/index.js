import React from "react";
import { BiTrash } from "react-icons/Bi";
import styled from "styled-components";

export default function RemoveButton() {
  const deleteItemHandler = () => {
    const isDel = window.confirm("Are you sure to delete?");
    if (isDel){


    }
  };

  return (
    <StyledRemoveButton type="button" onClick={deleteItemHandler}>
      <BiTrash fontSize="26" />
    </StyledRemoveButton>
  );
}

const StyledRemoveButton = styled.button`
  background-color: #c9ffd5;
  border-radius: 40%;
  color:black
  position: absolute;
  width:40px;
  height:40px;
  :hover{
    color:red;
    transform:rotate(1turn)
  }
 `;
