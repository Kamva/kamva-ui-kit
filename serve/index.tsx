import * as React from "react";
import { render } from "react-dom";
import { InputMask, Input } from "../src";

render(
  <div>
    <InputMask
      type={"text"}
      name="name"
      placeholder="name"
      id="name"
      label={"Masked Inpt"}
      mask={[
        "(",
        /[1-9]/,
        /\d/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]}
    />
    <Input type={"text"} name="vvv" placeholder="vvv" id="vvv" label={"vvv"} />
  </div>,
  document.getElementById("root"),
);
