import React from "react";
import * as Styled from "./in-svg.styles";
import { useStateValue } from "../../context/state";
import { TOGGLE_SIDEBAR } from "../../context/types";

const InSVG = () => {
  const [state, dispatch] = useStateValue();
  return (
    <Styled.InSVG
      onClick={() => {
        localStorage.setItem("showSidebar", false);
        dispatch({
          type: TOGGLE_SIDEBAR,
          showSidebar: localStorage.showSidebar
        });
      }}
    />
  );
};

export default InSVG;
