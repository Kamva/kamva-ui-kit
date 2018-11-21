import * as React from "react";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	button {
		font-family: Vazir;
		appearance: none;
		outline: none;
	  border: none;
	  margin: 0;
	  padding: 0;
	  width: auto;
    
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
`;
