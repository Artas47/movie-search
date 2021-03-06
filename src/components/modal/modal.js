import React from "react";
import ReactDOM from "react-dom";
import * as Styled from "./modal.styles";
import { Spinner } from "../spinner/spinner";
import { useHistory } from "react-router-dom";
import Fade from "../fade-animation/fade";
import RatingBox from "../rating-box/rating-box";
import { useStateValue } from "../../context/state";
import Button from "../button/button";
import { isFav } from "../../helpers/isFav";
import { REMOVE_FAV_MOVIE, ADD_FAV_MOVIE } from "../../context/types";

const Modal = ({ movie }) => {
  let history = useHistory();
  const [{ showSidebar, favMovies }, dispatch] = useStateValue();
  const renderModalContent = () => {
    return (
      <Styled.Modal onClick={() => history.push("/")} showSidebar={showSidebar}>
        {movie ? (
          <Fade in={true}>
            <Styled.ModalContent
              onClick={e => e.stopPropagation()}
              showSidebar={showSidebar}
              data-testid="test-modal-content"
            >
              <Styled.ModalImage
                alt={movie.Title}
                src={movie.Poster}
                showSidebar={showSidebar}
              />
              <Styled.ModalDescription>
                <Styled.ModalTitle>
                  {movie.Title.toUpperCase()}
                </Styled.ModalTitle>
                <Styled.ModalDetails>
                  <Styled.ModalDetailsItem>
                    {movie.Released}
                  </Styled.ModalDetailsItem>
                  <Styled.ModalDetailsItem>
                    {movie.Runtime}
                  </Styled.ModalDetailsItem>
                  <Styled.ModalDetailsItem>
                    {movie.Genre}
                  </Styled.ModalDetailsItem>
                </Styled.ModalDetails>
                <Styled.ModalPlot>
                  {movie.Plot === "N/A" ? "Plot wasn't found." : movie.Plot}
                </Styled.ModalPlot>
                <RatingBox />
                <Button
                  onClick={() => {
                    if (isFav(movie, favMovies)) {
                      dispatch({ type: REMOVE_FAV_MOVIE, movie: movie });
                    } else {
                      dispatch({ type: ADD_FAV_MOVIE, movie: movie });
                    }
                  }}
                  data-testid="test-btn"
                  buttonTitle={
                    !isFav(movie, favMovies)
                      ? "Add to watchlist"
                      : "Remove from watchlist"
                  }
                />
                <Styled.ModalCancel onClick={() => history.push("/")} />
              </Styled.ModalDescription>
            </Styled.ModalContent>
          </Fade>
        ) : (
          <Spinner />
        )}
      </Styled.Modal>
    );
  };
  return ReactDOM.createPortal(renderModalContent(), document.body);
};

export default Modal;
