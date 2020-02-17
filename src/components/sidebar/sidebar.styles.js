import styled from "styled-components";

export const SideBar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 20%;
  z-index: 7;
  background-color: rgb(0, 0, 0, 0.8);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  word-wrap: break-word;
  overflow-y: scroll;
  border-left: 1px solid #fff;
  @media only screen and (max-width: 1000px) {
    width: 30%;
  }
`;
