import React from "react";
import { useContext } from "react";
import { useRouter } from "next/router";
import { ProductData } from "../../pages/_app";
import Layout from "../../components/Layout";
import styled from "styled-components";
import Image from "next/image";

export default function DetailsPage() {
  const productData = useContext(ProductData);
  const router = useRouter();
  const id = router.query.id;

  let selectedProduct = null;
   selectedProduct = productData.find(
    (productcard) => productcard.id === id
  );
  console.log(productData);

  if (!selectedProduct) {
    return <div>loading...</div>;
  }

  return (
    <>
      <Layout />
      <StyledDetailsPage>
        <StyledTitle>{selectedProduct.title}</StyledTitle>
        <div>{selectedProduct.price}</div>
        <div>{selectedProduct.description}</div>
      </StyledDetailsPage>
    </>
  );
}

const StyledDetailsPage = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 612px;
  height: 100%;
  @media (min-width: 1024px) {
    width: 100%;
    max-width: 1200px;
    flex-direction: row;
    align-items: flex-start;
    gap: 50px;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
  transform: scale(1.1);
  object-position: 50% 50%;
  margin-top: 10px;
`;

const StyledTitle = styled.p``;

