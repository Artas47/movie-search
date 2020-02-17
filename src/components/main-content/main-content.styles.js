import styled, { css } from "styled-components";

export const MainContent = styled.div`
  height: 100vh;
  font-size: 3rem;
  overflow-y: scroll;
  width: 80%;
  display: flex;
  justify-content: center;
  ::-webkit-scrollbar {
    width: 0px; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
  @media only screen and (max-width: 1000px) {
    width: 70%;
  }
  ${props =>
    !props.showSidebar &&
    css`
      width: 100% !important;
    `}
`;

export const Text = styled.h3`
  color: #fff;
  text-align: center;
  font-weight: 400;
  margin-top: 5rem;
  font-size: 5rem;
  /* margin-right: 40rem;
  @media only screen and (max-width: 1200px) {
    margin-right: 30rem;
  }
  @media only screen and (max-width: 650px) {
    margin-right: 0;
  } */
`;
