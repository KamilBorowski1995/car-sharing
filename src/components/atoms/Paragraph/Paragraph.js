import styled from "styled-components";

const StyledParagraph = styled.p`
  font-size: ${({ size }) => `${size}px`};
  font-family: "Roboto Condensed", sans-serif;
  color: #e6e6e6;
  letter-spacing: ${({ letterSpacing }) => (letterSpacing ? "5px" : "0px")};
  font-weight: 300;
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
