import styled, { keyframes } from "styled-components";

import MessagerIcon from "components/assets/images/MessageIcon.svg";

const animationMessagerIconHover = keyframes`
0% {transform: translateX(0px)}
10% {transform: translateX(-1px)}
30% {transform: translateX(1px)}
50% {transform: translateX(-2px)}
70% {transform: translateX(2px)}
90% {transform: translateX(-5px)}
100% {transform: translateX(0px)}
`;

const Wrapper = styled.div`
  position: fixed;
  width: 150px;
  height: 150px;
  bottom: 100px;
  right: 50px;
  background-image: url(${MessagerIcon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  border-radius: 50%;
  transition: 0.2s ease-in-out;

  :hover {
    animation: ${animationMessagerIconHover} 0.4s ease-in-out;
  }
`;

const Messager = () => {
  return <Wrapper></Wrapper>;
};

export default Messager;
