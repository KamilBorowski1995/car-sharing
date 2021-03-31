import styled, { keyframes } from "styled-components";

import Title from "components/atoms/Title";

const rubberBand = keyframes`
from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, .95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;

const Wrapper = styled.div`
  width: 1600px;
  background-color: #f1f1f1;
  display: grid;
  grid-template-columns: 40% 55%;
  grid-gap: 5%;
  margin: 0 auto 50px;
  padding: 30px;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
`;

const WrapperImageAndButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const WrapperImage = styled.div`
  width: 100%;
  flex-basis: 75%;
  background-image: url(${({ image }) => `./image/cars/${image[0]}`});
  background-position: center;
  background-size: 70%;
  background-repeat: no-repeat;
  overflow: hidden;
  text-align: center;
  transition: 0.1s linear;

  :hover {
    background-image: url(${({ image }) => `./image/cars/${image[1]}`});
  }
`;

const StyledTableWrapper = styled.table`
  display: flex;
`;

const StyledTableTr = styled.tr`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 15px 0;
`;

const StyledtableTd = styled.td`
  font-size: 20px;
  font-family: "Roboto", sans-serif;
  color: #0c0c0c;
  font-weight: ${({ weight }) => (weight ? `${weight}` : "300")};
  margin: 5px 0;
`;

const StyledTitle = styled(Title)`
  /* margin: 20px 0; */
`;

const StyledButton = styled.button`
  padding: 15px 60px;
  background: #f1f1f1;
  font-size: 16px;
  font-family: "Roboto Condensed", sans-serif;
  text-transform: uppercase;
  font-weight: 400;
  color: #0c0c0c;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);

  cursor: pointer;

  animation-duration: 1s;
  animation-fill-mode: both;
  animation-iteration-count: 1;

  :hover {
    animation-name: ${rubberBand};
  }
`;

const Product = ({ productDB }) => {
  const mapProduct = (data) => {
    const mapData = data.map(({ title, description }) => (
      <StyledTableTr>
        <StyledtableTd weight="500">{title}</StyledtableTd>{" "}
        <StyledtableTd>{description}</StyledtableTd>
      </StyledTableTr>
    ));

    return mapData;
  };

  return (
    <Wrapper>
      <WrapperImageAndButton>
        <WrapperImage image={productDB.photos}></WrapperImage>
        <StyledButton>Zarezerwuj</StyledButton>
      </WrapperImageAndButton>
      <div>
        <StyledTitle type="h3" size="50">
          {productDB.name}
        </StyledTitle>
        <StyledTableWrapper>{mapProduct(productDB.info)}</StyledTableWrapper>

        <StyledTableWrapper>{mapProduct(productDB.cost)}</StyledTableWrapper>
      </div>
    </Wrapper>
  );
};

export default Product;
