import React from "react";
import styled from "styled-components"
import Link from "next/link";

const StyledList = styled.ul`
  display: flex;
  justify-content: space-around;
  height: 100px;
  align-items: center;
  background-color: #74ceb7;
`;
const StyledListItem = styled.li``;

export default function Navigation() {
  return (
    <>
      <StyledList>
        <StyledListItem>
          <Link href="/">homepage</Link>
        </StyledListItem>
        <StyledListItem>
          <Link href="/art-pieces">favorite</Link>
        </StyledListItem>
        <StyledListItem>
          <Link href="#">shoppingcart</Link>
        </StyledListItem>
        <StyledListItem>
          <Link href="#">profil</Link>
        </StyledListItem>
      </StyledList>
    </>
  );
}
