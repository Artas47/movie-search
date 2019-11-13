import React from "react";
import * as Styled from "./header.styles";

export const Header = () => {
  return (
    <Styled.Header>
      <Styled.Input type="text" placeholder="Look for movies" />
    </Styled.Header>
  );
};
export default Header;
