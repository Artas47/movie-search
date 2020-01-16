import React from "react";
import MovieItem from "../movie-item/movie-item";
import * as Styled from "./movie-list.styles";

export const MovieList = () => {
  return (
    <Styled.MovieList>
      <MovieItem />
    </Styled.MovieList>
  );
};

export default MovieList;
