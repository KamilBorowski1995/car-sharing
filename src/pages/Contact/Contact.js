import Paragraph from "components/atoms/Paragraph";
import Title from "components/atoms/Title";
import Form from "components/organism/Form";
import styled from "styled-components";

import IconFacebook from "components/assets/images/iconFb.svg";
import IconInstagram from "components/assets/images/iconInsta.svg";
import { ReactComponent as LogoInsta } from "components/assets/images/iconInsta.svg";
import { ReactComponent as LogoFace } from "components/assets/images/iconFb.svg";

const WrapperContact = styled.div`
  background-color: #f6f6f6;
  padding: 100px 0;
`;

const Wrapper = styled.div`
  width: 75vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 50px;
  margin: 0 auto;
`;

const StyledQuestionsContact = styled.div``;

const StyledParagraph = styled(Paragraph)`
  color: #373738 !important;
  margin-top: 15px;
`;

const WrapperContactData = styled.div`
  width: 75%;
  display: flex;

  margin-top: 50px;
`;

const StyledContactMailAndPhone = styled(StyledParagraph)`
  color: #818181 !important;
  font-family: "Roboto Condensed", sans-serif;
  flex-grow: 1;
`;

const WrapperIcon = styled.div`
  margin-top: 40px;
`;

const StyledIcon = styled.img`
  width: 50px;
  margin-right: 40px;
  cursor: pointer;

  transition: 0.2s ease-in-out;
  :hover {
    transform: scale(1.05);
  }
`;

const StyledSvgInsta = styled(LogoInsta)`
  width: 50px;
  margin-right: 40px;
  cursor: pointer;

  transition: 0.2s ease-in-out;

  :hover {
    transform: scale(1.05);
    path {
      fill: #808080;
    }
  }
`;

const StyledSvgFace = styled(LogoFace)`
  width: 50px;
  margin-right: 40px;
  cursor: pointer;

  transition: 0.2s ease-in-out;

  :hover {
    transform: scale(1.05);
    path {
      fill: #808080;
    }
  }
`;

const Contact = () => {
  return (
    <WrapperContact>
      <Wrapper id="kontakt">
        <StyledQuestionsContact>
          <Title type="h2" size="54">
            Jakieś pytania?
          </Title>
          <StyledParagraph size="24">
            Zostaw swój adres e-mail lub skontaktuj się z nami!
          </StyledParagraph>
          <WrapperContactData>
            <StyledContactMailAndPhone size="20">
              biuro@carsharing.rent
            </StyledContactMailAndPhone>
            <StyledContactMailAndPhone size="20">
              500 - 500 - 500
            </StyledContactMailAndPhone>
          </WrapperContactData>
          <WrapperIcon>
            <StyledSvgInsta />
            <StyledSvgFace />
          </WrapperIcon>
        </StyledQuestionsContact>

        <Form />
      </Wrapper>
    </WrapperContact>
  );
};

export default Contact;
