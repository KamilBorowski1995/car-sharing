import styled from "styled-components";

const StyledParagraph = styled.p`
  font-size: ${({ size }) => `${size}px`};
  font-family: "Roboto", sans-serif;
  color: #e6e6e6;
  letter-spacing: ${({ letterSpacing }) => (letterSpacing ? "5px" : "0px")};
  font-weight: 600;
`;

const Paragraph = ({ children, size, letterSpacing = false }) => {
  return (
    <StyledParagraph letterSpacing={letterSpacing} size={size}>
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;
