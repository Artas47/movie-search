import React from "react";
import * as Styled from "./main-content.styles";
import Header from "../header/header";

export const MainContent = () => {
  return (
    <Styled.MainContent>
      <Header />
      <p>MainContent</p>
    </Styled.MainContent>
  );
};

export default MainContent;
