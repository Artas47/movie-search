import React from "react";
import MovieItem from "../movie-item/movie-item";
import * as Styled from "./movie-list.styles";
import { Spinner } from "../spinner/spinner";
import { useStateValue } from "../../context/state";

export const MovieList = () => {
  const [{ movies, isLoading, showSidebar }, dispatch] = useStateValue();
  //filtering movies to eliminate duplicates
  let filteredMovies = [...new Set(movies.map(item => item.imdbID))].map(id => {
    return movies.find(a => a.imdbID === id);
  });
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Styled.MovieList showSidebar={showSidebar}>
      {filteredMovies.map(item => {
        return (
          <MovieItem
            key={item.imdbID}
            id={item.imdbID}
            poster={item.Poster}
            title={item.Title}
            year={item.Year}
            type={item.Type}
            movie={item}
          />
        );
      })}
    </Styled.MovieList>
  );
};

export default MovieList;
