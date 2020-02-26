import styled from "styled-components";

export const App = styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: #1a1e25;
  overflow-y: hidden;
  margin-right: auto;
  height: 100vh;
  font-size: 3rem;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0px; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
`;
