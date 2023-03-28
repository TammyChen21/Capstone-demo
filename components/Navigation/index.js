import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../../pages/_app";
import { CiHome } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

export default function Navigation() {
  const context = useContext(CartContext);
  return (
    <>
      <StyledListItem>
        <CiHome color="FFFFCB" fontSize="50" />
        <Link href="/">Home</Link>
      </StyledListItem>
      <StyledListItem>
        <CiHeart color="FFFFCB" fontSize="50" />
        <Link href="/favorite">favorite </Link>
      </StyledListItem>

      <StyledListItem>
        <StyledCounter>{context.totalAmount}</StyledCounter>
        <CiShoppingCart color="FFFFCB" fontSize="50" />
        <Link href="/shopping-cart">shoppingcart</Link>
      </StyledListItem>

      <StyledListItem>
        <CiUser color="FFFFCB" fontSize="50" />
        <Link href="#">profil</Link>
      </StyledListItem>
    </>
  );
}

const StyledListItem = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-variant: small-caps;
  position: relative;
  align-items: center;
`;
const StyledCounter = styled.div`
  position: absolute;
  margin-left: 55px;
  margin-top: -5px;
  color: hotpink;
  font-size: 24px;
  font-weight: 600;
`;
