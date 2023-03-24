import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../../pages/_app";

export default function Navigation() {
  const context = useContext(CartContext);
  return (
    <>
      <StyledListItem>
        <Link href="/">homepage</Link>
      </StyledListItem>
      <StyledListItem>
        <Link href="/art-pieces">favorite</Link>
      </StyledListItem>
      <StyledListItem>
        <Link href="http://localhost:3000/shopping-cart">shoppingcart</Link>
        <p>{context.totalAmount}</p>
      </StyledListItem>
      <StyledListItem>
        <Link href="#">profil</Link>
      </StyledListItem>
    </>
  );
}

const StyledListItem = styled.li``;
