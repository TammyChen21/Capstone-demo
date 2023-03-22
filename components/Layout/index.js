import React from "react";
import styled from "styled-components";
import Navigation from "../Navigation";

export default function Layout({ children }) {
  return (
    <StyledAppContainer>
      <StyledHeading>App Name</StyledHeading>

      <StyledNav>
        <Navigation />
      </StyledNav>
    </StyledAppContainer>
  );
}

const StyledAppContainer = styled.div`
  position: relative;
`;

const StyledHeading = styled.div`
  height: 100px;
  background-color: #6ce5d2;
  color: #004056;
  text-align: center;
`;

const StyledNav = styled.ul`
  height: 100px;
  background-color: #6ce5d2;
  bottom: 0;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-around;
  height: 100px;
  align-items: center;
  z-index: 999;
`;
