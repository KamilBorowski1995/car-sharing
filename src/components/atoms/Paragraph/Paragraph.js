import styled from "styled-components";

const StyledParagraph = styled.p`
  font-size: ${({ size }) => `${size}px`};
  font-family: "Roboto Condensed", sans-serif;
  color: #e6e6e6;
  letter-spacing: ${({ letterSpacing }) => (letterSpacing ? "5px" : "0px")};
  font-weight: 300;

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

const Paragraph = ({
  children,
  size = "46",
  letterSpacing = false,
  className,
}) => {
  return (
    <StyledParagraph
      className={className}
      letterSpacing={letterSpacing}
      size={size}
    >
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;
