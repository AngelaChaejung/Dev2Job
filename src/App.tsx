import "./App.css";
import { styled } from "styled-components";
import Header from "./Header";
import Navigation from "./Navigation";
import React from "react";
import Profile from "./Profile";

function App() {
  const [tab, setTab] = React.useState<"Profile" | "MyGits" | "Shares" | "Invitations" | "Job/Project List">("Profile");
  return (
    <Stbody>
      <Header />
      <Navigation tab={tab} setTab={setTab} />
      <StMainBody>
        <StTabTitle>{tab}</StTabTitle>
        {tab === "Profile" && <Profile />}
      </StMainBody>
    </Stbody>
  );
}

export default App;

const Stbody = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 2880px;
  background-color: rgba(249, 249, 249, 1);
`;
const StMainBody = styled.div`
  padding: 90px 200px;
`;
const StTabTitle = styled.div`
  color: #000;
  line-height: 25px;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  padding-left: 18px;
  padding-bottom: 27px;
`;
