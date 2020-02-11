import React from "react";
import * as Styled from "./sidebar.styles";
import { useStateValue } from "../../context/state";
import SidebarItem from "../sidebar-item/sidebar-item";

const SideBar = () => {
  const [{ favMovies }] = useStateValue();
  return (
    <Styled.SideBar>
      {favMovies.map(item => (
        <SidebarItem movie={item} />
      ))}
    </Styled.SideBar>
  );
};

export default SideBar;
