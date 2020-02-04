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
    return () => dispatch({ type: "MOVIE_UNMOUNT" });
  }, []);
  if (!currentMovie) {
    return <div>LOADING</div>;
  }
  console.log(currentMovie);
  return <Modal movie={currentMovie} />;
};

export default MovieItemDetails;
