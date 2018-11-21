import * as React from "react";
import { render } from "react-dom";
import { Button } from "./index";
import "./style/style.css";
import { colorPallet } from "./utils/style";

const Layout = () => {
  return (
    <div className="container">
      <div className="buttons">
        <h2>Buttons</h2>
        <Button color={colorPallet.third} disable={true}>شروع با کاموا</Button>
      </div>
    </div>
  );
};

render(<Layout />, document.getElementById("root"));
