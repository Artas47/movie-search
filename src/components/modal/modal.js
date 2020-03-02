import React from "react";
import ReactDOM from "react-dom";
import * as Styled from "./modal.styles";
import { Spinner } from "../spinner/spinner";
import { useHistory } from "react-router-dom";
import Fade from "../fade-animation/fade";
import RatingBox from "../rating-box/rating-box";
import { useStateValue } from "../../context/state";

const Modal = ({ movie }) => {
  let history = useHistory();
  const [{ showSidebar }] = useStateValue();
  const renderModalContent = () => {
    return (
      <Styled.Modal onClick={() => history.push("/")} showSidebar={showSidebar}>
        {movie ? (
          <Fade in={true}>
            <Styled.ModalContent
              onClick={e => e.stopPropagation()}
              showSidebar={showSidebar}
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
  return ReactDOM.createPortal(
    renderModalContent(),
    document.getElementById("modal")
  );
};

export default Modal;
