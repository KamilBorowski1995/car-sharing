import styled from "styled-components";

import Product from "components/organism/Product";
import Title from "components/atoms/Title";

const productDB = {
  name: "Yaris Comfort",
  photos: ["yaris.png", "yaris.png"],
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

const productSecond = {
  name: "Corolla",
  photos: ["corolla.png", "corolla2.png"],

  info: [
    {
      title: "Średnie zużycie paliwa",
      description: "4.5 l/ 100 km",
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

const StyledTitle = styled(Title)`
  position: relative;

  width: max-content;
  margin: 50px auto 40px;

  ::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -75px;
    width: 40px;
    height: 2px;
    background-color: #0c0c0c;
  }

  ::after {
    content: "";
    position: absolute;
    top: 50%;
    right: -75px;
    width: 40px;
    height: 2px;
    background-color: #0c0c0c;
  }
`;

const Products = () => {
  return (
    <div id="cennik">
      <StyledTitle type="h2" size="60">
        Cennik
      </StyledTitle>

      <Product productDB={productDB} />
      <Product productDB={productSecond} />
      <Product productDB={productDB} />
      <Product productDB={productSecond} />
      <Product productDB={productDB} />
      <Product productDB={productSecond} />
    </div>
  );
};

export default Products;
