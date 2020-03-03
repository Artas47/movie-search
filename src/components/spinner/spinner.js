import React from "react";
import * as Styled from "./spinner.styles";

export const Spinner = () => {
  return (
    <Styled.SpinnerOverlay data-testid="test-spinner">
      <Styled.SpinnerContainer />
    </Styled.SpinnerOverlay>
  );
};

export default Spinner;
