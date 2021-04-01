import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 20px;
  padding: 10px;
  position: relative;

  grid-area: ${({ name }) => name};
`;

const StyledLabel = styled.label`
  cursor: pointer;
  position: absolute;
  left: 18px;
  top: 0px;
  transition: 0.3s ease-in-out;

  font-size: 20px;
  font-family: "Roboto", sans-serif;
  color: #373738;
`;

const StyledTextArea = styled.textarea`
  margin-top: 24px;
  border: 1px solid #a5a5a5;
  width: 100%;
  height: 170px;
  cursor: pointer;
  padding: 10px;

  background-color: transparent;
  font-size: 20px;
  font-family: "Roboto", sans-serif;
  color: #373738;
`;

const TextArea = ({ children, name }) => {
  return (
    <Wrapper name={name}>
      <StyledLabel htmlFor={name}>{children}</StyledLabel>
      <StyledTextArea type="text" id={name} placeholder=" " />
    </Wrapper>
  );
};

export default TextArea;
