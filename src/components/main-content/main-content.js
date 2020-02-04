import React from "react";
import * as Styled from "./main-content.styles";
import MovieList from "../movie-list/movie-list";

export const MainContent = () => {
  return (
    <Styled.MainContent>
      <MovieList />
    </Styled.MainContent>
  );
};

export default MainContent;
