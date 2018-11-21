import * as React from "react";
import { Button } from "../buttons";
import { colorPallet } from "../../utils/style";

export const PrimaryButtons = () => {
  return (
    <div className="buttons">
      <h2>Buttons</h2>
      <div className="primary">
        <h3>Primary</h3>
        <div>
          <Button>شروع با کاموا</Button>
          <Button color={colorPallet.secondary}>شروع با کاموا</Button>
          <Button color={colorPallet.third}>شروع با کاموا</Button>
        </div>
        <div>
          <Button disable={true}>شروع با کاموا</Button>
          <Button color={colorPallet.secondary} disable={true}>
            شروع با کاموا
          </Button>
          <Button color={colorPallet.third} disable={true}>
            شروع با کاموا
          </Button>
        </div>
      </div>
    </div>
  );
};
