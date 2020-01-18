import React from "react";
import ReactDOM from "react-dom";
import * as Styled from "./modal.styles";
import { useHistory } from "react-router-dom";

const Modal = props => {
  let history = useHistory();
  const renderModalContent = () => {
    return (
      <Styled.Modal onClick={() => history.push("/")}>
        <Styled.ModalContent onClick={e => e.stopPropagation()}>
          {props.plot}
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
