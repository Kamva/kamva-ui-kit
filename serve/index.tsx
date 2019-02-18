import * as React from "react";
import { render } from "react-dom";
import { TextArea } from "../src";

render(
  <TextArea id={"input"} label={"عنوان"} placeholder={"متن آزمایشی ..."} />,
  document.getElementById("root"),
);
