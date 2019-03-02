import * as React from "react";
import { render } from "react-dom";
import { AppAlert, Input, useAlert } from "../src";

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
      <Input
        id="er"
        isError={true}
        errorMsg="این فیلد به درستی پر نشده است."
        type="search"
        label="name"
      />
    </div>
  );
};
render(
  <AppAlert>
    <App />
  </AppAlert>,
  document.getElementById("root"),
);
