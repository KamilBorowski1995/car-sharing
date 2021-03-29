import styled, { keyframes } from "styled-components";

import Title from "components/atoms/Title";

import Car from "components/assets/images/cars/yaris.png";

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
  grid-template-columns: 40% 60%;
  margin: 0 auto 50px;
  padding: 30px;
`;

const WrapperImageAndButton = styled.div`
  text-align: center;
`;
const WrapperImage = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const StyledImage = styled.img`
  width: 50%;
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
  display: inline-block;
  padding: 15px 60px;
  background: #0079ff;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;

  cursor: pointer;

  animation-duration: 1s;
  animation-fill-mode: both;
  animation-iteration-count: 1;

  :hover {
    animation-name: ${rubberBand};
  }
`;

const productDB = {
  name: "Yaris Comfort",
  info: [
    {
      title: "Średnie zużycie paliwa",
      description: "3.9 l/ 100 km",
    },
    {
      title: "Skrzynia biegów",
      description: "Manualna",
    },
    {
      title: "Prędkość maks.",
      description: "175km/h",
    },
  ],
  cost: [
    {
      title: "5h",
      description: "129 zł",
    },
    {
      title: "1-2 dni",
      description: "119 zł",
    },
    {
      title: "1 tydz.",
      description: "109 zł",
    },
    {
      title: "2 tyg.",
      description: "99 zł",
    },
    {
      title: "1 mies.",
      description: "2899 zł",
    },
    {
      title: ">3 mies.",
      description: "2599 zł",
    },
  ],
};

const Product = () => {
  const mapProduct = (data) => {
    const mapData = data.map(({ title, description }) => (
      <StyledTableTr>
        <StyledtableTd>{title}</StyledtableTd>{" "}
        <StyledtableTd weight="500">{description}</StyledtableTd>
      </StyledTableTr>
    ));

    return mapData;
  };

  return (
    <Wrapper>
      <WrapperImageAndButton>
        <WrapperImage>
          <StyledImage src={Car} alt="zdjęcie podglądowe samochodu" />
        </WrapperImage>
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
