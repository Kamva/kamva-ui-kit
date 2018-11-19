import * as React from "react";
import { PrimaryButton } from "./primary";

interface IButtonProps {
  secondary?: boolean;
  outline?: boolean;
  children?: Element | string;
  onClick?: () => any;
}

export const Button: React.SFC<IButtonProps> = props => {
  const { secondary, outline, children, ...prop } = props as IButtonProps;
  if (secondary) {
    return <p>secondary</p>;
  } else if (outline) {
    return <p>outline</p>;
  }
  return <PrimaryButton {...prop}>{children}</PrimaryButton>;
};
