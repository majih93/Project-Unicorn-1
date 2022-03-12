import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }

  body {
    button {
      border:0;
      outline: 0;
      font-family: "Spoqa Han Sans", sans-serif;
    }
  }

  input {
    font-family: "Spoqa Han Sans", sans-serif;
  }
`;

export default GlobalStyle;
