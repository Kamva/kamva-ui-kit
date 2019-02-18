import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  button {
    font-family: inherit;
    font-size: 1rem;
    appearance: none;
    outline: none;
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    cursor: pointer;
    
    &:hover,
    &:focus {
      border: none;
      outline: none;
    }
    
    &::-moz-focus-inner {
      border: 0;
      padding: 0;
    }
  }
  * {
    box-sizing: border-box;
  }
`;
