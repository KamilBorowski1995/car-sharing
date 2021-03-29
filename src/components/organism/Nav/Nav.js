import styled from "styled-components";

import logo from "components/assets/images/logo.svg";
import Paragraph from "components/atoms/Paragraph";
import Link from "components/atoms/Link";

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: space-between;
  padding: 0 270px;
  color: #e6e6e6;
`;

const WrapperLogo = styled.div`
  font-family: "Reem Kufi", sans-serif;
  text-transform: uppercase;
  letter-spacing: 0;
  display: flex;
  color: #e6e6e6;
  justify-content: space-between;

  cursor: pointer;
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
`;

const StyledLogoText = styled.p`
  line-height: 60px;
  font-size: 35px;
  margin-left: 20px;
  padding-top: 10px;
`;

const StyledLogo = styled.img`
  padding-top: 10px;
  height: 60px;
`;

const Nav = () => {
  return (
    <Wrapper>
      <WrapperLogo>
        <StyledLogo src={logo} alt="logo Car-Sharing" />
        <StyledLogoText>Car Sharing</StyledLogoText>
      </WrapperLogo>

      <StyledList>
        <Link active>Home</Link>
        <Link>Cennik</Link>
        <Link>Rezerwacja</Link>
        <Link>Kontakt</Link>
      </StyledList>
    </Wrapper>
  );
};

export default Nav;
