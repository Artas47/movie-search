import React from "react";
import * as Styled from "./out-svg.styles";
import { useStateValue } from "../../context/state";
import { TOGGLE_SIDEBAR } from "../../context/types";

const OutSVG = () => {
  const [state, dispatch] = useStateValue();
  return (
    <Styled.OutSVG
      onClick={() => {
        localStorage.setItem("showSidebar", true);
        dispatch({
          type: TOGGLE_SIDEBAR,
          showSidebar: localStorage.showSidebar
        });
      }}
    />
  );
};

export default OutSVG;
