import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../../pages/_app";
import {CiHome} from "react-icons/ci"
import {CiHeart} from "react-icons/ci"
import {CiShoppingCart} from "react-icons/ci"
import {CiUser} from "react-icons/ci"


export default function Navigation() {
  const context = useContext(CartContext);
  return (
    <>
      <StyledListItem>
        <Link href="/"><CiHome color="black" fontSize="50" />Home</Link>
      </StyledListItem>
      <StyledListItem>
        <Link href="/art-pieces">favorite <CiHeart color="black" fontSize="50" /></Link>
      </StyledListItem>
      <StyledListItem>
        <Link href="http://localhost:3000/shopping-cart">shoppingcart<CiShoppingCart color="black" fontSize="50" />
        </Link>
        <p>{context.totalAmount}</p>
      </StyledListItem>
      <StyledListItem>
        <Link href="#">profil <CiUser color="black" fontSize="50" /></Link>
      </StyledListItem>
    </>
  );
}

const StyledListItem = styled.li``;
