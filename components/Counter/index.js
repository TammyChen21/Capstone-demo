import React from "react";
import styled from "styled-components";

//Counter component
export default function Counter() {
  return <StyledCounter>+</StyledCounter>;
}

const StyledCounter = styled.div`
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
