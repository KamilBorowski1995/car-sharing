import Paragraph from "components/atoms/Paragraph";
import Title from "components/atoms/Title";
import Form from "components/organism/Form";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #f6f6f6;

  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const StyledQuestionsContact = styled.div``;

const StyledParagraph = styled(Paragraph)`
  color: #373738 !important;
`;

const Contact = () => {
  return (
    <Wrapper id="kontakt">
      <StyledQuestionsContact>
        <Title type="h2" size="54">
          Jakieś pytania?
        </Title>
        <StyledParagraph size="24">
          Zostaw swój adres e-mail lub skontaktuj się z nami!
        </StyledParagraph>
      </StyledQuestionsContact>

      <Form />
    </Wrapper>
  );
};

export default Contact;
