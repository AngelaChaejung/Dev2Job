import { useState } from "react";
import "./App.css";
import { styled } from "styled-components";
import Header from "./Header";

function App() {
  return (
    <Stbody>
      <Header />
      hello world
    </Stbody>
  );
}

export default App;

const Stbody = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(249, 249, 249, 1);
`;
