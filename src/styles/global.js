import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,8,121,1) 25%, rgba(0,212,255,1) 100%);
    font-family: Arial, Helvetica, sans-serif
    color: black;
    font-weight: 400;
  }
`;

export default GlobalStyle;
