import React from "react";
import styled from "styled-components";
import Link from "next/link";

const StyledListItem = styled.li``;

export default function Navigation() {
  return (
    <>
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
    </>
  );
}
