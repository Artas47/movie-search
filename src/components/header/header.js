import React from "react";
import * as Styled from "./header.styles";
import SearchBar from "../search-bar/search-bar";
import { useStateValue } from "../../context/state";

export const Header = () => {
  const [state, dispatch] = useStateValue();
  return (
    <Styled.Header showSidebar={state.showSidebar}>
      <SearchBar />
      {state.showSidebar ? (
        <Styled.InSVG onClick={() => dispatch({ type: "TOGGLE_SIDEBAR" })} />
      ) : (
        <Styled.OutSVG onClick={() => dispatch({ type: "TOGGLE_SIDEBAR" })} />
      )}
    </Styled.Header>
  );
};
export default Header;
