import styled from "styled-components";

export const MainContent = styled.div`
  height: 100vh;
  font-size: 3rem;
  overflow-y: scroll;
  width: 80%;
  display: flex;
  justify-content: center;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
  @media only screen and (max-width: 1000px) {
    width: 70%;
  }
  width: ${({ showSidebar }) => (showSidebar ? "" : "100% !important")};
`;

export const Text = styled.h3`
  color: #fff;
  text-align: center;
  font-weight: 400;
  margin-top: 5rem;
  font-size: 5rem;
`;
