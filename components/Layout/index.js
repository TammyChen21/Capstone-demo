import React from "react";
import styled from "styled-components";
import Navigation from "../Navigation";

export default function Layout({ children }) {
  return (
    <StyledAppContainer>
      <StyledHeading>App Name</StyledHeading>
      <StyledProducts>all products</StyledProducts>
      <StyledNav>
        <Navigation />
      </StyledNav>
    </StyledAppContainer>
  );
}

const StyledAppContainer = styled.div`
  position:relative
    `;

const StyledHeading = styled.div`
  height: 100px;
  background-color: #74ceb7;
  color: #004056;
  text-align: center;
`;

const StyledProducts = styled.div`
  background-color: #c9ffd5;
  height: 744px;
`;

const StyledNav = styled.nav`
  height: 100px;
  background-color: #74ceb7;
  bottom: 0;
  position: fixed;
  width: 100%;
`;

// Styled the homepage

// Styled the heading of homepage

// Styled the main part (products)

// Styled the nav bar
