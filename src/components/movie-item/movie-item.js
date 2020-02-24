import React from "react";
import * as Styled from "./movie-item.styles";
import Fade from "../fade-animation/fade";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../context/state";

export const MovieItem = props => {
  let history = useHistory();
  const [state, dispatch] = useStateValue();
  const isFav = movie => {
    return state.favMovies.find(item => item.imdbID === movie.imdbID);
  };
  return (
    <Fade in={true}>
      <Styled.MovieItem>
        <Styled.MovieItemImg
          onClick={() => history.push(`/movie/${props.id}`)}
          src={props.poster}
        />
        <Styled.MovieItemDescBox>
          <Styled.MovieItemTitle>
            {props.title} <br /> ({props.type} {props.year})
          </Styled.MovieItemTitle>
        </Styled.MovieItemDescBox>
        <Styled.MovieStar
          onClick={() => {
            if (isFav(props.movie)) {
              dispatch({ type: "REMOVE_FAV_MOVIE", movie: props.movie });
              // localStorage.setItem(
              //   "favMovies",
              //   JSON.stringify(state.favMovies)
              // );
            } else {
              dispatch({ type: "ADD_FAV_MOVIE", movie: props.movie });
              // localStorage.setItem(
              //   "favMovies",
              //   JSON.stringify(state.favMovies)
              // );
            }
          }}
          isFav={isFav(props.movie)}
        />
      </Styled.MovieItem>
    </Fade>
  );
};

export default MovieItem;
