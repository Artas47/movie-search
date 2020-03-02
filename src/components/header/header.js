import React from "react";
import * as Styled from "./header.styles";
import SearchBar from "../search-bar/search-bar";
import { useStateValue } from "../../context/state";
import Logo from "../../assets/logo.png";
import InSVG from "../in-svg/in-svg";
import OutSVG from "../out-svg/out-svg";

export const Header = () => {
  const [state] = useStateValue();
  return (
    <Styled.Header showSidebar={state.showSidebar}>
      <Styled.LogoPNG src={Logo} alt="logo" />
      <SearchBar />
      {state.showSidebar ? <InSVG /> : <OutSVG />}
    </Styled.Header>
  );
};
export default Header;
