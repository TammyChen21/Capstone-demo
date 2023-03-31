import styled from "styled-components";
import AddButton from "../AddButton";
import FavoriteButton from "../FavoriteButton";

//each product card component
export default function ProductCard({ productcard }) {
  const { id,image, title, description, price, amount,isFavorite } = productcard;
  return (
    <StyledProductCard>
      <StyledImg src={image} alt="photo" width="180px" height="180px" />
      <div>
        <StyledTitle>{title}</StyledTitle>
        <StyledDes>{description}</StyledDes>
        <StyledPrice>{price}</StyledPrice>
      </div>
      <FavoriteButton productcard={productcard}/>
      <AddButton productcard={productcard} />
    </StyledProductCard>
  );
}

const StyledProductCard = styled.div`
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 30px 0px;
  width: 240px;
  height: 360px;
  border-radius: 25px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
//background-color:#97EAEE
const StyledImg = styled.img`
  border-radius: 20px;
  margin-top: 15px;
  box-shadow: 4px 4px rgba(0, 0, 0, 0.2);
`;

const StyledTitle = styled.h4`
  color: #004056;
  margin-bottom: -5px;
  margin-left: 30px;
  margin-right: 30px;
`;

const StyledDes = styled.p`
  color: #004056;
  font-size: 14px;
  margin-bottom: -5px;
  margin-left: 30px;
  margin-right: 30px;
`;

const StyledPrice = styled.p`
  color: #fc8663;
  margin-left: 30px;
  font-weight: 600;
  position: absolute;
  bottom: 10px;
  ::after{
    content:"€";
  }
`;
