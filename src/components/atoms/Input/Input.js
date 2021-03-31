import styled from "styled-components";

const Wrapper = styled.div`
  padding: 10px;
  position: relative;

  grid-area: ${({ name }) => name};
`;

const StyledLabel = styled.label`
  cursor: pointer;
  position: absolute;
  left: 18px;
  top: 40px;
  transition: 0.3s ease-in-out;

  font-size: 20px;
  font-family: "Roboto", sans-serif;
  color: #373738;
`;

const StyledInput = styled.input`
  margin-top: 24px;
  border: none;
  width: 100%;
  height: 30px;
  cursor: pointer;
  padding: 10px;

  background-color: transparent;
  font-size: 20px;
  font-family: "Roboto", sans-serif;
  color: #373738;

  :focus ~ label {
    top: 10px;
    font-size: 14px;
  }

  :not(:placeholder-shown) ~ label {
    top: 10px;
    font-size: 14px;
  }
`;

const StyledBar = styled.div`
  width: 100%;
  height: 2px;
  background-color: #818181;
`;

const Input = ({ children, name }) => {
  return (
    <Wrapper name={name}>
      <StyledInput type="text" id={name} placeholder=" " />
      <StyledLabel htmlFor={name}>{children}</StyledLabel>
      <StyledBar></StyledBar>
    </Wrapper>
  );
};

export default Input;
