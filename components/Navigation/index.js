import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <StyledListItem>
        <Link href="/">homepage</Link>
      </StyledListItem>
      <StyledListItem>
        <div>
          <Link href="/art-pieces">favorite</Link>
        </div>
      </StyledListItem>
      <StyledListItem>
        <Link href="http://localhost:3000/shopping-cart">shoppingcart</Link>
      </StyledListItem>
      <StyledListItem>
        <Link href="#">profil</Link>
      </StyledListItem>
    </>
  );
}

const StyledListItem = styled.li``;
