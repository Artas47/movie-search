import styled from "styled-components";

export const MainContent = styled.div`
  width: 80vw;
  margin-right: auto;
  height: 100vh;
  font-size: 3rem;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0px; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
`;
