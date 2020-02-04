import styled from "styled-components";

export const App = styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-size: cover;
  background-image: linear-gradient(
      to bottom,
      rgb(0, 0, 0, 0.8),
      rgb(0, 0, 0, 0.8)
    ),
    url(${props => (props.backgroundImg ? props.backgroundImg : "")});
  background-position: center;
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
