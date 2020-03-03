import React from "react";
import * as Styled from "./sidebar-item.styles";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../context/state";
import { REMOVE_FAV_MOVIE } from "../../context/types";

const SidebarItem = ({ movie, movie: { imdbID, Poster, Title } }) => {
  let history = useHistory();
  let [state, dispatch] = useStateValue();
  return (
    <Styled.SidebarItem onClick={() => history.push(`/movie/${imdbID}`)}>
      <Styled.SidebarItemImage
        src={Poster}
        data-testid="test-sidebarItem-message"
      >
        {Poster === "N/A" ? "Image not found" : ""}
      </Styled.SidebarItemImage>
      <Styled.SidebarItemTitle>{Title}</Styled.SidebarItemTitle>
      <Styled.SidebarItemCancel
        onClick={e => {
          e.stopPropagation();
          dispatch({ type: REMOVE_FAV_MOVIE, movie: movie });
        }}
      />
    </Styled.SidebarItem>
  );
};

export default SidebarItem;
