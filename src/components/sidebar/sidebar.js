import React, { useEffect, useState } from "react";
import * as Styled from "./sidebar.styles";
import { useStateValue } from "../../context/state";
import SidebarItem from "../sidebar-item/sidebar-item";

const SideBar = () => {
  const [{ favMovies, showSidebar }, dispatch] = useStateValue();
  const [moviesToRender, setMoviesToRender] = useState([]);
  useEffect(() => {
    localStorage.setItem("favMovies", JSON.stringify(favMovies));
    let movies = JSON.parse(localStorage.favMovies);
    setMoviesToRender(movies);
  }, [favMovies]);
  if (!showSidebar) {
    return <div></div>;
  }
  return (
    <Styled.Sidebar>
      <Styled.SidebarEmptyText>
        {!moviesToRender.length ? "Favorite movies list is empty" : ""}
      </Styled.SidebarEmptyText>
      {moviesToRender.map(item => (
        <SidebarItem movie={item} />
      ))}
    </Styled.Sidebar>
  );
};

export default SideBar;
