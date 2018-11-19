import * as React from "react";
import { render } from "react-dom";
import { Provider } from "./index";
import "./style/style.css";

render(<Provider />, document.getElementById("root"));
