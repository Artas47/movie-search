import styled, { css } from "styled-components";
import { ReactComponent as Cancel } from "../../assets/cross.svg";

export const SidebarItem = styled.div`
  width: 90%;
  height: 15rem;
  border: 1px solid #2f3540;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  margin-bottom: 2rem;
  border-radius: 1rem;
  transition: all 0.2s;
  :hover {
    background-color: #2f3540;
  }
  @media only screen and (max-width: 1400px) {
    margin-bottom: 1rem;
  }
  @media only screen and (max-width: 700px) {
    height: 13rem;
  }
  @media only screen and (max-width: 550px) {
    height: 11rem;
    width: 95%;
  }
  @media only screen and (max-width: 400px) {
    height: 9rem;
  }
`;

export const SidebarItemImage = styled.div`
  height: 100%;
  width: 10rem;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  font-size: 1.5rem;
  word-wrap: break-word;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ src }) =>
    src &&
    css`
      background-image: ${props => `url(${props.src})`};
      background-size: cover;
      background-position: top;
    `}
  background-color: #000;
  @media only screen and (max-width: 1400px) {
    min-width: 8rem;
  }
  @media only screen and (max-width: 900px) {
    font-size: 1.2rem;
  }
  @media only screen and (max-width: 550px) {
    min-width: 6rem;
  }
  @media only screen and (max-width: 400px) {
    min-width: 5rem;
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
  @media only screen and (max-width: 400px) {
    top: 0.5rem;
    right: 0.5rem;
    width: 1rem;
    height: 1rem;
  }
`;
