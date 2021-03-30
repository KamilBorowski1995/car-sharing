import { useState, useEffect } from "react";

import styled from "styled-components";

import logo from "components/assets/images/logo.svg";

import Link from "components/atoms/Link";

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;

  background-color: ${({ scroll }) =>
    scroll ? "rgba(0, 0, 0, 0.8) " : "rgba(0, 0, 0, 0.2)"};
  /* background-color: rgba(0, 0, 0, 0.2); */

  display: flex;
  justify-content: space-between;
  padding: 0 270px;
  color: #e6e6e6;

  transition: 0.3s ease-in-out;
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

  /* height: ${({ scroll }) => (scroll ? "50px" : "60px")};
  transition: 0.3s ease-in-out; */
`;

const Nav = () => {
  const [scroll, setScroll] = useState(false);

  function logit() {
    if (window.pageYOffset > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  return (
    <Wrapper scroll={scroll}>
      <WrapperLogo>
        <StyledLogo scroll={scroll} src={logo} alt="logo Car-Sharing" />
        <StyledLogoText>Car Sharing</StyledLogoText>
      </WrapperLogo>

      <StyledList>
        <Link href="/#start" active>
          Home
        </Link>
        <Link href="/#cennik">Cennik</Link>
        <Link href="/#cennik">Rezerwacja</Link>
        <Link href="/#kontakt">Kontakt</Link>
      </StyledList>
    </Wrapper>
  );
};

export default Nav;
