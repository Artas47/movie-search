import React from "react";
import * as Styled from "./movie-item.styles";

export const MovieItem = () => {
  return (
    <Styled.MovieItem>
      <Styled.MovieItemImg
        src={
          "https://utellyassets2-8.imgix.net/2/Open/TMDB4_2462/Misc/5u3Y2HpD0wlK697lnpvNn6h5lYK.jpg?fit=crop&auto=compress&crop=faces,top"
        }
      />
      <Styled.MovieItemTitle>Bojack</Styled.MovieItemTitle>
    </Styled.MovieItem>
  );
};

export default MovieItem;
