import * as React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "styled-components";
import { Button } from "./components/buttons";
import { GlobalStyle } from "./style/globalResetStyle";

export enum colorPallet {
  primary = "191 , 204 , 39",
  secondary = "255 , 92 , 139",
  third = "0 , 172 , 239",
}

const theme = {
  pallet: colorPallet,
};

export const Provider = () => (
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <Button color={colorPallet.third}>شروع با کاموا</Button>
    </ThemeProvider>
    <GlobalStyle />
  </React.Fragment>
);
