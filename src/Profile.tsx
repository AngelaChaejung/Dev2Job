import React from "react";
import { styled } from "styled-components";
import ProfileCard from "./ProfileCard";
import BarChart from "./BarChart";
import ProjectList from "./ProjectList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  return (
    <StProfile.Body>
      <StProfile.NameArea>이름Name</StProfile.NameArea>
      <StProfile.EmailArea>developer0000@email.com</StProfile.EmailArea>
      <svg xmlns="http://www.w3.org/2000/svg" width="940" height="2" viewBox="0 0 940 2" fill="none">
        <path d="M0 1H940" stroke="black" />
      </svg>
      <ProfileCard />
      <StProfile.SubjectDivide>
        <StProfile.MiddleTitle>활동내역</StProfile.MiddleTitle>
        <svg xmlns="http://www.w3.org/2000/svg" width="890" height="2" viewBox="0 0 890 2" fill="none">
          <path d="M0 1H890" stroke="black" />
        </svg>
        <BarChart />
      </StProfile.SubjectDivide>
      <StProfile.SubjectDivide>
        <StProfile.TitleContainer>
          <StProfile.MiddleTitle>프로젝트 이력</StProfile.MiddleTitle>
          <StProfile.ProjectSum>
            <StProfile.ProjectSummaryElement>Totla projects: 24</StProfile.ProjectSummaryElement>
            <StProfile.ProjectSummaryElement>Total period: 5 years, 0 months</StProfile.ProjectSummaryElement>
          </StProfile.ProjectSum>
        </StProfile.TitleContainer>
        <svg xmlns="http://www.w3.org/2000/svg" width="890" height="2" viewBox="0 0 890 2" fill="none">
          <path d="M0 1H890" stroke="black" />
        </svg>
        <ProjectList />
      </StProfile.SubjectDivide>
      <StProfile.ViewMore>
        View More Projects <FontAwesomeIcon icon={faChevronDown} style={{ width: "14px" }} />
      </StProfile.ViewMore>
    </StProfile.Body>
  );
};

export default Profile;

const StProfile = {
  Body: styled.div`
    border-radius: 4px;
    border: 1px solid #ccc;
    background: #fff;
    width: 940px;
    height: fit-content;
    padding: 83px 30px 78px 50px;
    margin: auto;
  `,
  NameArea: styled.div`
    padding-left: 25px;
    font-family: Noto Sans KR;
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px;
  `,
  EmailArea: styled.div`
    padding: 20px 0 20px 27px;
    font-family: Noto Serif KR;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `,
  SubjectDivide: styled.div`
    padding: 120px 25px 0px 25px;
  `,
  MiddleTitle: styled.p`
    font-family: Noto Sans KR;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    margin: 0;
  `,
  ProjectSummaryElement: styled.div`
    color: #999;
    font-family: Noto Sans KR;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  `,
  TitleContainer: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,
  ProjectSum: styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
  `,
  ViewMore: styled.div`
    border-radius: 4px;
    background: #eee;
    display: flex;
    width: 200px;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 54px;
    margin: auto;
    margin-top: 82px;
    color: #000;
    text-align: center;
    font-family: Noto Sans KR;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    gap: 10px;
    cursor: pointer;
  `,
};
