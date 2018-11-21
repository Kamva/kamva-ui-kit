import * as React from "react";
import { PrimaryButton } from "./primary";
import { colorPallet } from "../../utils/style";
import { Secondary } from "./secondary";

interface IButtonProps {
  secondary?: boolean;
  outline?: boolean;
  children?: Element | string;
  onClick?: () => any;
  color?: colorPallet;
  disable?: true;
}

export const Button: React.SFC<IButtonProps> = props => {
  const { secondary, outline, children, ...prop } = props as IButtonProps;
  if (secondary) {
    return <Secondary {...prop}>{children}</Secondary>;
  } else if (outline) {
    return <p>outline</p>;
  }
  return <PrimaryButton {...prop}>{children}</PrimaryButton>;
};
