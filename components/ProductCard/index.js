import { useState } from "react";
import styled from "styled-components";
import AddButton from "../AddButton";
import FavoriteButton from "../FavoriteButton";
import RemoveButton from "../RemoveButton";

//each product card component
export default function ProductCard({ productcard, showAddButton = true }) {
  const { id, image, title, description, price, amount, isFavorite, index } =
    productcard;
  return (
    <>
      <StyledProductCard>
        <StyledImg src={image} alt="photo" width="140px" height="140px" />
        <StyledProduct>
          <StyledTitle>{title}</StyledTitle>
          <StyledDes>{description}</StyledDes>
        </StyledProduct>
        <StyledPrice>{price}</StyledPrice>
        <ButtonContainer>
          <FavoriteButton productcard={productcard} />
          <div>
            {showAddButton ? (
              <AddButton productcard={productcard} />
            ) : (
              <RemoveButton productcard={productcard} />
            )}
          </div>
        </ButtonContainer>
      </StyledProductCard>
    </>
  );
}

const StyledProductCard = styled.div`
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 30px 0px;
  width: 168px;
  height: 260px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const StyledProduct = styled.div`
  position: relative;
`;

const StyledImg = styled.img`
  border-radius: 20px;
  margin-top: 5px;
  box-shadow: 4px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: -15px;
`;

const StyledTitle = styled.h6`
  color: #004056;
  margin-bottom: 8px;
  margin-left: 10%;
  margin-right: 10px;
`;

const StyledDes = styled.div`
  color: #004056;
  font-size: 0.7rem;
  margin-left: 10%;
  margin-bottom: -8px;
`;

const StyledPrice = styled.div`
  margin-top: 30px;
  color: #fc8663;
  margin-right: 60%;
  font-weight: 500;
  font-size: 1rem;
  ::after {
    content: "€";
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space around;
  margin-top: -15%;
  margin-right: -30%;
`;
