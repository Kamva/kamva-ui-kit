import * as React from "react";
import { render } from "react-dom";
import { AppAlert, useAlert } from "../src";

const App = () => {
  const alert = useAlert();

  return (
    <div>
      <button
        onClick={() => {
          alert.error(<p>عملیات با موفقیت انجام شد</p>);
        }}
      >
        Show Alert
      </button>
    </div>
  );
};
render(
  <AppAlert>
    <App />
  </AppAlert>,
  document.getElementById("root"),
);
