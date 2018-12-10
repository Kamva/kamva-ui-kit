import * as React from "react";
import { PrimaryButton, Secondary, Outline } from "./components/buttons";
import { colorPallet } from "./types";

export interface IButtonProps {
  secondary?: boolean;
  outline?: boolean;
  children?: React.ReactNode;
  onClick?: () => any;
  color?: colorPallet;
  disable?: true;
  circle?: boolean;
}

export const Button: React.SFC<IButtonProps> = props => {
  const { secondary, outline, children, ...prop } = props as IButtonProps;
  if (secondary) {
    return (
      <div>
        <Secondary {...prop}>{children}</Secondary>
      </div>
    );
  } else if (outline) {
    return (
      <div>
        <Outline {...prop}>{children}</Outline>
      </div>
    );
  }
  return <PrimaryButton {...prop}>{children}</PrimaryButton>;
};
