import styled from "styled-components";
import { ReactComponent as Out } from "../../assets/out.svg";

export const OutSVG = styled(Out)`
  position: absolute;
  z-index: 999;
  top: 1rem;
  right: 1rem;
  fill: #fff;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
`;
