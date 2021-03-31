import styled from "styled-components";

const StyledLi = styled.li`
  padding: 0 25px;

  @media (max-width: 1450px) {
    padding: 0 20px;
  }
`;
const StyledA = styled.a`
  font-family: "Roboto Condensed", sans-serif;
  color: #e6e6e6;
  font-size: 20px;
  text-decoration: none;
  padding: 0 5px 5px;
  line-height: 70px;
  text-transform: uppercase;
  font-weight: 500;
  transition: 0.3s linear;

  border-bottom: ${({ active }) => active && "3px solid #e6e6e6"};

  :hover {
    color: white;
  }

  @media (max-width: 1450px) {
    padding: 0 5px 5px;
  }

  @media (max-width: 992px) {
    padding: 0 2px 5px;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 576px) {
  }
`;

const Link = ({ children, href = "#", active = false }) => {
  return (
    <StyledLi>
      <StyledA active={active} href={href}>
        {children}
      </StyledA>
    </StyledLi>
  );
};

export default Link;
