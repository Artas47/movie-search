import React from "react";
import * as Styled from "./movie-item.styles";
import Fade from "../fade-animation/fade";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../context/state";
import { isFav } from "../../helpers/isFav";
import { REMOVE_FAV_MOVIE, ADD_FAV_MOVIE } from "../../context/types";

export const MovieItem = ({
  movie,
  movie: { Poster, imdbID, Title, Type, Year }
}) => {
  let history = useHistory();
  const [{ favMovies }, dispatch] = useStateValue();
  return (
    <Fade in={true}>
      <Styled.MovieItem>
        <Styled.MovieItemImg src={Poster} data-testid="test-img-container">
          {Poster === "N/A" ? "Image not found" : ""}
        </Styled.MovieItemImg>
        <Styled.MovieButtonContainer>
          <Styled.MovieButton
            onClick={() => {
              if (isFav(movie, favMovies)) {
                dispatch({ type: REMOVE_FAV_MOVIE, movie: movie });
              } else {
                dispatch({ type: ADD_FAV_MOVIE, movie: movie });
              }
            }}
            data-testid="test-btn"
          >
            {isFav(movie, favMovies)
              ? "Remove from favorites"
              : "Add to favorites"}
          </Styled.MovieButton>
          <Styled.MovieButton onClick={() => history.push(`/movie/${imdbID}`)}>
            Details
          </Styled.MovieButton>
        </Styled.MovieButtonContainer>
        <Styled.MovieItemDescBox isfav={isFav(movie, favMovies)}>
          <Styled.MovieItemTitle>
            {Title} <br /> ({Type} {Year})
          </Styled.MovieItemTitle>
        </Styled.MovieItemDescBox>
      </Styled.MovieItem>
    </Fade>
  );
};

export default MovieItem;
