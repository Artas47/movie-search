import React from "react";
import * as Styled from "./header.styles";
import SearchBar from "../search-bar/search-bar";
import { useStateValue } from "../../context/state";
import { TOGGLE_SIDEBAR } from "../../context/types";

export const Header = () => {
  const [state, dispatch] = useStateValue();
  return (
    <Styled.Header showSidebar={state.showSidebar}>
      {/* <Styled.Logo>movie-search</Styled.Logo> */}
      <SearchBar />
      {state.showSidebar ? (
        <Styled.InSVG
          onClick={() => {
            localStorage.setItem("showSidebar", false);
            dispatch({
              type: TOGGLE_SIDEBAR,
              showSidebar: localStorage.showSidebar
            });
          }}
        />
      ) : (
        <Styled.OutSVG
          onClick={() => {
            localStorage.setItem("showSidebar", true);
            dispatch({
              type: TOGGLE_SIDEBAR,
              showSidebar: localStorage.showSidebar
            });
          }}
        />
      )}
    </Styled.Header>
  );
};
export default Header;
