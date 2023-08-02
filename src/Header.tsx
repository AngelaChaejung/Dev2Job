import React from "react";
import { styled } from "styled-components";
import Logo from "../src/assets/Layer_1.svg";
const Header = () => {
  return (
    <StBg>
      <StItemArea>
        <StLogo src={Logo} alt="blue color home icon" />
        <StDistanceBetween>
          <StRole>For developer</StRole>
          <StLoginInfo>Developer_0000 (삼각형아이콘)</StLoginInfo>
        </StDistanceBetween>
      </StItemArea>
    </StBg>
  );
};

export default Header;

const StBg = styled.div`
  width: 100vw;
  height: 145px;
  background: #fff;
`;
const StLogo = styled.img`
  width: 162px;
  height: 48px;
`;
const StItemArea = styled.div`
  padding: 57px 17.08% 40px 15.06%;
  display: flex;
  flex-direction: row;
`;
const StRole = styled.div`
  padding-left: 19px;
  color: #000;
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  display: flex;
`;
const StLoginInfo = styled.div`
  display: flex;
  color: #000;
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
`;
const StDistanceBetween = styled.div`
  display: flex;
  padding-top: 8px;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
