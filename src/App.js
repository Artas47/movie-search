import React from "react";
import SideBar from "./components/sidebar/sidebar";
import MainContent from "./components/main-content/main-content";
import * as Styled from "./App.styles";
import BackgroundImg from "./assets/background.jpg";

function App() {
  return (
    <Styled.App backgroundImg={BackgroundImg}>
      <MainContent />
      <SideBar />
    </Styled.App>
  );
}

export default App;
