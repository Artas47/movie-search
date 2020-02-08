import styled from "styled-components";

export const MainContent = styled.div`
  margin-right: auto;
  height: 100vh;
  font-size: 3rem;
  overflow-y: scroll;
  width: 80vw;
  ::-webkit-scrollbar {
    width: 0px; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
`;

export const Text = styled.h3`
  color: #fff;
  text-align: center;
`;
