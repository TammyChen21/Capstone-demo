import styled from "styled-components";

//each product card component
export default function ProductCard() {
  return (
    <StyledProductCard>
      <div>
        <img src="../img/beispielsfoto.png" alt="photo" width="180px" height="180px"/>
      </div>
      <div>
        <h2>Fahrrad</h2>
        <p>
          Ich verkaufe das Fahrrad meiner Tochter, da es zu klein geworden ist.
          Guter Zustand!
        </p>
        <div>50€</div>
        <div>shoppingcart</div>

      </div>
    </StyledProductCard>
  );
}

const StyledProductCard = styled.div`
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 30px 0px;
  width: 240px;
  height: 360px;
  border-radius: 20px;
  margin: 20px;
`;
//background-color:#97EAEE
