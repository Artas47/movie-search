import styled from "styled-components";
import { ReactComponent as In } from "../../assets/in.svg";
import { ReactComponent as Out } from "../../assets/out.svg";

export const Header = styled.header`
  display: flex;
  width: ${({ showSidebar }) => (showSidebar ? "80%" : "100%")};
  justify-content: center;
  align-items: center;
  height: 3rem;
  border-bottom: 1px solid rgb(0, 0, 0, 0.1);
  font-size: 3rem;
  padding: 7rem 0;
  @media only screen and (max-width: 1000px) {
    width: 70%;
  }
`;

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
