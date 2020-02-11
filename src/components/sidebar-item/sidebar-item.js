import React from "react";
import * as Styled from "./sidebar-item.styles";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../context/state";

const SidebarItem = props => {
  let history = useHistory();
  let [state, dispatch] = useStateValue();
  return (
    <Styled.SidebarItem
      onClick={() => history.push(`/movie/${props.movie.imdbID}`)}
    >
      <Styled.SidebarItemImage src={props.movie.Poster} />
      <Styled.SidebarItemTitle>{props.movie.Title}</Styled.SidebarItemTitle>
      <Styled.SidebarItemCancel
        onClick={e => {
          e.stopPropagation();
          dispatch({ type: "REMOVE_FAV_MOVIE", movie: props.movie });
        }}
      />
    </Styled.SidebarItem>
  );
};

export default SidebarItem;
