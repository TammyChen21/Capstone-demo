import React from "react";
import { useContext } from "react";
import { useRouter } from "next/router";
import { ProductData } from "../../pages/_app";
import Layout from "../../components/Layout";
import styled from "styled-components";
import FavoriteButton from "../../components/FavoriteButton";
import AddButton from "../../components/AddButton";
import PRODUCT_DATA from "../api/productsdaten";

export default function DetailsPage() {
  const productData = useContext(ProductData);
  const router = useRouter();
  const id = router.query.id;

  let selectedProduct = null;
  selectedProduct = productData.find((productcard) => productcard.id === id);
  console.log(productData);

  if (!selectedProduct) {
    return <div>loading...</div>;
  }

  return (
    <>
      <Layout />
      <StyledDetailsPage>
        <StyledProductContainer>
          <StyledImage
            src={selectedProduct.image}
            alt="photo"
            width="240px"
            height="240px"
          />
          <StyledTitle>{selectedProduct.title}</StyledTitle>
          <StyledDes>{selectedProduct.description}</StyledDes>
          
          <StyledPrice>{selectedProduct.price}</StyledPrice>
          <StyledButtonCountainer>
            <StyledFavoriteButton>
              <FavoriteButton />
            </StyledFavoriteButton>
            <StyledAddButton>
              <AddButton productcard={selectedProduct}/>
            </StyledAddButton>
          </StyledButtonCountainer>
          
        </StyledProductContainer>
      </StyledDetailsPage>
    </>
  );
}

const StyledDetailsPage = styled.div``;
const StyledProductContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 30px 0px;
  width: 80%;
  margin-top: 80px;
  margin-left: 10%;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid;
`;

const StyledImage = styled.img`
  border-radius: 20px;
  margin-top: 5px;
  box-shadow: 4px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: -5px;
`;

const StyledTitle = styled.h2`
  color: #004056;
  margin-bottom: -8px;
  margin-left: 10%;
  margin-right: 10px;
`;

const StyledDes = styled.p`
  color: #004056;
  font-size: 1rem;
  margin-left: 10%;
  margin-bottom: -18px;
`;
const StyledPrice = styled.div`
  margin-top: 40px;
  color: #fc8663;
  margin-right: 60%;
  font-weight: 500;
  font-size: 1.6rem;
  ::after {
    content: "€";
  }
`;
const StyledButtonCountainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 30%;
  margin-right: -50%;
`;

const StyledFavoriteButton = styled.div`
  width: 40px;
  height: 40px;
`;
const StyledAddButton = styled.div`
  width: 40px;
  height: 40px;
`;
