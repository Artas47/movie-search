import React from "react";
import * as Styled from "./sidebar-item.styles";
import { useHistory } from "react-router-dom";

const SidebarItem = props => {
  let history = useHistory();
  return (
    <Styled.SidebarItem
      onClick={() => history.push(`/movie/${props.movie.imdbID}`)}
    >
      <Styled.SidebarItemImage src={props.movie.Poster} />
      <Styled.SidebarItemTitle>{props.movie.Title}</Styled.SidebarItemTitle>
    </Styled.SidebarItem>
  );
};

export default SidebarItem;
