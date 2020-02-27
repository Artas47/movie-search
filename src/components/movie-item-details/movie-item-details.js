import React, { useEffect } from "react";
import Modal from "../modal/modal";
import { useStateValue } from "../../context/state";
import Axios from "axios";
import { FETCH_MOVIE, MOVIE_UNMOUNT } from "../../context/types";

const MovieItemDetails = props => {
  const [{ currentMovie }, dispatch] = useStateValue();
  useEffect(() => {
    const fetchMovieDetails = async id => {
      const response = await Axios.get(
        `https://www.omdbapi.com/?i=${id}&apikey=c6f9646d`
      );
      dispatch({ type: FETCH_MOVIE, movie: response.data });
    };
    fetchMovieDetails(props.match.params.id);
    return () => dispatch({ type: MOVIE_UNMOUNT });
  }, [dispatch, props.match.params.id]);

  return <Modal movie={currentMovie} />;
};

export default MovieItemDetails;
