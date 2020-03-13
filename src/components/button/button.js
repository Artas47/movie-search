import React from "react";
import * as Styled from "./button.styles";

const Button = ({ buttonTitle, ...props }) => {
  return <Styled.Button {...props}>{buttonTitle}</Styled.Button>;
};

export default Button;
