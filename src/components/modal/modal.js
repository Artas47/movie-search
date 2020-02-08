import React from "react";
import ReactDOM from "react-dom";
import * as Styled from "./modal.styles";
import { Spinner } from "../spinner/spinner";
import { useHistory } from "react-router-dom";
import Fade from "../fade-animation/fade";

const Modal = ({ movie }) => {
  let history = useHistory();
  const renderModalContent = () => {
    return (
      <Styled.Modal onClick={() => history.push("/")}>
        {movie ? (
          <Fade in={true}>
            <Styled.ModalContent onClick={e => e.stopPropagation()}>
              <Styled.ModalImage src={movie.Poster} />
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
                {/* {movie.Type}
              {movie.totalSeasons}
              <br />
              {movie.imdbRating}
              <br />
              {movie.imdbVotes}
              <br />
              <br />
              {movie.Writer}
              <br />
              {movie.Country}
              <br /> */}
                <Styled.ModalPlot>{movie.Plot}</Styled.ModalPlot>
              </Styled.ModalDescription>
              <Styled.ModalCancel onClick={() => history.goBack()} />
            </Styled.ModalContent>
          </Fade>
        ) : (
          <Spinner style={{ width: "100vw" }} />
        )}
      </Styled.Modal>
    );
  };
  console.log("movie", movie);
  return ReactDOM.createPortal(
    renderModalContent(),
    document.getElementById("modal")
  );
};

export default Modal;
