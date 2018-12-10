import * as React from "react";
import { PrimaryButton, Secondary, Outline } from "./components/buttons";
import { colorPallet } from "./types";

export interface IButtonProps {
  secondary?: boolean;
  outline?: boolean;
  children?: React.ReactNode;
  onClick?: () => any;
  color?: colorPallet;
  disable?: boolean;
  circle?: boolean;
  className?: string;
}

export const Button: React.SFC<IButtonProps> = props => {
  const { secondary, outline, children, ...prop } = props as IButtonProps;
  if (secondary) {
    return <Secondary {...prop}>{children}</Secondary>;
  } else if (outline) {
    return <Outline {...prop}>{children}</Outline>;
  }
  return <PrimaryButton {...prop}>{children}</PrimaryButton>;
};
