import React, { useEffect } from "react";
import { useStateValue } from "../../context/state";
import Axios from "axios";
import { FETCH_MOVIE, MOVIE_UNMOUNT } from "../../context/types";
import MovieItemDetails from "./movie-item-details";

const MovieItemDetailsContainer = ({ match }) => {
  const [state, dispatch] = useStateValue();
  useEffect(() => {
    const fetchMovieDetails = async id => {
      const response = await Axios.get(
        `https://www.omdbapi.com/?i=${id}&apikey=c6f9646d`
      );
      dispatch({ type: FETCH_MOVIE, movie: response.data });
    };
    fetchMovieDetails(match.params.id);
    return () => dispatch({ type: MOVIE_UNMOUNT });
  }, [dispatch, match.params.id]);
  return <MovieItemDetails />;
};

export default MovieItemDetailsContainer;
