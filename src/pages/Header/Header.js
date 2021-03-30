import styled from "styled-components";

import Title from "components/atoms/Title";
import Paragraph from "components/atoms/Paragraph";

import BgcImage from "components/assets/images/background.jpg";

const Wrapper = styled.div`
  width: 100%;
  height: 95vh;
  background-image: url(${BgcImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  position: relative;
`;
const OpacityWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0%;
  right: 0px;
  background-color: black;
  opacity: 70%;
`;

const TextWrapper = styled.div`
  position: absolute;
  width: 45%;
  top: 50%;
  right: 50px;
  transform: translateY(-50%);
`;

const StyledTitle = styled(Title)`
  padding: 40px 0;
`;
const StyledParagraph = styled(Paragraph)`
  margin: 30px 0;
  cursor: default;
  transition: 0.15s linear;
  :hover {
    transform: scale(1.04);
  }
`;

const StyledBar = styled.div`
  width: 260px;
  height: 4px;
  background-color: #e6e6e6;
`;

const Header = () => {
  return (
    <Wrapper>
      <OpacityWrapper />
      <TextWrapper>
        <StyledTitle>Wypożyczalnia samochodów CarSharing </StyledTitle>
        <StyledBar />
        <StyledParagraph letterSpacing={true}>- Nowe auta</StyledParagraph>
        <StyledParagraph letterSpacing={true}>
          - Atrakcyjne ceny
        </StyledParagraph>
        <StyledParagraph letterSpacing={true}>
          - Brak limitu kilometrów
        </StyledParagraph>
      </TextWrapper>
    </Wrapper>
  );
};

export default Header;
