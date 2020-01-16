import React from "react";
import * as Styled from "./main-content.styles";
import Header from "../header/header";
import MovieList from "../movie-list/movie-list";

export const MainContent = () => {
  return (
    <Styled.MainContent>
      <Header />
      <MovieList />
    </Styled.MainContent>
  );
};

export default MainContent;
