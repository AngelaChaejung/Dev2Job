import React from "react";
import { styled } from "styled-components";
interface NavProps {
  tab: "Profile" | "MyGits" | "Shares" | "Invitations" | "Job/Project List";
  setTab: React.Dispatch<React.SetStateAction<"Profile" | "MyGits" | "Shares" | "Invitations" | "Job/Project List">>;
}

const Navigation: React.FC<NavProps> = ({ tab, setTab }) => {
  return (
    <StBody>
      <StTab onClick={() => setTab("Profile")} active={tab === "Profile"}>
        Profile
      </StTab>
      <StTab onClick={() => setTab("MyGits")} active={tab === "MyGits"}>
        MyGits
      </StTab>
      <StTab onClick={() => setTab("Shares")} active={tab === "Shares"}>
        Shares
      </StTab>
      <StTab onClick={() => setTab("Invitations")} active={tab === "Invitations"}>
        Invitations
      </StTab>
      <StJobTab
        onClick={() => setTab("Job/Project List")}
        style={{ cursor: "pointer" }}
        active={tab === "Job/Project List"}
      >
        Job/Project List
      </StJobTab>
    </StBody>
  );
};

export default Navigation;
const StBody = styled.div`
  width: 100vw;
  height: 48px;
  background: #d9d9d9;
  padding: 0px 15.2%;
  display: flex;
  flex-direction: row;
`;
const StTab = styled.div<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 110px;
  width: fit-content;
  height: 100%;
  background: ${({ active }) => (active ? "#000" : "transparent")};
  color: ${({ active }) => (active ? "#fff" : "#000")};
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;
const StJobTab = styled.div<{ active: boolean }>`
  display: flex;
  justify-content: center;
  padding: 0 12px;
  align-items: center;
  width: 110px;
  height: 100%;
  font-family: Inter;
  background: ${({ active }) => (active ? "#000" : "transparent")};
  color: ${({ active }) => (active ? "#fff" : "#ff00f5")};
  font-size: 16px;
  font-weight: 400;
  min-width: 120px;
  width: fit-content;
`;
