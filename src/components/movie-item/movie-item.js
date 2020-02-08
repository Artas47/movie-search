import React, { useState } from "react";
import * as Styled from "./movie-item.styles";
import Fade from "../fade-animation/fade";

export const MovieItem = props => {
  return (
    <Fade in={true}>
      <Styled.MovieItem to={`/movie/${props.id}`}>
        <Styled.MovieItemImg src={props.poster} />

        <Styled.MovieItemTitle>
          {props.title} <br /> ({props.type} {props.year})
        </Styled.MovieItemTitle>
      </Styled.MovieItem>
    </Fade>
  );
};

export default MovieItem;
