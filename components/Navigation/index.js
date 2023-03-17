import React from "react";
import styled from "styled-components";

const StyledNavigation = styled.ul`
  height: 100px;
  display: flex;
  justify-content: space-around;
  background-color: #74ceb7;
`;
const StyledNavigationItem = styled.li``;

export default function Navigation() {
  return (
    <>
      <StyledNavigation>
        <StyledNavigationItem>123</StyledNavigationItem>
        <StyledNavigationItem>456</StyledNavigationItem>
        <StyledNavigationItem>789</StyledNavigationItem>
      </StyledNavigation>
    </>
  );
}
