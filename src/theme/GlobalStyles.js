import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s ease-in-out;
    font-family: "Roboto", sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
