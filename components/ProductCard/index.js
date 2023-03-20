import styled from "styled-components";
import Counter from "../Counter";

//each product card component
export default function ProductCard(props) {
  return (
    <StyledProductCard>
      <div>
        <img src={props.productcard.image} alt="photo" width="180px" height="180px"/>
      </div>
      <div>
        <h3>{props.productcard.title}</h3>
        <p>
          {props.productcard.description}
        </p>
        <div>{props.productcard.price}</div>
        <Counter amount={props.productcard.amount}/>

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
