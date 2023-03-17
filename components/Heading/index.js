import React from "react";
import styled from "styled-components";

const StyledHeading = styled.div`
  height: 100px;
  background-color: #74ceb7;
  color: #004056;
  text-align: center;
`;

export default function Heading() {
  return (
    <>
      <StyledHeading>App Name</StyledHeading>
    </>
  );
}
