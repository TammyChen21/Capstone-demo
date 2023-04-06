import React, { useState } from "react";
import styled from "styled-components";
import { RiStarSmileLine } from "react-icons/ri";
import { RiStarSmileFill } from "react-icons/ri";
import { useContext } from "react";
import { FavoriteContext } from "../../pages/_app";

export default function FavoriteButton(props) {
  const favoritecontext = useContext(FavoriteContext);
  const favoriteButtonHandler = () => {
    favoritecontext.handleFavorite(props.productcard);
  };

  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <StyledFavoriteButton
      type="button"
      onClick={() => {
        [favoriteButtonHandler(), handleFavoriteClick()];
      }}
    >
      {isFavorite ? (
        <RiStarSmileFill color="hotpink" fontSize="26" />
      ) : (
        <RiStarSmileLine color="hotpink" fontSize="26" />
      )}
    </StyledFavoriteButton>
  );
}

const StyledFavoriteButton = styled.button`
  border: none;
  background-color: #c9ffd5;
  width: 6%;
  height: 6%;
  border-radius: 50%;
  font-size: 10px;
  color: #fc8ac3;
  margin-right: 35%;
  //position: absolute;
  right: 10px;
  bottom: 6%;

  -webkit-transition: all 0.2s ease-out;

  -moz-transition: all 0.2s ease;

  -o-transition: all 0.2s ease;

  &:hover {
    -webkit-transform: rotate(-20deg);

    -moz-transform: rotate(-50deg);

    -o-transform: rotate(-50deg);
  }
`;
