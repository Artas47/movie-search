import styled from "styled-components";

export const SideBar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  min-width: 40rem;
  z-index: 7;
  background-color: rgb(0, 0, 0, 0.8);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  word-wrap: break-word;
  overflow-y: scroll;
  border-left: 1px solid #fff;

  @media only screen and (max-width: 1200px) {
    min-width: 30rem;
  }
  @media only screen and (max-width: 650px) {
    display: none;
  }
`;
