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
        <Styled.MovieItemImg src={props.poster}>
          {props.poster === "N/A" ? "Image not found" : ""}
        </Styled.MovieItemImg>
        <Styled.MovieButtonContainer>
          <Styled.MovieButton
            onClick={() => {
              if (isFav(props.movie)) {
                dispatch({ type: "REMOVE_FAV_MOVIE", movie: props.movie });
              } else {
                dispatch({ type: "ADD_FAV_MOVIE", movie: props.movie });
              }
            }}
          >
            {isFav(props.movie) ? " Remove from favorites" : "Add to favorites"}
          </Styled.MovieButton>
          <Styled.MovieButton
            onClick={() => history.push(`/movie/${props.id}`)}
          >
            Details
          </Styled.MovieButton>
        </Styled.MovieButtonContainer>
        <Styled.MovieItemDescBox isfav={isFav(props.movie)}>
          <Styled.MovieItemTitle>
            {props.title} <br /> ({props.type} {props.year})
          </Styled.MovieItemTitle>
        </Styled.MovieItemDescBox>
        {/* <Styled.MovieStar
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
          isfav={isFav(props.movie)}
        /> */}
      </Styled.MovieItem>
    </Fade>
  );
};

export default MovieItem;
