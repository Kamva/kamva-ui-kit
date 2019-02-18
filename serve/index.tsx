import * as React from "react";
import { render } from "react-dom";
import { Input } from "../src";

render(
  <Input id={"input"} label={"عنوان"} placeholder={"متن آزمایشی ..."} />,
  document.getElementById("root"),
);
