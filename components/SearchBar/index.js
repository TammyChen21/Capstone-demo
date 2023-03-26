import React from "react";
import styled from "styled-components";
import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
  return (
    <div>
      <StyledSearchBar>
       <StyledIcon><CiSearch color="black" fontSize="20" /></StyledIcon> 

        <StyledInput type="text" placeholder="Search" />
      </StyledSearchBar>
    </div>
  );
}

const StyledSearchBar = styled.div`
  
`;
const StyledIcon = styled.span`
position:absolute;
margin-left:5px;
margin-top:4px;
`;

const StyledInput = styled.input`
  width: 260px;
  height: 30px;
  border-radius: 6px;
  border: solid 1px;
  color: gray;
  background-color: #f3f3f3;
  padding-left:25px;

`;
