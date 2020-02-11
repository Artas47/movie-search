import styled from "styled-components";
import { ReactComponent as Cancel } from "../../assets/cross.svg";

export const SidebarItem = styled.div`
  width: 90%;
  height: 15rem;
  border: 1px solid white;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  margin: 1rem 0;
  @media only screen and (max-width: 1400px) {
    height: 13rem;
  }
`;

export const SidebarItemImage = styled.img`
  height: 100%;
  min-width: 10rem;
  @media only screen and (max-width: 1400px) {
    min-width: 8rem;
  }
`;

export const SidebarItemTitle = styled.p`
  font-size: 1.5rem;
  text-align: center;
  width: 20rem;
  @media only screen and (max-width: 1400px) {
    font-size: 1.2rem;
  }
`;

export const SidebarItemCancel = styled(Cancel)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 1.4rem;
  height: 1.4rem;
  fill: #fff;
`;
