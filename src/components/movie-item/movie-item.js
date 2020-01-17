import React from "react";
import * as Styled from "./movie-item.styles";

export const MovieItem = props => {
  return (
    <Styled.MovieItem>
      <Styled.MovieItemImg src={props.poster} />
      <Styled.MovieItemTitle>{props.title}</Styled.MovieItemTitle>
      <Styled.MovieDescription>{props.description}</Styled.MovieDescription>
    </Styled.MovieItem>
  );
};

export default MovieItem;
