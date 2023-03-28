import React from "react";
import styled from "styled-components";
import { CiSearch } from "react-icons/ci";

export default function SearchBar(props) {
  const inputChangeHandler = (event) => {
    event.preventDefault();
    const keyword = event.target.value;
    props.onFilter(keyword);
  };

  return (
    <StyledSearchBar>
      <StyledIcon>
        <CiSearch color="black" fontSize="20" />
      </StyledIcon>
      <StyledInput
        onChange={inputChangeHandler}
        type="text"
        placeholder="Search"
      />
    </StyledSearchBar>
  );
}

const StyledIcon = styled.span`
  position: absolute;
  margin-left: 5px;
  margin-top: 4px;
`;

const StyledInput = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 6px;
  border: solid 1px;
  color: gray;
  background-color: #f3f3f3;
  padding-left: 25px;
`;
const StyledSearchBar = styled.div`
  position: absolute;
  padding-left:160px;
  
`;
