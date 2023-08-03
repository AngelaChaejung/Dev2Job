import React from "react";
import { styled } from "styled-components";

const Profile = () => {
  return (
    <StProfile.Body>
      <StProfile.NameArea>이름Name</StProfile.NameArea>
      <StProfile.EmailArea>developer0000@email.com</StProfile.EmailArea>
      <svg xmlns="http://www.w3.org/2000/svg" width="940" height="2" viewBox="0 0 940 2" fill="none">
        <path d="M0 1H940" stroke="black" />
      </svg>
      <StProfile.CardContainer>
        <StProfile.ProfileCard size={"large"}>
          <StProfile.CardContent>
            <StProfile.SmallTitle>Education</StProfile.SmallTitle>
            <StProfile.CardText>Computer Engineer, Bachelor</StProfile.CardText>
          </StProfile.CardContent>
        </StProfile.ProfileCard>
        <StProfile.ProfileCard size={"large"}>
          <StProfile.CardContent>
            <StProfile.SmallTitle>Contact</StProfile.SmallTitle>
            <StProfile.CardText>+82.10.000.0000</StProfile.CardText>
          </StProfile.CardContent>
        </StProfile.ProfileCard>
        <StProfile.ProfileCard size={"small"}>
          <StProfile.CardContent>
            <StProfile.SmallTitle>Location</StProfile.SmallTitle>
            <StProfile.CardText>Seoul, S.Korea</StProfile.CardText>
          </StProfile.CardContent>
        </StProfile.ProfileCard>
        <StProfile.ProfileCard size={"small"}>
          <StProfile.CardContent>
            <StProfile.SmallTitle>Language</StProfile.SmallTitle>
            <StProfile.CardText>Korean, English</StProfile.CardText>
          </StProfile.CardContent>
        </StProfile.ProfileCard>
      </StProfile.CardContainer>
    </StProfile.Body>
  );
};

export default Profile;

const StProfile = {
  Body: styled.div`
    border-radius: 4px;
    border: 1px solid #ccc;
    background: #fff;
    width: 1020px;
    height: 2280px;
    padding: 83px 50px 78px 50px;
  `,
  NameArea: styled.div`
    padding-left: 25px;
    color: #000;
    font-family: Noto Sans KR;
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px;
  `,
  EmailArea: styled.div`
    padding: 20px 0 20px 27px;
    color: #000;
    font-family: Noto Serif KR;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `,
  CardContainer: styled.div`
    padding-left: 25px;
    display: flex;
    flex-direction: row;
    gap: 6px;
  `,
  ProfileCard: styled.div<{ size: "small" | "large" }>`
    margin-top: 20px;
    width: ${({ size }) => (size === "small" ? "170px" : "265px")};
    border-bottom: 1px solid #ccc;
    border-left: 1px solid #ccc;
    background: #fff;
    height: 70px;
  `,
  CardContent: styled.div`
    padding: 10px 16px 18px 16px;
  `,
  SmallTitle: styled.span`
    color: #000;
    font-family: Noto Sans KR;
    font-size: 11px;
    font-style: normal;
    font-weight: 500;
  `,
  CardText: styled.p`
    color: #000;
    font-family: Noto Serif KR;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    margin: 0;
  `,
};
