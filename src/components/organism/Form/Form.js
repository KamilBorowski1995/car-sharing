import styled from "styled-components";

import Input from "components/atoms/Input";

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "name email"
    "message message";
`;

const Form = () => {
  return (
    <Wrapper>
      <Input name="name">Wpisz swoje imię</Input>
      <Input name="email">Wpisz swój email</Input>
      <Input name="message" type="textarea">
        Wiadomość:
      </Input>
    </Wrapper>
  );
};

export default Form;
