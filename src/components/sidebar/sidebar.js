import React from "react";
import * as Styled from "./sidebar.styles";
import { useStateValue } from "../../context/state";
import SidebarItem from "../sidebar-item/sidebar-item";

const SideBar = () => {
  const [{ favMovies, showSidebar }] = useStateValue();
  if (!showSidebar) {
    return <div></div>;
  }
  return (
    <Styled.Sidebar>
      <Styled.SidebarEmptyText>
        {!favMovies.length ? "Favorite movies list is empty" : ""}
      </Styled.SidebarEmptyText>
      {favMovies.map(item => (
        <SidebarItem movie={item} />
      ))}
    </Styled.Sidebar>
  );
};

export default SideBar;
