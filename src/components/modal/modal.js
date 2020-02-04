import React from "react";
import ReactDOM from "react-dom";
import * as Styled from "./modal.styles";
import { useHistory } from "react-router-dom";

const Modal = ({ movie }) => {
  let history = useHistory();
  const renderModalContent = () => {
    return (
      <Styled.Modal onClick={() => history.push("/")}>
        <Styled.ModalContent onClick={e => e.stopPropagation()}>
          <Styled.ModalImage src={movie.Poster} />
          <Styled.ModalDescription>
            <Styled.ModalTitle>{movie.Title}</Styled.ModalTitle>
            <Styled.ModalPlot>{movie.Plot}</Styled.ModalPlot>
          </Styled.ModalDescription>
        </Styled.ModalContent>
      </Styled.Modal>
    );
  };
  console.log("modal");
  return ReactDOM.createPortal(
    renderModalContent(),
    document.getElementById("modal")
  );
};

export default Modal;
