import React from "react";
import MovieItem from "../movie-item/movie-item";
import * as Styled from "./movie-list.styles";
import { Spinner } from "../spinner/spinner";
import { useStateValue } from "../../context/state";

export const MovieList = () => {
  const [{ movies, showSpinner }, dispatch] = useStateValue();
  console.log(showSpinner);
  if (!movies.Search) {
    return <div></div>;
  } else if (showSpinner) {
    return <Spinner />;
  }
  let filteredMovies = [...new Set(movies.Search.map(item => item.imdbID))].map(
    id => {
      return movies.Search.find(a => a.imdbID === id);
    }
  );
  return (
    <Styled.MovieList>
      {filteredMovies.map(item => {
        return (
          <MovieItem
            key={item.imdbID}
            id={item.imdbID}
            poster={item.Poster}
            title={item.Title}
            description={item.Description}
          />
        );
      })}
    </Styled.MovieList>
  );
};

export default MovieList;
