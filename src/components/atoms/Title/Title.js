import styled from "styled-components";

const StyledH1 = styled.h1`
  font-size: ${({ size }) => `${size}px`};
  font-family: "Roboto", sans-serif;
  color: #e6e6e6;
  letter-spacing: 5px;
  font-weight: 600;
`;
const StyledH2 = styled.h2`
  font-size: ${({ size }) => `${size}px`};
  font-family: "Roboto", sans-serif;
  color: #0c0c0c;
  letter-spacing: 5px;
  font-weight: 600;
`;
const StyledH3 = styled.h3`
  font-size: ${({ size }) => `${size}px`};
  font-family: "Roboto", sans-serif;
  color: #0c0c0c;
  letter-spacing: 5px;
  font-weight: 600;
`;

const Title = ({ children, type = "h1", size }) => {
  if (type === "h1") {
    return <StyledH1 size={size}>{children}</StyledH1>;
  }
  if (type === "h2") {
    return <StyledH2 size={size}>{children}</StyledH2>;
  }
  if (type === "h3") {
    return <StyledH3 size={size}>{children}</StyledH3>;
  }
};

export default Title;
