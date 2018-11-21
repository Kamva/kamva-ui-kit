import * as React from "react";
import { render } from "react-dom";
import "./style/style.css";
import { PrimaryButtons } from "./components/docs/primaryButtons";
import { SecondaryButtons } from "./components/docs/secoundaryButtons";

const Layout = () => {
  return (
    <div className="container">
	    <h2>Buttons</h2>
      <PrimaryButtons />
      <SecondaryButtons />
    </div>
  );
};

render(<Layout />, document.getElementById("root"));
