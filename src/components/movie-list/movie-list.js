import React from "react";
import MovieItem from "../movie-item/movie-item";
import * as Styled from "./movie-list.styles";
import { Spinner } from "../spinner/spinner";
import { useStateValue } from "../../context/state";
import { filterMovies } from "./filterMovies";

export const MovieList = () => {
  const [{ movies, isLoading, showSidebar }] = useStateValue();
  const filteredMovies = filterMovies(movies);
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Styled.MovieList showSidebar={showSidebar} data-testid="test-list">
      {filteredMovies.map(movie => {
        return <MovieItem key={movie.imdbID} movie={movie} />;
      })}
    </Styled.MovieList>
  );
};

export default MovieList;
