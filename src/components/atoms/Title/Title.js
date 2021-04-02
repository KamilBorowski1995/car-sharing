import styled from "styled-components";

const StyledH1 = styled.h1`
  font-size: ${({ size }) => `${size}px`};
  font-family: "Roboto Condensed", sans-serif;
  color: #e6e6e6;
  letter-spacing: 4px;
  font-weight: 400;

  @media (max-width: 1450px) {
    font-size: ${({ size }) => `${size * 0.95}px`};
  }

  @media (max-width: 1200px) {
    font-size: ${({ size }) => `${size * 0.9}px`};
  }
  @media (max-width: 1000px) {
    font-size: ${({ size }) => `${size * 0.85}px`};
  }
  @media (max-width: 800px) {
    font-size: ${({ size }) => `${size * 0.8}px`};
  }
`;
const StyledH2 = styled.h2`
  font-size: ${({ size }) => `${size}px`};
  font-family: "Roboto Condensed", sans-serif;
  color: #0c0c0c;
  letter-spacing: 5px;
  font-weight: 400;

  @media (max-width: 1450px) {
    font-size: ${({ size }) => `${size * 0.95}px`};
  }

  @media (max-width: 1200px) {
    font-size: ${({ size }) => `${size * 0.9}px`};
  }
  @media (max-width: 1000px) {
    font-size: ${({ size }) => `${size * 0.85}px`};
  }
  @media (max-width: 800px) {
    font-size: ${({ size }) => `${size * 0.8}px`};
  }
`;
const StyledH3 = styled.h3`
  font-size: ${({ size }) => `${size}px`};
  font-family: "Roboto Condensed", sans-serif;
  color: #0c0c0c;
  letter-spacing: 2px;
  font-weight: 400;

  @media (max-width: 1450px) {
    font-size: ${({ size }) => `${size * 0.95}px`};
  }

  @media (max-width: 1200px) {
    font-size: ${({ size }) => `${size * 0.9}px`};
  }
  @media (max-width: 1000px) {
    font-size: ${({ size }) => `${size * 0.85}px`};
  }
  @media (max-width: 800px) {
    font-size: ${({ size }) => `${size * 0.8}px`};
  }
`;

const Title = ({ children, type = "h1", size = "54", className }) => {
  if (type === "h1") {
    return (
      <StyledH1 className={className} size={size}>
        {children}
      </StyledH1>
    );
  }
  if (type === "h2") {
    return (
      <StyledH2 className={className} size={size}>
        {children}
      </StyledH2>
    );
  }
  if (type === "h3") {
    return (
      <StyledH3 className={className} size={size}>
        {children}
      </StyledH3>
    );
  }
};

export default Title;
