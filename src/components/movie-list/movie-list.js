import React from "react";
import MovieItem from "../movie-item/movie-item";
import * as Styled from "./movie-list.styles";
import { useStateValue } from "../../context/state";

export const MovieList = () => {
  const [state, dispatch] = useStateValue();
  if (!state.movies.Search) {
    return <div></div>;
  }
  return (
    <Styled.MovieList>
      {state.movies.Search.map(item => {
        return (
          <MovieItem
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
