import * as React from "react";
import { render } from "react-dom";
import "./style/style.css";
import { PrimaryButtons } from "./components/docs/primaryButtons";
import { SecondaryButtons } from "./components/docs/secoundaryButtons";
import { OutlineButtons } from "./components/docs/outlineButtons";

const Layout = () => {
  return (
    <div className="container">
	    <h1>Kamva UI Kit</h1>
	    <div className="buttons">
	      <h2>Buttons</h2>
	      <PrimaryButtons />
	      <SecondaryButtons />
	      <OutlineButtons />
	    </div>
    </div>
  );
};

render(<Layout />, document.getElementById("root"));
