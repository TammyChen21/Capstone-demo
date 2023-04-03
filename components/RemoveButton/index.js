import React from 'react';
import {BiTrash} from "react-icons/Bi"
import styled from 'styled-components';

export default function RemoveButton () {


    return (
        <StyledRemoveButton>
        <BiTrash fontSize="26" />     
        </StyledRemoveButton>
    );
};

const StyledRemoveButton = styled.button`
  background-color: #c9ffd5;
  border-radius: 40%;
  color:black
  position: absolute;
 `
