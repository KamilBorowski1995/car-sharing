import styled from "styled-components";

import Input from "components/atoms/Input";
import TextArea from "components/atoms/TextArea";

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "name email"
    "message message"
    ". button";

  @media (max-width: 1000px) {
    grid-template-areas:
      "name"
      "email"
      "message "
      "button";
  }
`;

const StyledButton = styled.button`
  width: 200px;
  grid-area: button;

  margin: 20px 10px 0 auto;

  padding: 15px 60px;
  background: #f1f1f1;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  font-weight: 400;
  color: #0c0c0c;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);

  cursor: pointer;
`;

const Form = () => {
  return (
    <Wrapper>
      <Input name="name">Wpisz swoje imię</Input>
      <Input name="email">Wpisz swój email</Input>
      <TextArea name="message">Wiadomość:</TextArea>

      <StyledButton>Wyślij</StyledButton>
    </Wrapper>
  );
};

export default Form;
