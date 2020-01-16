import styled from "styled-components";

export const App = styled.main`
  display: flex;
  background-size: cover;
  background-image: linear-gradient(
      to bottom,
      rgb(0, 0, 0, 0.8),
      rgb(0, 0, 0, 0.8)
    ),
    url(${props => (props.backgroundImg ? props.backgroundImg : "")});
  background-position: center;
`;