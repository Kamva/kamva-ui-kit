import * as React from "react";
import { render } from "react-dom";
import { AppAlert, Button, Input, SecondaryButton, useAlert } from "../src";

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
      <br />
      <SecondaryButton boxShadow={false}>سلام</SecondaryButton>
    </div>
  );
};
render(
  <AppAlert>
    <App />
  </AppAlert>,
  document.getElementById("root"),
);
