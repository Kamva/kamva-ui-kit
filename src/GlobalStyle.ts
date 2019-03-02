import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  button {
    font-family: inherit;
    font-size: 1rem;
    -webkit-appearance: none;
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
  textarea,
  input {
    font-family: inherit;
    outline: none;
    border: 0;
    vertical-align: middle;
    white-space: normal;
    box-sizing: border-box;
    border:none;
    background-image:none;
    background-color:transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    -webkit-appearance: none;
    margin: 0;
    padding: 0;

    &:hover,
    &:focus,
    &:active {
      outline: 0;
     -webkit-box-shadow: 0 0 0 30px white inset !important;
    }
    &:-webkit-autofill {
    -webkit-text-fill-color: yellow !important;
    }
  }
  textarea,
  input[type="text"],
  input[type="button"],
  input[type="submit"] {
   -webkit-appearance: none;
   border-radius: 0;
  }
  label {
    margin: 0;
    padding: 0;
  }
  * {
    box-sizing: border-box;
  }
`;
