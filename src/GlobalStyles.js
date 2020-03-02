import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
  margin: 0;
  padding: 0;
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #3f4b5c;
    margin: 1rem 0;
  }

  ::-webkit-scrollbar {
    width: 12px;
    background-color: #f5f5f5;
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #737e94;
  }
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
