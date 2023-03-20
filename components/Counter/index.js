import React from "react";
import styled from "styled-components";

//Counter compnent
export default function Counter(props) {
  return (
    <StyledCounter>
        +
    </StyledCounter>
  );
}

const StyledCounter = styled.button`
  border: none;
  background-color: #6ce5d2;
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;
