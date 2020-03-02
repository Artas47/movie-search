import styled from "styled-components";
import { ReactComponent as In } from "../../assets/in.svg";

export const InSVG = styled(In)`
  position: absolute;
  top: 1rem;
  right: 21%;
  fill: #fff;
  min-width: 3rem;
  height: 3rem;
  z-index: 999;
  cursor: pointer;
  @media only screen and (max-width: 1000px) {
    right: 31%;
  }
`;
