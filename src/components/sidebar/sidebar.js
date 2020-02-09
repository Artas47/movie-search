import React from "react";
import * as Styled from "./sidebar.styles";
import { useStateValue } from "../../context/state";

const SideBar = () => {
  const [{ favMovies }] = useStateValue();
  return (
    <Styled.SideBar>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {favMovies.map(item => (
          <p> {item.Title} </p>
        ))}
      </div>
    </Styled.SideBar>
  );
};

export default SideBar;
