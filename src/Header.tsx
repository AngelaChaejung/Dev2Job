import React from "react";
import { styled } from "styled-components";
import Logo from "../src/assets/Layer_1.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  const [openUserInfo, setOpenUserInfo] = React.useState<boolean>(false);
  return (
    <StBg>
      <StItemArea>
        <StLogo src={Logo} alt="blue color home icon" />
        <StDistanceBetween>
          <StRole>For developer</StRole>
          <StLoginInfo onClick={() => setOpenUserInfo(!openUserInfo)}>
            Developer_0000
            <FontAwesomeIcon icon={faCaretDown} />
            {openUserInfo && (
              <StProfileInfo>
                <StProfileBtn>설정</StProfileBtn> <StProfileBtn>English</StProfileBtn>
                <StProfileBtn> 로그아웃</StProfileBtn>
              </StProfileInfo>
            )}
          </StLoginInfo>
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
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  display: flex;
`;
const StLoginInfo = styled.div`
  display: flex;
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  gap: 13px;
  cursor: pointer;
`;
const StDistanceBetween = styled.div`
  display: flex;
  padding-top: 8px;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
const StProfileInfo = styled.div`
  position: absolute;
  width: 90px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin-top: 34px;
  border: solid 1px #cdcdcd;
  padding: 16px;
  background-color: #ffff;
  gap: 8px;
  border-radius: 3px;
`;
const StProfileBtn = styled.div`
  background-color: #305ba1;
  color: #ffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 6px 0;
  font-size: 13px;
  font-weight: 600;
`;
