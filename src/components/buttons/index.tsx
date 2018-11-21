import * as React from "react";
import { PrimaryButton } from "./primary";
import { colorPallet } from "../../utils/style";
import { Secondary } from "./secondary";
import {Outline} from "./outline";

interface IButtonProps {
  secondary?: boolean;
  outline?: boolean;
  children?: Element | string;
  onClick?: () => any;
  color?: colorPallet;
  disable?: true;
  circle?: boolean;
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
