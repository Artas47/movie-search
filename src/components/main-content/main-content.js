import React from "react";
import * as Styled from "./main-content.styles";
import MovieList from "../movie-list/movie-list";
import { useStateValue } from "../../context/state";
import WaveSVG from "../wave-svg/wave-svg";

export const MainContent = () => {
  const [{ searchTerm, movies, showSidebar }] = useStateValue();
  const renderMovieList = () => {
    if (searchTerm.length && !movies) {
      return <Styled.Text>Movies not found...</Styled.Text>;
    }
    if (!searchTerm) {
      return <Styled.Text>Search movies</Styled.Text>;
    }
    if (searchTerm && movies) {
      return <MovieList />;
    }
  };
  return (
    <Styled.MainContent showSidebar={showSidebar}>
      {renderMovieList()}
      <WaveSVG />
    </Styled.MainContent>
  );
};

export default MainContent;
