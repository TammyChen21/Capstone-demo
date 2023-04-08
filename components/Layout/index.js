import React from "react";
import styled from "styled-components";
import Navigation from "../Navigation";

export default function Layout({ children }) {
  return (
    <StyledAppContainer>
      <StyledHeading>
        <h1>Wellcome💝</h1>
      </StyledHeading>

      <StyledNav>
        <Navigation />
      </StyledNav>
    </StyledAppContainer>
  );
}

const StyledAppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index:-1;
`;

const StyledHeading = styled.div`
  width: 100%;
  height: 60px;
  background-color: #6ce5d2;
  color: #004056;
  text-align: center;
  position: fixed;
  z-index: 999;
  top: 0;
`;

const StyledNav = styled.ul`
  background-color: #6ce5d2;
  bottom: -20px;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-around;
  height: 60px;
  align-items: center;
  z-index: 999;
  padding: 10px;
`;
