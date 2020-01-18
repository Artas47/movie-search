import React, { useEffect } from "react";
import Modal from "../modal/modal";
import { useStateValue } from "../../context/state";
import Axios from "axios";

const MovieItemDetails = props => {
  const [{ currentMovie }, dispatch] = useStateValue();
  useEffect(() => {
    const fetchMovieDetails = async id => {
      const response = await Axios.get(
        `http://www.omdbapi.com/?i=${id}&apikey=c6f9646d`
      );
      dispatch({ type: "FETCH_MOVIE", movie: response.data });
    };
    fetchMovieDetails(props.match.params.id);
  }, []);
  console.log(currentMovie);
  if (!currentMovie) {
    return <div></div>;
  }
  return <Modal title={currentMovie.Title} plot={currentMovie.Plot} />;
};

export default MovieItemDetails;
