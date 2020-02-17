import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
  margin: 0;
  padding: 0;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
  @media only screen and (max-width: 1600px) {
    font-size: 55.5%;
  }
  @media only screen and (max-width: 1400px) {
    font-size: 50.5%;
  }
  @media only screen and (max-width: 1200px) {
    font-size: 45.5%;
  }
}
body {
  font-family: 'Work Sans', sans-serif;
  overflow: hidden;
}
`;
