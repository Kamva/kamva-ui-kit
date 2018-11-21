import * as React from "react";
import { render } from "react-dom";
import "./style/style.css";
import { PrimaryButtons } from "./components/docs/primaryButtons";

const Layout = () => {
  return (
    <div className="container">
      <PrimaryButtons />
    </div>
  );
};

render(<Layout />, document.getElementById("root"));
