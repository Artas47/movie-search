import styled from "styled-components";

export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 20%;
  z-index: 7;
  background-color: rgb(0, 0, 0, 0.5);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  word-wrap: break-word;
  overflow-y: scroll;
  overflow-x: hidden;
  border-left: 2px solid #303c52;
  @media only screen and (max-width: 1000px) {
    width: 30%;
  }
`;

export const SidebarEmptyText = styled.p`
  text-align: center;
  color: #ccc;
  font-size: 2rem;
  margin-top: 2rem;
`;
