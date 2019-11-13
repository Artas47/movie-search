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
}
body {
  font-family: 'Work Sans', sans-serif;
  background-color: rgba(0, 0, 0, 0.1);
  width: 100vw;
  height: 100vh;
}
`;
