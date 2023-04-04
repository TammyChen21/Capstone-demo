import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../../pages/_app";
import { RiHomeHeartLine } from "react-icons/ri";
import { RiStarSmileLine } from "react-icons/ri";
import { RiShoppingCartLine } from "react-icons/ri";
import { RiUserHeartLine } from "react-icons/ri";

export default function Navigation() {
  const context = useContext(CartContext);
  return (
    <>
      <StyledListItem>
        <Link href="/" aria-label="homepage">
          <RiHomeHeartLine color="FFFFCB" fontSize="50" />
        </Link>
      </StyledListItem>
      <StyledListItem>
        <Link href="/favorite">
          <RiStarSmileLine color="FFFFCB" fontSize="50" />
        </Link>
      </StyledListItem>

      <StyledListItem>
        <StyledCounter>{context.totalAmount}</StyledCounter>

        <Link href="/shopping-cart">
          <RiShoppingCartLine color="FFFFCB" fontSize="50" />
        </Link>
      </StyledListItem>

      <StyledListItem>
        <Link href="#">
          <RiUserHeartLine color="FFFFCB" fontSize="50" />
        </Link>
      </StyledListItem>
    </>
  );
}

const StyledListItem = styled.div`
  display: flex;
  flex-direction: column;
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
