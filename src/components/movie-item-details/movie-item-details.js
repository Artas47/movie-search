import React from "react";
import Modal from "../modal/modal";
import { useStateValue } from "../../context/state";

const MovieItemDetails = () => {
  const [{ currentMovie }] = useStateValue();
  return <Modal movie={currentMovie} />;
};

export default MovieItemDetails;
