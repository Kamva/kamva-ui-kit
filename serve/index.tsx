import * as React from "react";
import { render } from "react-dom";
import { Button, colorPallet } from "../dist/index.js";

render(
  <Button color={colorPallet.secondary} outline circle>
    H
  </Button>,
  document.getElementById("root"),
);
