import React from "react";
import { styled } from "styled-components";
import verifiedIcon from "../src/assets/verified.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dotline from "../src/assets/dotline.svg";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

interface ProjectData {
  title: string;
  period: string;
  periodInKorean: string;
  subtitle: string;
  language: string[];
  framework: string[];
  isVerified: boolean;
}

const ProjectList = () => {
  const data: ProjectData[] = [
    {
      title: "프로젝트 제목 Project Title",
      period: "2018.09.21 ~ 2020.06.25",
      periodInKorean: "2년 3개월",
      subtitle: "eazymation-dev/dev2job-fe-i18n",
      language: [
        "IT consulting",
        "IT consulting",
        "IT consulting",
        "IT consulting",
        "IT consulting",
        "IT consulting",
        "IT consulting",
      ],
      framework: [],
      isVerified: false,
    },
    {
      title: "프로젝트 제목 Project Title",
      period: "2018.09.21 ~ 2020.06.25",
      periodInKorean: "2년 3개월",
      subtitle: "eazymation-dev/dev2job-fe-i18n",
      language: ["IT consulting", "IT consulting", "IT consulting", "IT consulting", "IT consulting", "IT consulting"],
      framework: ["IT consulting"],
      isVerified: true,
    },
    {
      title: "프로젝트 제목 Project Title",
      period: "2018.09.21 ~ 2020.06.25",
      periodInKorean: "2년 3개월",
      subtitle: "eazymation-dev/dev2job-fe-i18n",
      language: ["IT consulting", "IT consulting", "IT consulting", "IT consulting", "IT consulting", "IT consulting"],
      framework: ["IT consulting"],
      isVerified: true,
    },
  ];
  const [isVerifiedOnly, setIsVerifiedOnly] = React.useState<boolean>(false);
  const filteredData = data.filter((item) => !isVerifiedOnly || item.isVerified);

  const handleVerifiedOnlyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsVerifiedOnly(event.target.checked);
  };

  return (
    <div>
      <StProject.VerifyOnly htmlFor="verifiedCheckbox">
        <input id="verifiedCheckbox" type="checkbox" checked={isVerifiedOnly} onChange={handleVerifiedOnlyChange} />
        Verified only
      </StProject.VerifyOnly>
      <StProject.Project>
        {filteredData.map((e, i) => (
          <StProject.ProjectBody>
            <div>
              {i !== filteredData.length - 1 && (
                <StProject.Dotline
                  src={dotline}
                  alt="dotline"
                  framework={e.framework.length}
                  language={e.language.length}
                />
              )}

              <FontAwesomeIcon icon={faCircle} style={{ width: "8px", marginRight: "13px" }} />
            </div>
            <StProject.PeriodDiv>
              <StProject.Period>{e.period}</StProject.Period>
              <StProject.PeriodTag>{e.periodInKorean}</StProject.PeriodTag>
            </StProject.PeriodDiv>
            <StProject.Content>
              {e.isVerified && (
                <StProject.Verified>
                  Verified
                  <img src={verifiedIcon} alt="verifiedIcon" />
                </StProject.Verified>
              )}
              <StProject.Title>{e.title}</StProject.Title>
              <StProject.Subtitle>{e.subtitle}</StProject.Subtitle>
              <StProject.GrayText>이 프로젝트에 사용된 언어</StProject.GrayText>
              <StProject.LangageDiv>
                {e.language.map((a) => (
                  <StProject.LanguageTag>{a}</StProject.LanguageTag>
                ))}
              </StProject.LangageDiv>
              <StProject.GrayText>이 프로젝트에 사용된 프레임워크</StProject.GrayText>
              {e.framework.length ? (
                e.framework.map((b) => <StProject.LanguageTag>{b}</StProject.LanguageTag>)
              ) : (
                <StProject.LanguageTag style={{ borderColor: "#999", color: "#999" }}>None</StProject.LanguageTag>
              )}
            </StProject.Content>
          </StProject.ProjectBody>
        ))}
      </StProject.Project>
    </div>
  );
};

export default ProjectList;

const StProject = {
  VerifyOnly: styled.label`
    margin-top: 17px;
    font-family: Noto Sans KR;
    font-size: 14px;
    font-weight: 500;
    justify-content: left;
    align-items: center;
    display: flex;
    gap: 8px;
    cursor: pointer;
    width: fit-content;
  `,
  Dotline: styled.img<{ framework: number; language: number }>`
    position: absolute;
    margin-left: 3px;
    margin-top: 32px;
    height: ${({ framework, language }) =>
      language >= 7 && framework >= 7 ? "349px" : language >= 7 && framework < 7 ? "313px" : "277px"};
  `,

  Project: styled.div`
    margin-top: 55px;
    display: flex;
    flex-direction: column;
    gap: 80px;
  `,
  ProjectBody: styled.div`
    display: flex;
    flex-direction: row;
  `,
  PeriodDiv: styled.div`
    display: flex;
    flex-direction: column;
  `,
  PeriodTag: styled.div`
    border-radius: 17px;
    background: #000;
    display: flex;
    color: #fff;
    font-family: Noto Sans KR;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    justify-content: center;
    align-items: center;
    width: 74px;
    height: 27px;
    margin-top: 18px;
  `,
  Period: styled.div`
    font-family: Noto Sans KR;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  `,
  Content: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding-left: 70px;
  `,
  Title: styled.div`
    font-family: Noto Sans KR;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
  `,
  Subtitle: styled.div`
    font-family: Noto Sans KR;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    padding-top: 5px;
  `,
  GrayText: styled.div`
    color: #999;
    font-family: Noto Sans KR;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px;
    padding-top: 20px;
    padding-bottom: 6px;
  `,
  LanguageTag: styled.div`
    border-radius: 4px;
    border: 1px solid #000;
    background: #fff;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    padding: 0 11px;
    height: 30px;
    align-items: center;
    display: flex;
    width: fit-content;
    flex-shrink: 0;
  `,
  LangageDiv: styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    flex-direction: row;
    gap: 6px;
  `,
  Verified: styled.div`
    position: absolute;
    color: #03c;
    font-family: Noto Sans KR;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    right: 0;
    display: flex;
    align-items: center;
  `,
};
