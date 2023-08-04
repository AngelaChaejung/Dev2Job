import { styled } from "styled-components";

const ProfileCard = () => {
  return (
    <StProfileCard.CardContainer>
      <StProfileCard.ProfileCard size={"large"}>
        <StProfileCard.CardContent>
          <StProfileCard.SmallTitle>Education</StProfileCard.SmallTitle>
          <StProfileCard.CardText>Computer Engineer, Bachelor</StProfileCard.CardText>
        </StProfileCard.CardContent>
      </StProfileCard.ProfileCard>
      <StProfileCard.ProfileCard size={"large"}>
        <StProfileCard.CardContent>
          <StProfileCard.SmallTitle>Contact</StProfileCard.SmallTitle>
          <StProfileCard.CardText>+82.10.000.0000</StProfileCard.CardText>
        </StProfileCard.CardContent>
      </StProfileCard.ProfileCard>
      <StProfileCard.ProfileCard size={"small"}>
        <StProfileCard.CardContent>
          <StProfileCard.SmallTitle>Location</StProfileCard.SmallTitle>
          <StProfileCard.CardText>Seoul, S.Korea</StProfileCard.CardText>
        </StProfileCard.CardContent>
      </StProfileCard.ProfileCard>
      <StProfileCard.ProfileCard size={"small"}>
        <StProfileCard.CardContent>
          <StProfileCard.SmallTitle>Language</StProfileCard.SmallTitle>
          <StProfileCard.CardText>Korean, English</StProfileCard.CardText>
        </StProfileCard.CardContent>
      </StProfileCard.ProfileCard>
    </StProfileCard.CardContainer>
  );
};

export default ProfileCard;

const StProfileCard = {
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
    font-family: Noto Sans KR;
    font-size: 11px;
    font-style: normal;
    font-weight: 500;
  `,
  CardText: styled.p`
    font-family: Noto Serif KR;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    margin: 0;
  `,
};
