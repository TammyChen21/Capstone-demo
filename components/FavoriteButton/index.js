import React,{useContext} from "react";
import styled from "styled-components";
import { RiStarSmileLine } from "react-icons/ri";
import { RiStarSmileFill } from "react-icons/ri";
import { CartContext } from "../../pages/_app";


export default function FavoriteButton() {
  const cartcontext = useContext(CartContext);

  /* const toggleHandler = () => {
      cartcontext.addProductHandler(props.productcard);
    };*/
  return (
    <StyledFavoriteButton
      type="button"
      onClick={() => {
        toggleHandler();
      }}
    >
        <RiStarSmileLine color="hotpink" fontSize="28"/>
      

    </StyledFavoriteButton>
  );
}

const StyledFavoriteButton = styled.button`
  border: none;
  background-color: #c9ffd5;
  width: 35px;
  height: 30px;
  border-radius: 50%;
  font-size: 10px;
  color: #fc8ac3;
  margin-right: 45px;
  position: absolute;
  right: 10px;
  bottom: 20px;
  line-height: 50px;
`;
//<RiStarSmileFill color="hotpink" fontSize="50"/>